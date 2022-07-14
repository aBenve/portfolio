import { motion } from "framer-motion"
import { useEffect } from "react"


export default function Toggle({navOpen, setNavOpen}){

    useEffect(() => 
        {
            if(navOpen)
                document.body.classList.add("overflow-hidden")
            else    
                document.body.classList.remove("overflow-hidden")

        }, [navOpen]
    )


    return (
        <a className='md:hidden fixed top-6 right-6 z-60 w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-pointer'
                onClick={() => setNavOpen(!navOpen)}
            >
                <svg className="h-8 w-8 text-dark"  
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeLinecap="round"  
                > 
                    <motion.line x1="6" y1="7" x2="18" y2="7" 
                        initial={{y2:7}}
                        animate={{y2:navOpen?17 : 7}}
                    />  
                    <motion.line x1="8" y1="12" x2="18" y2="12" 
                        initial={{opacity:1}}
                        animate={{opacity:navOpen?0:1}}
                        transition={{duration: 0.1, ease:'easeInOut'}}
                    />
                    <motion.line x1="10" y1="17" x2="18" y2="17" 
                        initial={{y2:17, x1:10}}
                        animate={{y2:navOpen?7 : 17, x1:navOpen?7:10}}
                    />
                </svg>
     
            </a>
    )

}