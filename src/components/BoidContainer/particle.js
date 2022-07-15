import * as THREE from 'three'


function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
  }

const maxVelocity = 5, maxAcceleration = 5, maxForce = 0.1

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
        this.particles = Array(this.particlesAmount)
                            .fill()
                            .map((e,i) => {return new Particle(
                                alingWeight,
                                cohesionWeight,
                                separationWeigth,
                                color,
                                this.width, 
                                this.height, 
                                i
                                )
                            })

    }

    interact(){
        this.particles.forEach((particle) => particle.interact(this.particles))
    }
    update(){
        this.particles.forEach((particle) => particle.update(this.width, this.height))
    }
    addToScene(){
        this.particles.forEach((particle) => particle.addToScene(this.spaceRender.scene))
    }
    render(){
        this.particles.forEach((particle) => particle.render())
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

    constructor(alingWeight, cohesionWeight, separationWeigth, color, spaceWidth, spaceHeight, id) {


        this.alingWeight = alingWeight
        this.cohesionWeight = cohesionWeight
        this.separationWeigth = separationWeigth

        const particleGeometry = new THREE.ConeBufferGeometry(10, 25, 3)
        const particleMaterial = new THREE.MeshBasicMaterial({color: color})
        this.particle = new THREE.Mesh(
            particleGeometry,
            particleMaterial
        )

        this.position = new THREE.Vector2(
            THREE.MathUtils.randFloatSpread( spaceWidth ),
            THREE.MathUtils.randFloatSpread( spaceHeight )
        )

        this.particle.position.set(this.position.x, this.position.y,0)

        // TODO: maybe need to calculate magnitude?
        this.velocity = new THREE.Vector2(
            THREE.MathUtils.randFloatSpread( 5 ),
            THREE.MathUtils.randFloatSpread( 5 )
        )

        this.velocity.setLength(THREE.MathUtils.randFloat(0, maxVelocity))

        this.particle.rotateZ(this.velocity.angle() - Math.PI/2)
        
        this.acceleration = new THREE.Vector2(
            THREE.MathUtils.randFloatSpread(5),
            THREE.MathUtils.randFloatSpread(5)
        )

        this.acceleration.setLength(THREE.MathUtils.randFloat(0, maxAcceleration))

        this.id = id
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
            if(vec.length() > maxForce)
               vec.setLength(maxForce)
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
            if(vec.length() > maxForce)
               vec.setLength(maxForce)
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
            if(vec.length() > maxForce)
               vec.setLength(maxForce)
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

    update(width, height){

        this.checkBorder(width, height)
        
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)

        if( this.velocity.length() > maxVelocity)
            this.velocity.setLength(maxVelocity)

            this.acceleration.multiply(0)
        }
        
    render(){
        this.particle.position.set(this.position.x, this.position.y, 0)
        this.particle.setRotationFromAxisAngle(new THREE.Vector3(0,0,1),this.velocity.angle() - Math.PI/2)
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

    addToScene(scene){
        scene.add(this.particle)
    }
}
