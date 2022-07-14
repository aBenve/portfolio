import { motion } from "framer-motion"

export default function Sidebar({navOpen}){

    const variants = {
        open: { opacity: 1, x: "-100%" },
        closed: { opacity: 0, x: "0%" },
    }




    return (
        <motion.div 
                //className={navOpen ? 'overflow-hidden':'hidden'}
                variants={variants}
                animate={navOpen ? "open" : "closed"}
                transition={{duration: 0.5, ease: 'easeInOut'}}
                className='fixed top-0 -right-2/3 flex w-2/3 h-screen bg-light z-40 shadow-bar'
        >
                <div>
                    
                </div>
        </motion.div>
    )
}