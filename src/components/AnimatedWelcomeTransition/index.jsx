import { animate, motion, useAnimation } from "framer-motion"
import { useContext, useEffect } from "react";

import AnimationContext from "../../context/AnimationContext";

import AnimatedSvgLogo from "../AnimatedSvgLogo";

export default function AnimatedWelcomeTransition(){

    const bgControl = useAnimation();
    const logoControl = useAnimation();
    const svgControl = useAnimation();

    const {setTransitionAnimFinish} = useContext(AnimationContext)

    async function sequence(){
      await bgControl.set({ width: "100%"});

      await logoControl.set({
        fill:'#f8f8f800',
        stroke:'#f8f8f850',
        strokeWidth:6,
        pathLength : 0,
      })
      await logoControl.start({
        fill:'#f8f8f800',
        stroke:'#f8f8f850',
        strokeWidth:6,

        pathLength : 1,
        transition: {
          ease: "easeInOut",
          duration: 1,
        }
      })
      await logoControl.start({
        fill:'#f8f8f850',
        white:'#f8f8f800',
        strokeWidth:0,
        pathLength : 1,
        transition: {
          ease: "easeInOut",
          duration: 0.2,
        }
      })
      if(window.innerWidth > 768) {
        await bgControl.start({ 
          top:'2.5rem',
          height:"calc(100% - 5rem)",
          width:"calc(100% - 2.5rem)",
          left:'2.5rem',
          transition: {
            ease: "easeInOut",
            duration: 0.2,
            delay:0.5
          }
        });
      }

      await svgControl.set({
        //transform:'translateX(0px)',
        x:0
      })
      await svgControl.start({
        //transform:'translateX(-100px)',
        x:-1000,
        transition: {
          ease: "easeInOut",
          duration: 0.3,
        }
      })
      await bgControl.start({
        width: "0%",
        zIndex: 30,

        transition: {
          ease: "easeInOut",
          duration: 1,
        }
      });
      await bgControl.set({
        display:'none',
      });
      await logoControl.set({
        display:'none',
      });
    }

    useEffect(() => {
      document.body.classList.add("overflow-hidden")
      sequence()

    },[]);

    return (
      <motion.div
          className="absolute bottom-0 z-70 bg-principal h-full w-full text-white flex items-center justify-center overflow-x-hidden "
          animate={bgControl}
          onAnimationStart={() => {
              //document.body.classList.add("overflow-hidden")

            }
          }
          onAnimationComplete={() => {
              document.body.classList.remove("overflow-hidden")
              setTransitionAnimFinish(true)
            }
          }
      >
        <motion.svg id="Capa_1" className="absolute z-30" width={250} height={200} data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 454.1517 298.2149"
          animate={svgControl}
        >
            <motion.path 
              d="M131.1491,188.1671a102.7759,102.7759,0,1,0,0,205.5518H233.9274V290.9407A102.7777,102.7777,0,0,0,131.1491,188.1671ZM188.6,348.3962h-57.451a57.4177,57.4177,0,0,1-57.4509-57.4555,58.24,58.24,0,0,1,.3363-6.2663,57.1366,57.1366,0,0,1,12.3236-29.7092,56.0893,56.0893,0,0,1,4.1669-4.6486A57.451,57.451,0,0,1,188.6,290.9407Z" 
              transform="translate(-27.371 -105.5042)"
              animate={logoControl}
              fill='#f8f8f800'
            />
            <motion.path 
              d="M369.7458,188.165h0a102.2987,102.2987,0,0,0-57.4517,17.545V128.1667a22.6624,22.6624,0,0,0-22.6625-22.6625h0a22.6624,22.6624,0,0,0-22.6624,22.6625V393.7191h102.777a102.777,102.777,0,0,0,102.7769-102.777v0A102.7769,102.7769,0,0,0,369.7458,188.165Zm57.4518,102.7771a57.4518,57.4518,0,0,1-57.4518,57.4518h-57.452V290.942A57.4518,57.4518,0,0,1,369.7457,233.49h0a57.4519,57.4519,0,0,1,57.4518,57.4519Z" 
              transform="translate(-27.371 -105.5042)"
              animate={logoControl}
              fill='#f8f8f800'

            />
        </motion.svg>
      </motion.div> 
    )
}