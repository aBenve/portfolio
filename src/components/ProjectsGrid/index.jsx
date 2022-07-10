import { motion } from "framer-motion"
import ProjectItem from "../ProjectItem"

const test = {
	gender: "Sitio Web",
	genderColor: "#fafafa",
	title: "Projectaso",
	titleColor: "#00ff00",
	desc: "Super descripcion detalladisima super minimalista.",
	descColor: "#ffffff",
	bgColor: "#ff3356",
	image: "./src/assets/test.jpg"
}

export default function ProjectGrid(){
    return <>
        <main className="flex flex-col w-full h-full">
						<section className='w-full py-36 text-center bg-gray-bg '>
							<p className="font-secondary text-5xl">Projects</p>
						</section>
						<section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr bg-blue-300'>
							<ProjectItem {...test}/>
							<ProjectItem {...test}/>
							<ProjectItem {...test}/>
							<ProjectItem {...test}/>



						</section>
					</main>
    </>
}