import { useEffect, useRef } from "react"
import { Space } from "../BoidContainer/particle"


export default function ExtraData() {

    const spaceRef = useRef(null)

    useEffect(() => {
        let space = new Space(
            spaceRef, // espacio disponible
            100, // cantidad de particulas
            '#404040',
            1, // alineamiento
            0.5, // cohesion
            2 // separacion
        )
        space.addToScene()
        space.animate()
        return(
            () => {
                space.unMount()
            }
        )
    },[])


    return(
        <section 
            id='Extra' 
            className="min-h-[40vh] mt-[140vh] px-0 md:px-10  relative z-30 bg-dark flex flex-col justify-center items-center"
            ref={spaceRef}
        > 
            {/* <span className='text-light h-full '>
                Testing space
            </span>  */}
        </section>
    )
}