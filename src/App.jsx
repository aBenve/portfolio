import AnimatedWelcomeTransition from './components/AnimatedWelcomeTransition'
import AnimatedTransition from './components/AnimatedTransition'
import Content from './components/Content'
import Frame from './components/Frame'
import ProjectGrid from './components/ProjectsGrid'
//import data from './data/projects'
import { motion } from 'framer-motion'
import Header from './components/Header'

import {AnimationContextProvider} from './context/AnimationContext'
import { useEffect } from 'react'
import ExtraData from './components/ExtraData'
import Contact from './components/Contact'



const App = () => {
	window.onbeforeunload = function () {
		window.scrollTo(0,0);
	};
	
	return (
		<>
			<AnimationContextProvider >
				<AnimatedWelcomeTransition/>
				{/* <AnimatedTransition/> */}
				<Frame/>
				<Header />
				<div className='z-0 w-full h-screen overflow-x-clip '>
					<Content/>	
					<ExtraData/>
					<ProjectGrid/>
					<Contact/>
				</div>
			</AnimationContextProvider>
		</>
	)
}

export default App