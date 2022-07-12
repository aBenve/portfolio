import { motion } from "framer-motion"
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

    return(
        <motion.section className='flex bg-gray-bg' 
                animate='done'
                initial='initial' 
                variants={variants}
                >
        </motion.section>
    )
}