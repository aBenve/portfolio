import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import './styles.css'

import AnimationContext from "../../context/AnimationContext"
import About from "../About"
import Welcome from "../Welcome"
import BoidContainer from "../BoidContainer"

export default function Content() {

    const [scrolled, setScrolled] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [fixPage, setFixPage] = useState(0)
    const {transitionAnimFinish} = useContext(AnimationContext)

    const animDuration = 1;

    function handleScroll(){
        if(scrollPosition === 0){
            setScrolled(true)
            setScrollPosition(window.scrollY)
        }
        if(window.scrollY === 0){
            setScrolled(false)
            setScrollPosition(0)
        }
        if(window.scrollY > 500){
            setFixPage(window.scrollY - 500);
        }
        else 
            setFixPage(0);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false)
        return () => {window.removeEventListener('scroll', handleScroll);}
    },[])  

    
   
    return <>
            <main className="w-full flex flex-row h-screen fixed top-0 left-0 p-0 md:p-10" style={
                {
                    transform:`matrix(1,0,0,1,0,${(-fixPage) <= -910 ? 0:(-fixPage)})`, 
                    visibility:`${fixPage >= 910 ? 'hidden' : 'visible'}`
                }
            }>
                <section className='w-full flex flex-col bg-principal flex-1 pb-10 md:pb-0 justify-end md:justify-center pointer-events-none'>
                    <About  scrolled={scrolled} animDuration={animDuration}/>
                </section>
                <BoidContainer  scrolled={scrolled} animDuration={animDuration}/>
                <Welcome start={transitionAnimFinish} scrolled={scrolled} animDuration={animDuration}/>
            </main>
    </>
} 