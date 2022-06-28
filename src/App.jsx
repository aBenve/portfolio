import { useEffect } from 'react'
import Content from './components/Content'
import Frame from './components/Frame'

const App = () => {



	return (
		<>
			<Frame/>
			<div className='z-0 w-screen h-screen p-10'>
				<Content/>	
				<div className='bg-blue-400 h-full w-full'></div>
			</div>
		</>
	)
}

export default App