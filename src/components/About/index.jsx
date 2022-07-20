import { motion } from "framer-motion"
import AboutBgSvg from '../AboutBgSvg'

export default function About({scrolled, animDuration}) {
    return(
    <>
            <motion.div 
                className="lg:w-[40rem] w-[30rem] lg:left-36 left-20 absolute top-15 hidden md:block"
                animate={{
                    opacity:scrolled?1:0,
                }}
                initial={{
                    opacity:0,
                }}
                transition={{duration: animDuration/3, ease:'easeInOut', delay: scrolled? animDuration:0}}    
            >
                <AboutBgSvg />
            </motion.div>
            <div id="About" className="relative left-1/6 w-full text-dark mb-14 md:mb-0">
                <motion.div
                    animate={{
                        opacity:scrolled?1:0,
                        x:scrolled?0:-20,
                    }}
                    initial={{
                        opacity:0,
                        x:-20
                    }}
                    transition={{duration: animDuration/3, ease:'easeInOut', delay: scrolled? animDuration:0}}
                    className="font-secondary lg:text-2xl text-lg italic mb-2 "
                    >
                        About
                    </motion.div>
                    <motion.div
                        animate={{
                            opacity:scrolled?1:0,
                            y:scrolled?0:-10,
                        }}
                        initial={{
                            opacity:0,
                            y:-10
                        }}
                        transition={{duration: animDuration/3, ease:'easeInOut', delay: scrolled? animDuration:0}}
                        className="font-primary lg:text-4xl md:text-2xl text-xl font-bold w-1/2"
                        >
                        <p>
                            Software engineering student at <a href="https://www.itba.edu.ar/">ITBA</a>, 
                        </p>
                        <p className="text-light">
                            frontend and UX/UI design enthusiast.  
                        </p>
                </motion.div>
            </div>
        </>
    )
}