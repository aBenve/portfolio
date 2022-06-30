import React from "react"
import './styles.css'

/* 
    BUG?

    en tailwind inset-y-0 deberia ser igual que top-0 bottom-0 pero si lo cambio, no anda, es como que se pone por detras
*/

export default function Frame () {
    return <>
            <div className=" border top-0 left-0 w-full h-10"/>
            <div className=" border bottom-0 left-0 w-full h-10"/>
        
            <div className=" border top-0 bottom-0 left-0 w-10 h-full"/>
            <div className=" border top-0 bottom-0 right-0 w-10 h-full"/>
    </>
}