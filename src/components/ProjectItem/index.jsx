import { motion, useAnimation } from "framer-motion"

const primaryTextVariants = {
    hover: {
        //transform: 'matrix(1, 0, 0, 1, 0, -90)'
        transform: 'translateY(-5em)'
    },
    initial: {
        //transform: 'matrix(1, 0, 0, 1, 0, 0)'
        transform: 'translateY(0em)'
    }
}

const coverVariants = {
    hover: {
        top:0,
    },
    initial: {
        top:'100%',
    }
}

const secondaryTextVariant = {
    hover: {
        opacity: 1,
        top:"100%",
    },
    initial: {
        opacity: 0,
        top:'200%',
    }
}

export default function ProjectItem({ gender, genderColor, title, titleColor, desc, descColor, bgColor, image }){

    const controls = useAnimation();

    function handleMouseEnterControls() {
        controls.start("hover");
    }

    function handleMouseLeaveControls() {
        controls.start("initial");
    }
    return <>
            <a className='relative overflow-hidden '
                onMouseEnter={handleMouseEnterControls}
                onMouseLeave={handleMouseLeaveControls}
                href="https://probab.vercel.app/"
            >
                <img className='inset-0 relative w-full z-10 ' src={`${image}`} />

                <motion.div className="absolute bottom-10 left-10 right-10 z-30 pointer-events-none font-primary"
                    animate={controls}
                    variants={primaryTextVariants}
                    transition= {{
                        duration:0.6,
                        ease:'easeInOut'
                    }}
                >
                    <h4 className="mb-2 text-xl font-secondary font-bold" style={{
                        color:`${genderColor}`
                    }}>
                        {gender}
                    </h4>
                    <h2 className="mb-2 font-black text-2xl" style={{
                        color:`${titleColor}`
                    }}> 
                        {title}
                    </h2>
                    
                    <motion.p className="absolute top-[200%] font-bold text-xl"
                        animate={controls}
                        variants={secondaryTextVariant}
                        transition= {{
                            duration:0.4,
                            ease:'easeInOut'
                        }}
                        style={{
                            color:`${descColor}`
                        }}
                    >
                        {desc}
                    </motion.p>
                </motion.div>
                <motion.div className="absolute top-[100%] inset-0 z-20"
                    animate={controls}
                    variants={coverVariants}
                    transition= {{
                        duration:0.4,
                        ease:'easeInOut'
                    }}
                    style={{
                        backgroundColor:`${bgColor}`
                    }}
                > 
                </motion.div>
            </a>

    </>
}