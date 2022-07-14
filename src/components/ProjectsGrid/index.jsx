import { motion } from "framer-motion"
import ProjectItem from "../ProjectItem"
import data from '../../data/projects'

export default function ProjectGrid(){
    return <>
        <main id='Projects' className="flex flex-col w-full px-0 md:px-10">
			<section className='w-full py-20 md:py-36 text-center bg-gray-bg '>
				<p className="font-secondary text-5xl font-normal">Projects</p>
			</section>
			<section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr bg-dark'>

				{data.map((project) => <ProjectItem {...project} key={project.title}/>)}

				{/* 
					<ProjectItem {...test}/>
					<ProjectItem {...test}/>
					<ProjectItem {...test}/>
					<ProjectItem {...test}/> 
				*/}

			</section>
		</main>
    </>
}