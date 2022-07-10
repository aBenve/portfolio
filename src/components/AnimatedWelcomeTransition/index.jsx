import { animate, motion, useAnimation } from "framer-motion"
import { useEffect } from "react";

const blackBox = {
    initial: {
      width: '100%',
    },
    animate: {
      width: '0%',
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
};
// const textContainer = {
//   initial: {
//     opacity: 1,
//   },
//   animate: {
//     opacity: 0,
//     transition: {
//       duration: 0.25,
//       when: "afterChildren",
//     },
//   },
// };
const svgLogo = {
  initial:{
    pathLength: 0
  },
  animate: {
    pathLength:1
  }
}
export default function AnimatedWelcomeTransition(){

    const bgControl = useAnimation();
    const logoControl = useAnimation();
    const pathControl = useAnimation();

    async function sequence(){
      await bgControl.start({ width: "100%"});
      await pathControl.start({ pathLength: 0});
      await pathControl.start({
        pathLength:1,
        transition: {
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity
      }});
      await logoControl.start({
        x:-10000,
        transition: {
          ease: "easeInOut",
          duration: 0.6,
        }
      })
      await bgControl.start({ 
        top:'2.5rem',
        height:"calc(100% - 5rem)",
        left:'2.5rem',
        transition: {
          ease: "easeInOut",
          duration: 0.2,
        }
      });
      await bgControl.start({
        width: "0%",
        transition: {
          ease: "easeInOut",
          duration: 1,
        }
      });
      await bgControl.start({
        display:'none',
      });
      await logoControl.start({
        display:'none',
      });
    }

    useEffect(() => {sequence()},[]);

    return (
      <motion.div
          className="absolute bottom-0 z-50 bg-dark h-full w-full text-white flex items-center justify-center"
          //initial="initial"
          //animate="animate"
          animate={bgControl}
          variants={blackBox}
          onAnimationStart={() => document.body.classList.add("overflow-hidden")}
          onAnimationComplete={() =>
              document.body.classList.remove("overflow-hidden")
          }
      >
          {/* <motion.svg 
            animate={logoControl}
            variants={textContainer} className="absolute z-50 flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-white"
            >
              <rect  className="w-full h-full text-gray-600 fill-current" />
              </pattern>
              <text
                className="text-4xl font-bold"
                x="50%"
                y="50%"
                style={{ fill: "url(#pattern)" }}
              >
                ab
              </text>
          </motion.svg>     */}
          {/* <motion.svg animate={logoControl} id="Capa_1" className="text-white" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444.1518 288.2149">
            <motion.rect x="238.5978" width="45.3251" height="288.2149" rx="22.6625"/>
            <motion.path 
              animate={pathControl}
              d="M131.1491,188.1671a102.7759,102.7759,0,1,0,0,205.5518H233.9274V290.9407A102.7777,102.7777,0,0,0,131.1491,188.1671ZM188.6,348.3962h-57.451a57.4177,57.4177,0,0,1-57.4509-57.4555,58.24,58.24,0,0,1,.3363-6.2663,57.1366,57.1366,0,0,1,12.3236-29.7092,56.0893,56.0893,0,0,1,4.1669-4.6486A57.451,57.451,0,0,1,188.6,290.9407Z" 
              transform="translate(-28.371 -105.5042)"
            />
            <motion.path 
              animate={pathControl}
              d="M369.7458,188.1651h0A102.7768,102.7768,0,0,0,266.9687,290.9419V393.719H369.7458A102.7769,102.7769,0,0,0,472.5227,290.9421v0A102.7768,102.7768,0,0,0,369.7458,188.1651Zm57.4518,102.777a57.4519,57.4519,0,0,1-57.4518,57.4519h-57.452V290.942A57.4518,57.4518,0,0,1,369.7457,233.49h0a57.4519,57.4519,0,0,1,57.4518,57.4519Z" 
              transform="translate(-28.371 -105.5042)"
            />
          </motion.svg> */}
      </motion.div> 
    )
}