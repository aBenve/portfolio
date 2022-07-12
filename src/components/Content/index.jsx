import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import AnimatedSvgHello from '../AnimatedSvgHello'
import './styles.css'

import AnimationContext from "../../context/AnimationContext"

export default function Content() {

    const [scrolled, setScrolled] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [fixPage, setFixPage] = useState(0)
    const {transitionAnimFinish} = useContext(AnimationContext)

    const animDuration = 1;

    function handleScroll(){
        if(scrollPosition === 0){
            setScrolled(true)
            setScrollPosition(window.scrollY)
        }
        if(window.scrollY === 0){
            setScrolled(false)
            setScrollPosition(0)
        }
        if(window.scrollY > 500){
            setFixPage(window.scrollY - 500);
        }
        else 
            setFixPage(0);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false)
        return () => {window.removeEventListener('scroll', handleScroll);}
    },[])  

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
    

    return <>
            <main className="w-full flex flex-row h-screen fixed top-0 left-0  p-10" style={
                {
                    transform:`matrix(1,0,0,1,0,${(-fixPage) <= -910 ? 0:(-fixPage)})`, 
                    visibility:`${fixPage >= 910 ? 'hidden' : 'visible'}`
                }
            }>
                <section className='w-full flex flex-col bg-principal flex-1 justify-center pointer-events-none'>
                    <div className="relative left-1/6 w-full text-dark">
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
                            className="font-secondary xl:text-5xl text-2xl mb-5 "
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
                                className="font-primary xl:text-4xl text-2xl font-bold w-1/2"
                            >
                                <p>
                                    Software engineering student at <a href="https://www.itba.edu.ar/">ITBA</a>, 
                                </p>
                                <p className="text-light">
                                    frontend and UX/UI design enthusiast.  
                                </p>
                        </motion.div>
                    </div>
                </section>
                <motion.section className='flex bg-gray-bg' 
                    animate='done'
                    initial='initial' 
                    variants={variants}
                   
                    >

                </motion.section>
                <motion.div className="welcome"
                    animate='done'
                    initial='initial' 
                    variants={TextVariants}
                >
                    <AnimatedSvgHello width={400} height={390} start={transitionAnimFinish}/>
                </motion.div>
            </main>
    </>
} 