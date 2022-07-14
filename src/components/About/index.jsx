import { motion } from "framer-motion"

export default function About({scrolled, animDuration}) {
    return(
        <div id="About" className="relative left-1/6 w-full text-dark">
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
                            className="font-secondary xl:text-5xl text-3xl font-bold mb-5 "
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
                                className="font-primary xl:text-4xl md:text-2xl text-xl font-bold w-1/2"
                            >
                                <p>
                                    Software engineering student at <a href="https://www.itba.edu.ar/">ITBA</a>, 
                                </p>
                                <p className="text-light">
                                    frontend and UX/UI design enthusiast.  
                                </p>
                        </motion.div>
                    </div>
    )
}