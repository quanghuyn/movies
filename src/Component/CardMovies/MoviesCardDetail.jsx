import React from "react";
import { Link } from "react-router-dom";
import {Poster} from "../../config"
import { LazyLoadImage } from "react-lazy-load-image-component";

function MoviesCardDetail(props) {
  return (
    <Link
      to={`/moviesdetail/${props.id}`}
      className="flex flex-col rounded-lg bg-movies text-fontactive h-[460px]  mt-4   "
    >
      <div className=" w-[320px] h-[300px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  "></div>
      <LazyLoadImage
        src={`${Poster}${props.bg}`}
        alt=""
        className="w-full h-[300px] object-center  rounded-t-lg mb-5  contrast-125"
      />

      <div className="flex flex-col flex-1 pl-4">
        <h3 className="text-2xl font-semibold ">
          {props.title ? props.title : "Lorem"}{" "}
        </h3>
      </div>
    </Link>
  );
}

export default MoviesCardDetail;
