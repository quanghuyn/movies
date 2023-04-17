import React from "react";
import { Link } from "react-router-dom";
import {Poster} from "../../config"
import { LazyLoadImage } from "react-lazy-load-image-component";

function MoviesCardSideBar(props) {
  return (
    <Link to={`/movies/${props.id}`} className=" flex w-full my-1 rounded-md ">
      <div className="rounded-lg w-[370px] h-[170px]  px-3  flex flex-row ">
        <div className=" ">
          <div className="  absolute z-10 bg-gradient-to-r  w-[112px] h-[140px] from-cardmovies  to-cardmoviesto  "></div>
          <LazyLoadImage
            className=" cursor-pointer shadow-lg w-[112px] h-[140px] rounded-xl  border border-fontnormal border-opacity-20   object-center "
            src={`${Poster}${props.bg}`}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between pl-4   h-[140px] ">
          <span className="dark:text-fontactive text-l font-semibold  mt-2 ">
            {props.title}
          </span>
          <div className="flex flex-col text-sm">
            <div className="text-fontnormal">
              <span className="mb-2 uppercase mr-1   ">{props.lg}</span>
              <span>Movies</span>
            </div>
            <div className="flex mt-2">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4416 3.42495L12.9083 6.35828C13.1083 6.76662 13.6416 7.15828 14.0916 7.23328L16.7499 7.67495C18.4499 7.95828 18.8499 9.19162 17.6249 10.4083L15.5583 12.4749C15.2083 12.8249 15.0166 13.4999 15.1249 13.9833L15.7166 16.5416C16.1833 18.5666 15.1083 19.3499 13.3166 18.2916L10.8249 16.8166C10.3749 16.5499 9.63326 16.5499 9.17492 16.8166L6.68326 18.2916C4.89992 19.3499 3.81659 18.5583 4.28326 16.5416L4.87492 13.9833C4.98326 13.4999 4.79159 12.8249 4.44159 12.4749L2.37492 10.4083C1.15826 9.19162 1.54992 7.95828 3.24992 7.67495L5.90826 7.23328C6.34992 7.15828 6.88326 6.76662 7.08326 6.35828L8.54992 3.42495C9.34992 1.83328 10.6499 1.83328 11.4416 3.42495Z"
                  fill="#FFCD1A"
                />
              </svg>
              <span className="font-semibold pl-1 mb-1 ">
                {" "}
                {props.voteaverage}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MoviesCardSideBar;
