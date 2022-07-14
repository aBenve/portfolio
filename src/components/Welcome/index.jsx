import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import AnimatedSvgHello from '../AnimatedSvgHello'

export default function Welcome({scrolled, animDuration, start}) {

    const [width, setWidth] = useState(window.innerWidth < 768 ? 250: 400)

    const TextVariants = {
        initial: {
            left: '50%',
        },
        done: {
            left: scrolled ? '98%':'50%' , 
            transition: {
                duration: animDuration, 
                ease:[0.80, 0.3, 0.53, 1]
            }
        } 
    }

    useEffect(() => {
        
        function resizeSvg(){
            if(window.innerWidth < 768){
                setWidth(250)
            }
            else{
                setWidth(400)
            }
        }

        window.addEventListener('resize', resizeSvg, false)        
        return () => {window.removeEventListener('resize', resizeSvg);}
    }, [])

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, false)
    //     return () => {window.removeEventListener('scroll', handleScroll);}
    // },[]) 

    return(
    <motion.div className="welcome"
        animate='done'
        initial='initial' 
        variants={TextVariants}
    >
        <AnimatedSvgHello  width={width} start={start}/>
    </motion.div>
)
}