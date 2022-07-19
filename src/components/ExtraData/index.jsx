import { useEffect, useRef } from "react"
import { Space, SpaceRender } from "./particle"


export default function ExtraData() {

    const spaceRef = useRef(null)

    useEffect(() => {

        let spaceRender = new SpaceRender(spaceRef)

        let space = new Space(
            spaceRender, // espacio disponible
            false,
            0.5,
            100, // cantidad de particulas
            10, // vision
            '#404040',
            1, // alineamiento
            0.5, // cohesion
            1 // separacion
        )

        let space2 = new Space(
            spaceRender, // espacio disponible
            true,
            0.5,
            50, // cantidad de particulas
            40, // vision 
            '#7B61FF',
            4, // alineamiento
            2, // cohesion
            1 // separacion
        )
        let space3= new Space(
            spaceRender, // espacio disponible
            false,
            0.3,
            20, // cantidad de particulas
            5, //vision
            '#f8f8f8',
            0.1, // alineamiento
            0.1, // cohesion
            1 // separacion
        )

        space.addToScene()
        space2.addToScene()
        space3.addToScene()
        space.animate()
        space2.animate()
        space3.animate()
        return(
            () => {
                spaceRender.unMount()
            }
        )
    },[])


    return(
        <section 
            id='Extra' 
            className="min-h-[40vh] mt-[140vh] mx-0 md:mx-10  relative z-30 bg-dark flex flex-col justify-center items-center"
            ref={spaceRef}
        > 
    
        </section>
    )
}
