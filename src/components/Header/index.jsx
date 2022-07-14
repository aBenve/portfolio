import { useState } from 'react'
import SvgLogo from '../SvgLogo'
import { motion } from 'framer-motion'
import Toggle from '../Toggle'
import Sidebar from '../Sidebar'

import InstaSvg from '../InstaSvg'
import LinkedinSvg from '../LinkedinSvg'
import GitSvg from '../GitSvg'

export default function Header(){


    const [navOpen, setNavOpen] = useState(false)



    return(
        <div>
            <div className='hidden md:block'>
                <a className="fixed z-40 top-0 left-10 h-10 flex justify-center items-center">
                    <SvgLogo width={34} heigh={20}/>
                </a>
                <div className='fixed z-40 top-1/2 right-0 w-10 flex flex-col justify-center items-center gap-y-5 -translate-y-1/2'>
                    <a href='https://github.com/aBenve'>
                        <GitSvg/>               
                    </a>
                    <a href='https://www.linkedin.com/in/agustin-benvenuto-1a4809217/'>
                        <LinkedinSvg/>               
                    </a>
                    <a href='https://www.instagram.com/agus.benve/'>
                        <InstaSvg/>
                    </a>
                </div>
            </div>

            <Toggle navOpen={navOpen} setNavOpen={setNavOpen}/>

            <Sidebar navOpen={navOpen}/>

        </div>
    )
}