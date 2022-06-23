import { useState } from 'react'
import Content from './components/Content'
import Frame from './components/Frame'

const App = () => {

	return (
		<>
			<div className='w-screen h-screen overflow-y-scroll p-10'>
				<Content/>	
				<div className='bg-blue-400 h-screen'></div>
			</div>
			<Frame/>
		</>
	)
}

export default App