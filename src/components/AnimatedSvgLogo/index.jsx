import { motion } from "framer-motion"

export default function AnimatedSvgLogo({animateControl}){
    return (
        <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444.1517 288.2149">
				<motion.path 
					//fill='#202020'
					//stroke='white'  
					d="M131.1491,188.1671a102.7759,102.7759,0,1,0,0,205.5518H233.9274V290.9407A102.7777,102.7777,0,0,0,131.1491,188.1671ZM188.6,348.3962h-57.451a57.4177,57.4177,0,0,1-57.4509-57.4555,58.24,58.24,0,0,1,.3363-6.2663,57.1366,57.1366,0,0,1,12.3236-29.7092,56.0893,56.0893,0,0,1,4.1669-4.6486A57.451,57.451,0,0,1,188.6,290.9407Z" 
					transform="translate(-28.371 -105.5042)"
					// initial={{pathLength : 0, fill:'#20202000'}}
					// animate={{pathLength : 1, fill:'#202020ff'}}
					// transition= {{
					// 	duration: 2,
					// 	repeat: Infinity,
					// 	ease:'easeInOut'
					// }}
					animate={animateControl}
				/>
				<motion.path 
					//fill='#202020' 
					//stroke='white' 
					d="M369.7458,188.165h0a102.2987,102.2987,0,0,0-57.4517,17.545V128.1667a22.6624,22.6624,0,0,0-22.6625-22.6625h0a22.6624,22.6624,0,0,0-22.6624,22.6625V393.7191h102.777a102.777,102.777,0,0,0,102.7769-102.777v0A102.7769,102.7769,0,0,0,369.7458,188.165Zm57.4518,102.7771a57.4518,57.4518,0,0,1-57.4518,57.4518h-57.452V290.942A57.4518,57.4518,0,0,1,369.7457,233.49h0a57.4519,57.4519,0,0,1,57.4518,57.4519Z" 
					transform="translate(-28.371 -105.5042)"
					animate={animateControl}
				/>
		</svg>
    )
}