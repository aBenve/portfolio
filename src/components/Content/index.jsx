import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Content() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(
        () => {

            function handleScroll(){
                console.log('scroll')
            }

            window.addEventListener('scroll', handleScroll);
        }
        ,[]);

    return <>
            <main className="w-full flex flex-row h-full ">
                <section className='w-full flex flex-col bg-red-400 flex-1 '>

                </section>
                <motion.section className='flex bg-gray-200' 
                    animate={{width: '0%' }} 
                    initial={{width: '50%'}} 
                    transition={{duration: 1, delay:2}}>
                </motion.section>
            </main>
    </>
} 