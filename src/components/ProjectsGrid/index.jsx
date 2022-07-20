import { motion } from "framer-motion"
import ProjectItem from "../ProjectItem"
import data from '../../data/projects'
import ProjectsBgSvg from "../ProjectsBgSvg"

export default function ProjectGrid(){
    return <>
        <main id='Projects' className="flex flex-col w-full px-0 md:px-10">
			<section className='relative w-full py-20 md:py-36 text-center bg-gray-bg '>
				<ProjectsBgSvg style="w-full h-full absolute top-0 left-0 p-10 md:block hidden" />
				<p className="font-secondary md:text-4xl text-2xl italic font-normal">Projects</p>
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