import { motion } from "framer-motion"

const blackBox = {
    initial: {
      height: "0vh",
      bottom: 0,
    },
    animate: {
        height: ["0vh","100vh","100vh", "100vh"],
        bottom: ['0%','0%','0%','100%'],
        transition: {
          duration: 2,
        },
      },
};
const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};
export default function AnimatedTransition(){

      return (
        <motion.div
            className="absolute bottom-0 z-50 w-full bg-black text-white flex items-center justify-center"
            initial="initial"
            animate="animate"
            variants={blackBox}
            onAnimationStart={() => document.body.classList.add("overflow-hidden")}
            onAnimationComplete={() =>
                document.body.classList.remove("overflow-hidden")
            }
        >
            <motion.svg variants={textContainer} className="absolute z-50 flex">
              <pattern
                id="pattern"
                patternUnits="userSpaceOnUse"
                width={750}
                height={800}
                className="text-white"
              >
                <rect className="w-full h-full text-gray-600 fill-current" />
              </pattern>
              <text
                className="text-4xl font-bold"
                x="50%"
                y="50%"
                style={{ fill: "url(#pattern)" }}

              >
                ab
              </text>
            </motion.svg>    
        </motion.div> 
    )
}