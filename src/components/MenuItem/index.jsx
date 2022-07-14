
export default function MenuItem({title}){
    return(
        <a className="font-primary text-xl p-2 bg-gray-bg rounded-lg cursor-pointer"
            onClick={() => document.getElementById(title).scrollIntoView()}
        >
            {title}
        </a>
    )
}