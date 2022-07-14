import MenuItem from "../MenuItem"
import SvgLogo from "../SvgLogo"
import InstaSvg from '../InstaSvg'
import LinkedinSvg from '../LinkedinSvg'
import GitSvg from '../GitSvg'
export default function MenuSidebar(){
    return(
        <>
            <div className="w-full flex flex-col justify-between p-5 pr-10 mt-4 bg-transparent z-60">
                <SvgLogo width={34} heigh={20}/>
                <div className="flex flex-col gap-4">
                    <MenuItem title='Extra'/>
                    <MenuItem title='Projects'/>
                    <MenuItem title='Contact'/>
                </div>
                <div className='flex gap-4'>
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
        </>
    )
}