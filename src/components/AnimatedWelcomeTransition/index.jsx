import { motion } from "framer-motion"

const blackBox = {
    initial: {
      opacity: '100%',
    },
    animate: {
        opacity: '0%',
        transition: {
          duration: 3.5,
          ease: [0.85, 0, 0.15, 1],
        },
      },
};
const text = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 80,
    transition: {
      duration: 0.5,
      ease: [0.87, 0, 0.13, 1],
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
            className="absolute bottom-0 z-50 bg-black h-full w-full text-white flex items-center justify-center"
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
                <rect  className="w-full h-full fill-current" />
                <motion.rect variants={text} className="w-full h-full text-gray-600 fill-current" />
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