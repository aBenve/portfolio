import { motion } from "framer-motion"
import AnimatedSvgHello from '../AnimatedSvgHello'

export default function Welcome({scrolled, animDuration, start}) {

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

    return(
    <motion.div className="welcome"
        animate='done'
        initial='initial' 
        variants={TextVariants}
    >
        <AnimatedSvgHello width={400} height={390} start={start}/>
    </motion.div>
)
}