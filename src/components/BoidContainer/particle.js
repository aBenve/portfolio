import * as THREE from 'three'
import {Clock, Matrix4} from 'three';


function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
  }

const maxVelocity = 250, maxAcceleration = 250, maxForce = 500

function onWindowResize(current, camera, renderer){
    camera.aspect = current.clientWidth / current.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( current.clientWidth, current.clientHeight );
}

export class SpaceRender{
    constructor(spaceRef){
        this.current = spaceRef.current

        //Space
        this.scene = new THREE.Scene()

        //Camera
        this.camera = new THREE.OrthographicCamera(

            this.current.clientWidth / -2,
            this.current.clientWidth / 2,
            this.current.clientHeight / -2,
            this.current.clientHeight / 2,
            0.1,
            1000
        )

        this.camera.position.z = 100
        this.scene.add( this.camera)


        //Renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha:true})

        this.renderer.setSize(this.current.clientWidth , this.current.clientHeight )
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.current.appendChild(this.renderer.domElement)

        window.addEventListener( 'resize', onWindowResize(this.current, this.camera, this.renderer), false );

    }
    unMount(){
        this.current.removeChild(this.renderer.domElement)
        window.removeEventListener( 'resize', onWindowResize(this.current, this.camera, this.renderer) );
    }
    render(){
        this.renderer.render(this.scene, this.camera)

    }
}

export class Space {
    constructor(spaceRef, particlesAmount,color, alingWeight , cohesionWeight, separationWeigth){


        this.spaceRender = new SpaceRender(spaceRef)

        this.particlesAmount = particlesAmount
        this.width = spaceRef.current.clientWidth
        this.height = spaceRef.current.clientHeight
		const size = 1;
        const particleGeometry = new THREE.ConeBufferGeometry(10 * size, 25 * size, 3)
        const particleMaterial = new THREE.MeshBasicMaterial({color: color})
		this.particlesMesh = new THREE.InstancedMesh(
            particleGeometry,
            particleMaterial,
			particlesAmount
        )
        this.particles = Array(this.particlesAmount)
                            .fill()
                            .map((e,i) => {return new Particle(
                                alingWeight,
                                cohesionWeight,
                                separationWeigth,
                                this.width, 
                                this.height, 
                                i,
								(pos, vel) => {
								  //console.log(i);
								  this.particlesMesh.setMatrixAt(i, 
									new Matrix4().multiply(
									  new Matrix4().makeTranslation(pos.x, pos.y, 0)
									)
									.multiply(new Matrix4().makeRotationZ(vel.angle() - Math.PI/2))
								  )
								}
                                )
                            })
		this.clock = new Clock();
    }

    interact(){
        this.particles.forEach((particle) => particle.interact(this.particles))
    }
    update(){
		let dt = this.clock.getDelta();
        this.particles.forEach((particle) => particle.update(dt, this.width, this.height))
		console.log(1/dt);
    }
    addToScene(){
		this.spaceRender.scene.add(this.particlesMesh)
    }
    render(){
        this.particles.forEach((particle) => particle.render())
		this.particlesMesh.instanceMatrix.needsUpdate = true;
    }
    animate(){
        requestAnimationFrame(() => this.animate())
		this.interact()
		this.update()
        this.render()
        this.spaceRender.render()
    }

    unMount(){
        this.spaceRender.unMount()
    }
}


export class Particle {

    constructor(alingWeight, cohesionWeight, separationWeigth, spaceWidth, spaceHeight, id, updated) {


        this.alingWeight = alingWeight
        this.cohesionWeight = cohesionWeight
        this.separationWeigth = separationWeigth


        this.position = new THREE.Vector2(
            THREE.MathUtils.randFloatSpread( spaceWidth ),
            THREE.MathUtils.randFloatSpread( spaceHeight )
        )

        //this.particle.position.set(this.position.x, this.position.y,0)

        // TODO: maybe need to calculate magnitude?
        this.velocity = new THREE.Vector2(
            THREE.MathUtils.randFloatSpread( 250 ),
            THREE.MathUtils.randFloatSpread( 250 )
        )

        this.velocity.setLength(THREE.MathUtils.randFloat(0, maxVelocity))

        //this.particle.rotateZ(this.velocity.angle() - Math.PI/2)
        
        this.acceleration = new THREE.Vector2(
            THREE.MathUtils.randFloatSpread(250),
            THREE.MathUtils.randFloatSpread(250)
        )

        this.acceleration.setLength(THREE.MathUtils.randFloat(0, maxAcceleration))

        this.id = id

		this.updated = updated;
    }

    align(otherParticles){

        let vision = 50
        let separation = 25
        let alignCount = 0, coheCount = 0, sepCount = 0

        let align = new THREE.Vector2(0,0)
        let cohe = new THREE.Vector2(0,0)
        let sep = new THREE.Vector2(0,0)
        for(let other of otherParticles){
            let d = this.position.distanceTo(other.position)
            //console.log(this.position.distanceTo(other.position))
            if( d > 0 && d < vision && this.id !== other.id){
                alignCount++
                align.add(other.velocity)
                coheCount++
                cohe.add(other.velocity)    
            }
            if(d > 0 && d < separation){
                sepCount++
                let aux = this.position.clone()
                aux.sub(other.position)
                aux.normalize()
                aux.divideScalar(d)
                sep.add(aux)
            }
        }
        align = this.cleanAlignment(align, alignCount)
        cohe = this.cleanCohesion(cohe, coheCount)
        sep = this.cleanSeparation(sep, sepCount)
        return {align, cohe, sep}
    }

    cleanAlignment(vec, count){
        if(count > 0){
            //console.log(align)
            vec.divideScalar(count)
            vec.normalize()
            vec.multiplyScalar(maxVelocity)
            vec.sub(this.velocity)
			vec.clampLength(0, maxForce)
            return vec
        }
        return new THREE.Vector2(0,0)
    }
    cleanCohesion(vec, count){
        if(count > 0){
            vec.sub(this.position)
            vec.normalize(count)
            vec.multiplyScalar(maxVelocity)
            vec.sub(this.velocity)
			vec.clampLength(0, maxForce)
            return vec
        }
        return new THREE.Vector2(0,0)

    }
    cleanSeparation(vec, count){
        if(count > 0)
            vec.divideScalar(count)
        if(vec.length() > 0){
            vec.normalize()
            vec.multiplyScalar(maxVelocity)
            vec.sub(this.velocity)
			vec.clampLength(0, maxForce)
        }
        return vec
    }

    interact(otherParticles){
        let {align, cohe, sep} = this.align(otherParticles)

        align.multiplyScalar(this.alingWeight)
        cohe.multiplyScalar(this.cohesionWeight)
        sep.multiplyScalar(this.separationWeigth)

        let sumAllForces = new THREE.Vector2(0,0).add(align).add(cohe).add(sep)
        this.acceleration = sumAllForces
    }

    update(dt, width, height){

        this.checkBorder(width, height)
        
		this.position.add(this.velocity.clone().multiplyScalar(dt))
		this.velocity.add(this.acceleration.clone().multiplyScalar(dt))

		this.velocity.clampLength(0, maxVelocity)

            this.acceleration.multiplyScalar(0)
        }
        
    render(){
		this.updated(this.position, this.velocity);
    }   

    checkBorder(width, height){
        if(this.position.x > width/2 + 10)
            this.position.x = width/-2 
        if(this.position.y > height/2 + 10)
            this.position.y = height/-2 
        if(this.position.x < -width/2)
            this.position.x = width/2
        if(this.position.y < -height/2 )
            this.position.y = height/2
    }
}
