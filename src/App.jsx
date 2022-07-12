import AnimatedWelcomeTransition from './components/AnimatedWelcomeTransition'
import AnimatedTransition from './components/AnimatedTransition'
import Content from './components/Content'
import Frame from './components/Frame'
import ProjectGrid from './components/ProjectsGrid'
//import data from './data/projects'
import { motion } from 'framer-motion'
import Header from './components/Header'

import {AnimationContextProvider} from './context/AnimationContext'

const App = () => {
	return (
		<>
			<AnimationContextProvider >
				<AnimatedWelcomeTransition/>
				{/* <AnimatedTransition/> */}
				<Frame/>
				<Header />
				<div className='z-0 w-full h-screen overflow-x-clip'>
					<Content/>	
					
					<div className='px-10 photo relative z-30 bg-dark overflow-x-hidden'> 
						<section className='text-light'>
							aSDASD
						</section> 
					</div>
					<ProjectGrid/>
					<div className='px-10 pb-10 min-h-min bg-dark'>
						<div className='flex flex-col items-center' >
							<p className='text-light font-bold font-secondary text-5xl mt-24'>
								Contact
							</p>
							<div className='bg-second-dark p-5 rounded-lg my-36'>
								<span className='font-primary text-4xl text-light'>abenvenuto@itba.edu.ar</span>
							</div>
						</div>
					</div>
				</div>
			</AnimationContextProvider>
		</>
	)
}

export default App