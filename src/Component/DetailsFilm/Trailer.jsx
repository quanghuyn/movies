import React, { useContext, useEffect, useRef, useState } from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import { useLocation, useParams } from "react-router";
import {useStateContext} from "../../Contexts/ContextProvider"

function Trailer(props) {
  const location = useLocation()
  const pathname = location.pathname.slice(1,9)
  const type =  pathname === 'tvseries' ? 'tv' : 'movie'
  const ref = useRef(null)
  const apiVideo =`https://api.themoviedb.org/3/${type}/${props.id}/videos?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US`

  const { data, isLoading, error } = useSWR(apiVideo, fetcher);
  const {hanldClose,openTrailer} = useStateContext()
  const [key,setKey] = useState()
  useEffect(()=>{
    data && setKey(data?.results[0]?.key)
  },[data])

  return (
    <div>
      <div  ref={ref} onClick={()=> hanldClose()}  className={`bg-main-dark-bg w-full h-[110vh] z-40 absolute -top-2 bg-opacity-60 ${openTrailer ? null:'hidden'}`}>
          <div onClick={()=> hanldClose()}
          className=" p-1 cursor-pointer absolute top-10 z-50 bg-tobg rounded-full bg-opacity-40 right-20 hover:bg-main-dark-bg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

        <div className=" select-none absolute bg-main-dark-bg w-[1100px] h-[550px] top-1/4 left-1/4 -translate-x-[170px] -translate-y-[150px]    rounded-lg">
          <div className="flex  justify-center content-center  ">
            <iframe id="refIframe"

              width="1100"
              height="550"
              src= {`https://www.youtube-nocookie.com/embed/${openTrailer? key: null}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen 
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trailer;
