import { useState } from 'react'
import SvgLogo from '../SvgLogo'
import { motion } from 'framer-motion'
import Toggle from '../Toggle'
import Sidebar from '../Sidebar'

import InstaSvg from '../InstaSvg'
import LinkedinSvg from '../LinkedinSvg'
import GitSvg from '../GitSvg'

export default function Header(){


    // const [navOpen, setNavOpen] = useState(false)

    return(
        <div>
            <div className='md:block '>
                <a className="fixed z-40 top-0 left-10 h-10 flex justify-center items-center  mix-blend-difference md:mix-blend-normal ">
                    <SvgLogo width={34} heigh={20} fillColor='#7B61FF' />
                </a>
                <div className='mix-blend-difference fixed z-40 top-0 right-10 md:top-1/2 md:right-0 h-10 md:h-0 md:w-10 flex md:flex-col justify-center items-center gap-x-5 md:gap-x-0 md:gap-y-5  md:-translate-y-1/2'>
                    <a href='https://github.com/aBenve'>
                        <GitSvg fillColor='white'/>               
                    </a>
                    <a href='https://www.linkedin.com/in/agustin-benvenuto-1a4809217/'>
                        <LinkedinSvg fillColor='white'/>               
                    </a>
                    <a href='https://www.instagram.com/agus.benve/'>
                        <InstaSvg fillColor='white'/>
                    </a>
                </div>
            </div>

            {/* <Toggle navOpen={navOpen} setNavOpen={setNavOpen}/>

            <Sidebar navOpen={navOpen}/> */}

        </div>
    )
}