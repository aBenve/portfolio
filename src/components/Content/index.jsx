import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import './styles.css'

export default function Content() {

    const [scrolled, setScrolled] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [fixPage, setFixPage] = useState(0)

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
        if(window.scrollY > 230){
            setFixPage(window.scrollY - 230);
        }
        else 
            setFixPage(0);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false)
        return () => {window.removeEventListener('scroll', handleScroll);}
    },[])  



    const variants = {
        initial: {width: scrolled ? '50%':'50%', opacity: 1},
        done: {width: scrolled ? '0%':'50%' , opacity: 1} // TODO: may be changed
    }

    return <>
            <main className="w-full flex flex-row h-full content p-10" style={
                {
                    transform:`matrix(1,0,0,1,0,${(-fixPage) <= -910 ? 0:(-fixPage)})`, 
                    visibility:`${fixPage >= 910 ? 'hidden' : 'visible'}`
                }
            }>
                <section className='w-full flex flex-col bg-red-400 flex-1'>
                    <motion.div
                        animate={{opacity:scrolled?1:0}}
                        initial={{opacity:0}}
                        transition={{duration: animDuration/2, ease:'easeInOut', delay: scrolled? animDuration:0}}
                        className="about"
                    >
                        about
                    </motion.div>
                </section>
                <motion.section className='flex bg-gray-200 relative' 
                    animate='done'
                    initial='initial' 
                    variants={variants}
                    transition={{duration: animDuration, ease:'easeInOut'}}
                    >
                    <div className="welcome">
                        FRONT DEV
                    </div>

                </motion.section>
            </main>
    </>
} 