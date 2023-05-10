import React, {useRef } from "react";
import {Poster} from "../../../config"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useFetchTV } from "../../../Hooks/useFetch";


function TvCardResSize(props) {
  const ref = useRef(null);
  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }
  const { dataFetch:dataPop, isLoading, error } = useFetchTV("top_rated",2);
  return (
    <div className="dark:bg-main-dark-bg relative scr mb-16 ml-4">
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

        {dataPop && dataPop.map(i=>{return(
            <Link key={i.id} className=" card" to={`/tvseries/${i.id}`} >
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
              <h3 className="text-xl mb-1" >{i.original_name}</h3>
              <p className="pl-2">{i.first_air_date}</p>
            </div>
          </div>
            </Link>
        )})}
      </div>
    </div>
  );
}
export default TvCardResSize;