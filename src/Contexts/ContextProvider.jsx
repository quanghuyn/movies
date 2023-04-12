import { createContext, useContext, useState } from "react";

export const SetContext = createContext();

  export const ContextProvider = ({children}) => {
  const [active, setActive] = useState(false);
  const [openTrailer,setOpenTrailer] = useState(false)
  const hanldClose = () =>{
    setOpenTrailer(!openTrailer)
  }

  const value = { hanldClose ,openTrailer};
  return (<SetContext.Provider value={value}>{children}</SetContext.Provider>);
};

// export default ContextProvider