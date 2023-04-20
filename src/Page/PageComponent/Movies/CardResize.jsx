import React, { useEffect, useRef, useState } from "react";
import { fetcher } from "../../../config";
import useSWR from "swr";

import {Poster} from "../../../config"

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import { Skeleton } from "../../../Component";


function CardResSize(props) {
  const ref = useRef(null);
  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }
  const { dataFetch:dataPop, isLoading, error } = useFetch("popular",2);

//   const apiPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=2'
//   const { data } = useSWR(apiPopular, fetcher);
//   const [dataPop, setDataPop] = useState([]);
//   useEffect(()=>{
//     data && setDataPop(()=> data.results)
//   },[data])
  return (
    <div className="dark:bg-main-dark-bg relative scr ml-4">
        <button className="icon_right" onClick={() => scroll(370)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button className="icon_left" onClick={() => scroll(-370)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      <div className=" cards scrollbar relative" ref={ref}>
      <div className="flex flex-row gap-5">
        {isLoading &&  new Array(5).fill('.').map((i,ix)=> { return  <Skeleton key={ix} className='w-[350px] h-[370px] z-50 ' ></Skeleton>}) }
        </div>
        {dataPop && dataPop.map(i=>{return(
            <Link key={i.id} className=" card" to={`/movies/${i.id}`} >
          <LazyLoadImage
            className="poster"
            src={`${Poster}${i.poster_path}`}
            alt=""
          />
          <div className="rest_card">
            <LazyLoadImage
              className=""
              src={`${Poster}${i.backdrop_path}`}
              alt=""
            />
            <div className="cont">
              <h3 className="text-xl mb-1" >{i.title}</h3>
              <p className="pl-2">{i.release_date}</p>
            </div>
          </div>
            </Link>
        )})}
      </div>
    </div>
  );
}
export default CardResSize;