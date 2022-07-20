import ContactBgSvg from "../ContactBgSvg";

export default function Contact(){
    return(
        <div id='Contact' className='px-0 md:px-10 pb-10 min-h-min bg-dark'>
            <div className='relative flex flex-col items-center' >
                <ContactBgSvg style="w-full h-full absolute top-0 left-0 md:p-10 md:block hidden"/>
                <p className='text-light font-secondary md:text-4xl text-2xl  italic mt-24'>
                    Contact
                </p>
                <div className='bg-second-dark p-5 rounded-lg my-20 md:my-36'>
                    <span className='font-primary text-xl md:text-4xl text-light'>abenvenuto@itba.edu.ar</span>
                </div>
            </div>
        </div>
    )
}