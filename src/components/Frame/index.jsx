import React from "react"

export default function Frame () {
    return <>
            <div className="z-20 absolute top-0 left-0 w-full h-10 bg-white"/>
            <div className="z-20 absolute bottom-0 left-0 w-full h-10 bg-white"/>
            <div className="z-20 absolute top-0 left-0 bottom-0 w-10 h-full bg-white"/>
            <div className="z-20 absolute top-0 right-0 bottom-0 w-10 h-full bg-white"/>
    </>
}