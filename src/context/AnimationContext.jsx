import React, { useState } from "react"

const AnimationContext = React.createContext({}) 

export function AnimationContextProvider({children}){

    const [transitionAnimFinish, setTransitionAnimFinish] = useState(false)
    //const [helloAnimFinish, setHelloAnimFinish] = useState(false)

    return (
        <AnimationContext.Provider value={{transitionAnimFinish, setTransitionAnimFinish}}>
            {children}
        </AnimationContext.Provider>
    )
}

export default AnimationContext