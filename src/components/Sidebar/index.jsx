import { motion } from "framer-motion"
import MenuSidebar from "../MenuSidebar"

export default function Sidebar({navOpen}){

    const variants = {
        open: { opacity: 1, x: "-100%" },
        closed: { opacity: 0, x: "0%" },
    }

    const addVariant = {
        open: { height: "100%" },
        closed: { height: "0%" },
    }

    return (
        <>
            <motion.div 
                    //className={navOpen ? 'overflow-hidden':'hidden'}
                    variants={variants}
                    animate={navOpen ? "open" : "closed"}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                    className='fixed top-0 -right-3/4 flex w-3/4 h-screen bg-light z-50 shadow-bar'
                    >
                    <MenuSidebar />
                    <motion.div 
                        variants={addVariant}
                        animate={navOpen ? "open" : "closed"}
                        transition={{duration: 1, ease:'easeInOut', delay:0.2}}
                        className="bg-principal absolute w-16 right-4  z-50"
                    />
            </motion.div>
        </>
    )
}