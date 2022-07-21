import * as THREE from 'three'
import {Clock, Matrix4} from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'

const maxVelocity = 200, maxAcceleration = 250, maxForce = 200

function onWindowResize(current, camera, renderer){
    renderer.setSize( current.clientWidth, current.clientHeight );
    // composer.setSize( current.clientWidth, current.clientHeight );
    camera.aspect = current.clientWidth / current.clientHeight;
    camera.updateProjectionMatrix();
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

        window.addEventListener( 'resize', () => this.onResize(), false );

        // post processing
        // this.componser = new EffectComposer(this.renderer)
        // this.renderPass = new RenderPass(this.scene, this.camera)
        // const bloomPass = new UnrealBloomPass(
        //     new THREE.Vector2(window.innerWidth, window.innerHeight),
        //     3.5,
        //     0.4,
        //     0.85
        //     );
        // this.componser.addPass(this.renderPass)
        //this.componser.addPass(bloomPass)

    }

    onResize(){
        //composer.setSize( current.clientWidth, current.clientHeight );
        this.camera.left = this.current.clientWidth / -2,
        this.camera.right = this.current.clientWidth / 2,
        this.camera.top = this.current.clientHeight / -2,
        this.camera.bottom = this.current.clientHeight / 2,

        this.camera.updateProjectionMatrix();
        this.renderer.setSize( this.current.clientWidth, this.current.clientHeight );
    }

    unMount(){
        this.current.removeChild(this.renderer.domElement)
        window.removeEventListener( 'resize', () => this.onResize() );
    }
    render(){
        this.renderer.render(this.scene, this.camera)
        // this.componser.render()
    }
}

export class Space {
    constructor(spaceRender, needInteraction ,particleSize, particlesAmount, vision,color, alingWeight , cohesionWeight, separationWeigth){


        this.spaceRender = spaceRender
        this.needInteraction = needInteraction
        this.spaceRender.renderer.domElement.addEventListener('click', (e) => this.react(e, 20), false)

        this.particlesAmount = particlesAmount
		this.size = particleSize;
        const particleGeometry = new THREE.ConeBufferGeometry(10 * this.size, 25 * this.size, 3)
        const particleMaterial = new THREE.MeshBasicMaterial({color: color})
		this.particlesMesh = new THREE.InstancedMesh(
            particleGeometry,
            particleMaterial,
			particlesAmount
        )
		let {x: width, y: height} = this.spaceRender.renderer.getSize(new THREE.Vector2())
        this.particles = Array(this.particlesAmount)
                            .fill()
                            .map((e,i) => {return new Particle(
                                vision,
                                alingWeight,
                                cohesionWeight,
                                separationWeigth,
                                width, 
                                height, 
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
        if(this.needInteraction)
            this.particles.forEach((particle) => particle.interact(this.particles))
    }
    update(){
		let dt = this.clock.getDelta();
		let size = this.spaceRender.renderer.getSize(new THREE.Vector2());
        this.particles.forEach((particle) => particle.update(dt, size.x, size.y))
		//console.log(size);
		// console.log(1/dt);
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

    react(e){
        let rect = e.target.getBoundingClientRect()
        let mousePosition = new THREE.Vector2(
            e.clientX - rect.left - rect.width/2,
            e.clientY - rect.top - rect.height/2
        )

        this.particles.forEach((particle) => particle.react( mousePosition, 100))
    }

    unMount(){
        this.spaceRender.renderer.domElement.removeEventListener('click', this.react(e, 20))
        this.spaceRender.unMount()
    }
}


export class Particle {

    constructor(vision, alingWeight, cohesionWeight, separationWeigth, spaceWidth, spaceHeight, id, updated) {

        this.vision = vision

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

    react(mousePosition, radio){
        if(this.position.distanceTo(mousePosition) < radio){
            let repellentForce = this.position.clone()
            repellentForce.sub(mousePosition)

            if(repellentForce.length() > 0){
                repellentForce.normalize()
                repellentForce.multiplyScalar(maxVelocity)
                repellentForce.sub(this.velocity)

                this.velocity.add(repellentForce)

            }
        }
    }

    align(otherParticles){

        let vision = this.vision
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

        let random = new THREE.Vector2(THREE.MathUtils.randFloatSpread(100),THREE.MathUtils.randFloatSpread(100)).normalize()

        align.multiplyScalar(this.alingWeight)
        cohe.multiplyScalar(this.cohesionWeight)
        sep.multiplyScalar(this.separationWeigth)
        random.multiplyScalar(50)

        let sumAllForces = new THREE.Vector2(0,0).add(align).add(cohe).add(sep).add(random)
        this.acceleration.add(sumAllForces)
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
