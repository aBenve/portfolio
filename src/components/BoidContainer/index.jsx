import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { Space } from "./particle"

export default function BoidContainer({scrolled, animDuration}) {

    const variants = {
        initial: {width: '50%', opacity: 1},
        done: {
            width: scrolled ? '0%':'50%' , 
            opacity: 1, 
            transition: {
                duration: animDuration, 
                ease:[0.76, 0, 0.64, 1]
            }
        }
    }

    const spaceRef = useRef(null)

    // useEffect(() => {
    //     let space = new Space(
    //         spaceRef, // espacio disponible
    //         100, // cantidad de particulas
    //         1, // alineamiento
    //         0.8, // cohesion
    //         1.2 // separacion
    //     )
    //     space.addToScene()
    //     space.animate()
    //     return(
    //         () => {
    //             space.unMount()
    //         }
    //     )
    // },[])

    return(
        <motion.section 
                ref={spaceRef}
                className='flex bg-gray-bg ' 
                animate='done'
                initial='initial' 
                variants={variants}
        >
            
        </motion.section>
    )
}