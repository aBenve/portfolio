import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Content() {

    const [scrolled, setScrolled] = useState(false)

    function handleScroll(){
        setScrolled(true)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false)
        return () => {window.removeEventListener('scroll', handleScroll);}
    },[])  

    return <>
            <main className="w-full flex flex-row h-full ">
                <section className='w-full flex flex-col bg-red-400 flex-1 '>

                </section>
                <motion.section className='flex bg-gray-200' 
                    animate={{width: scrolled ? '0%':'50%' }} 
                    initial={{width: '50%'}} 
                    viewport={{once: true}}
                    transition={{duration: 1, ease:'easeInOut'}}>
                </motion.section>
            </main>
    </>
} 