import AnimatedWelcomeTransition from './components/AnimatedWelcomeTransition'
import AnimatedTransition from './components/AnimatedTransition'
import Content from './components/Content'
import Frame from './components/Frame'
import ProjectGrid from './components/ProjectsGrid'
//import data from './data/projects'
import { motion } from 'framer-motion'
import Header from './components/Header'

const transition = { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" };

const App = () => {
	return (
		<>
			<AnimatedWelcomeTransition/>
			{/* <AnimatedTransition/> */}
			<Frame/>
			<Header />
			<div className='z-0 w-screen h-screen'>
				<Content/>	
				
				<div className='base photo relative z-30 bg-dark'> 
					<section className='text-light'>
						aSDASD
					</section> 
				</div>
				<div className='base'>
					<ProjectGrid/>
				</div>
				<div className='base contact bg-dark'>
					<div className='flex flex-col items-center' >
						<p className='text-light font-bold font-secondary text-5xl mt-24'>
							Contact
						</p>
						<div className='bg-second-dark p-5 rounded-lg mt-36'>
							<span className='font-primary text-4xl text-light'>abenvenuto@itba.edu.ar</span>
						</div>
					</div>
					<motion.svg  id="Capa_1" width="400" height="386"  className="text-white" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.1518 299.2149">
						<motion.rect fill="transparent"
							stroke="white"
							strokeWidth={10} x="238.5978" width="45.3251" height="288.2149" rx="22.6625"/>
						<motion.path
							fill="transparent"
							stroke="white"
							strokeWidth={10}
							d="M131.1491,188.1671a102.7759,102.7759,0,1,0,0,205.5518H233.9274V290.9407A102.7777,102.7777,0,0,0,131.1491,188.1671ZM188.6,348.3962h-57.451a57.4177,57.4177,0,0,1-57.4509-57.4555,58.24,58.24,0,0,1,.3363-6.2663,57.1366,57.1366,0,0,1,12.3236-29.7092,56.0893,56.0893,0,0,1,4.1669-4.6486A57.451,57.451,0,0,1,188.6,290.9407Z" 
							transform="translate(-28.371 -105.5042)"
						/>
						<motion.path 
							fill="transparent"
							stroke="white"
							strokeWidth={10}
							d="M369.7458,188.1651h0A102.7768,102.7768,0,0,0,266.9687,290.9419V393.719H369.7458A102.7769,102.7769,0,0,0,472.5227,290.9421v0A102.7768,102.7768,0,0,0,369.7458,188.1651Zm57.4518,102.777a57.4519,57.4519,0,0,1-57.4518,57.4519h-57.452V290.942A57.4518,57.4518,0,0,1,369.7457,233.49h0a57.4519,57.4519,0,0,1,57.4518,57.4519Z" 
							transform="translate(-28.371 -105.5042)"
						/>
					</motion.svg>

				</div>
			</div>
		</>
	)
}

export default App