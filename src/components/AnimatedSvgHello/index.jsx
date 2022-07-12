import { motion } from "framer-motion"



export default function AnimatedSvgHello({width, height, start}){
    
    const variant = {
        initial: { strokeDashoffset: 100},
        animate:(custom) => ({ 
            strokeDashoffset: start ? 0 : 100,
            transition: {duration: 1.5, ease:"easeInOut", delay:0.2 + (custom * 0.2)}
        })
    }

    return(
        <svg width={width} height={height} viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="H">
                <motion.line id="Line 3" x1="2" y1="8.74228e-08" x2="2" y2="14" stroke="#202020" strokeWidth="4"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={0}
                />
                <motion.line id="Line 5" x1="10" y1="8.74228e-08" x2="10" y2="14" stroke="#202020" strokeWidth="4"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={2}
                />
                <motion.line id="Line 4" x2="10" y1="6.75" x1="2" y2="6.75" stroke="#202020" strokeWidth="3.5"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={1}
                />
            </g>
            <g id="E">
                <motion.line id="Line 6" x1="17" y1="8.74228e-08" x2="17" y2="14" stroke="#202020" strokeWidth="4"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={0}
                />
                <motion.line id="Line 9" x2="24.5" y1="1.75" x1="17" y2="1.75" stroke="#202020" strokeWidth="3.5"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={1.5}
                />
                <motion.line id="Line 7"  x2="24.5" y1="6.75" x1="17" y2="6.75" stroke="#202020" strokeWidth="3.5"
                     variants={variant}
                     initial='initial'
                     animate='animate'
                     strokeDasharray='100'
                     custom={2}
                />
                <motion.line id="Line 8" x2="24.5" y1="12.25" x1="17" y2="12.25" stroke="#202020" strokeWidth="3.5"
                     variants={variant}
                     initial='initial'
                     animate='animate'
                     strokeDasharray='100'
                     custom={2.4}
                />
            </g>
            <g id="L1">
                <motion.line id="Line 6_2" x1="2" y1="17" x2="2" y2="31" stroke="#202020" strokeWidth="4"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={1}
                />
                <motion.line id="Line 7_2" x2="9" y1="29.25" x1="2" y2="29.25" stroke="#202020" strokeWidth="3.5"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={3}
                />
            </g>
            <g id="L2">
                <motion.line id="Line 8_2" x1="13" y1="17" x2="13" y2="31" stroke="#202020" strokeWidth="4"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={1.5}
                />
                <motion.line id="Line 9_2" x2="20" y1="29.25" x1="13" y2="29.25" stroke="#202020" strokeWidth="3.5"
                    variants={variant}
                    initial='initial'
                    animate='animate'
                    strokeDasharray='100'
                    custom={3.5}
                />
            </g>
            <motion.circle id="line" cx="27" cy="24" r="5" stroke="#202020" strokeWidth="4"
                variants={variant}
                initial='initial'
                animate='animate'
                strokeDasharray='100'
                custom={3.5}
            /> 
            <motion.circle id="DOT" cx="38" cy="29" r="2" fill="#7B61FF"
                animate={{scale:start? 1:0}}
                initial={{scale:0}}
                transition={{
                    type:'spring', 
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100, 
                    duration:0.5, 
                    delay:1.5, 
                    ease:'easeInOut' }}
            />
        </svg>
    )
}