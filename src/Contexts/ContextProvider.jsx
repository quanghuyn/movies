import { createContext, useContext, useState } from "react";

export const SetContext = createContext();

  export const ContextProvider = ({children}) => {
  const [key, setkey] = useState('');
  const [openTrailer,setOpenTrailer] = useState(false)
  const [mode,setMode] = useState('dark')

  const toggleDarklMode = () => {
    setMode(()=>{return  mode === 'light' ? 'dark' : 'light'   })
    console.log(11);
  }
  const hanldClose = () =>{
    setOpenTrailer(!openTrailer)
  }

  const value = { hanldClose ,openTrailer,toggleDarklMode,mode,key,setkey};
  return (<SetContext.Provider value={value}>{children}</SetContext.Provider>);
};

export const useStateContext = () => useContext(SetContext);