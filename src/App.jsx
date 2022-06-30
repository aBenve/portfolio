import { useEffect } from 'react'
import Content from './components/Content'
import Frame from './components/Frame'

const App = () => {



	return (
		<>
			<Frame/>
			<div className='z-0 w-screen h-screen'>
				<Content/>	
				
				<div className='photo'></div>
				<div className='projects'></div>
				<div className='contact'></div>
			</div>

		</>
	)
}

export default App