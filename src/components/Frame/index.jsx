import React from "react"
import './styles.css'

export default function Frame () {
    return <>
            <div className=" border top-0 left-0 w-full h-10"/>
            <div className=" border bottom-0 left-0 w-full h-10"/>
            <div className=" border inset-y-0 left-0 w-10 h-full"/>
            <div className=" border inset-y-0 right-0 w-10 h-full"/>
    </>
}