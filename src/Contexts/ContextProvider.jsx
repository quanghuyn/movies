import { createContext, useContext, useState } from "react";

const SetContext = createContext()

export const ContextProvider = () => {
    const [active,setActive] = useState(false)

    const value = {active,setActive}
    return(
        <SetContext.Provider value={value} ></SetContext.Provider>
    )
}

export const useSateContext = () => {
    const context= useContext(SetContext)
    if(typeof context === undefined) throw new Error('must be use within Context')
    return context
}