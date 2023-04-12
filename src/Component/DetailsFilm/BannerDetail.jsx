import React, { useContext } from "react";
import imblogo from "../../Data/IMDb.png";
import Actor from "./Actor";
import {SetContext} from "../../Contexts/ContextProvider"
function BannerDetail(props) {
  const calcTime = (time) => {
    const str = time / 60;
    const hour = Math.floor(str);
    const minute = Math.round(60 * (str - Math.floor(str)));
    return `${hour}h ${minute}m`;
  };
  const {hanldClose} = useContext(SetContext)

  return (
    <div className="relative h-full bg-main-dark-bg">
      {/* info movies */}
      <div className="text-fontactive flex flex-col justify-start absolute bottom-20   left-28 contrast-100  z-20">
        <h2 className="text-5xl mb-8 ">{props.title}</h2>
        <p className="text-lg w-1/2 mb-4">{props.brfie}</p>
        <div className="flex flex-row text-fontnormal text-lg">
          <p className="  mb-4">{calcTime(props.runtime)} </p>
          {props.gentes.map((i, ix) => {
            return (
              <div className="ml-1" key={ix}>
                | {i.name}
              </div>
            );
          })}
        </div>
        <button onClick={()=>{hanldClose()}} 
        className=" bg-link rounded-lg  py-3  text-xl w-36   ">
          Trailer
        </button>
      </div>
      <div>
        {/* Cast */}
        <div className="absolute bottom-16  right-32  text-fontactive z-20">
          <h3 className="text-2xl mb-4">Actors</h3>
          <Actor id={props.id}></Actor>
        </div>

        {/* Background */}

        <div className="  bottom-0 absolute bg-gradient-to-t h-1/2 w-full from-tobg via-viabg to-frombg z-10 "></div>
        <img
          className="w-screen contrast-125"
          src={`https://image.tmdb.org/t/p/original${props.bg}`}
          alt=""
        />
      </div>
    </div>
  );
}

export default BannerDetail;
