import Content from './components/Content'
import Frame from './components/Frame'
import ProjectGrid from './components/ProjectsGrid'
//import data from './data/projects'


const App = () => {
	return (
		<>
			<Frame/>
			<div className='z-0 w-screen h-screen'>
				<Content/>	
				
				<div className='base photo'></div>
				<div className='base projects'>
					<ProjectGrid/>
				</div>
				<div className='base contact'></div>
			</div>

		</>
	)
}

export default App