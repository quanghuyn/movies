import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {Poster} from "../../config"
import imblogo from "../../Data/IMDb.png";
function MoviesCard(props) {
  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr?.split("-");
    let newDate = `${day}-${month}-${year}`;
    return newDate;
  };
  return (
    <Link
      to={`/movies/${props.id}`}
      className=" w-[270px]  flex flex-col rounded-lg dark:bg-movies bg-bg dark:text-fontactive max-sm:h-[560px] h-[460px]  "
    >
      <div className=" w-[220px] h-[230px] absolute z-10 bg-gradient-to-r  dark:from-cardmovies  to-cardmoviesto  "></div>
      <LazyLoadImage
        src={`${Poster}${props.bg}`}
        alt=""
        className="w-[270px] max-sm:h-[200px] h-[330px] object-fill max-sm:object-top  rounded-t-lg mb-5"
      />

      <div className="flex flex-col flex-1 pl-4">
        <h3 className="text-2xl font-semibold ">
          {props.title ? props.title : "Lorem"}{" "}
        </h3>

        <div className="flex items-center justify-between text-l mb-10 mt-auto pr-4 ">
          <span className="pt-1">
            {props.releasedate ? formatDate(props.releasedate) : ""}
          </span>

          <span className=" flex">
            <img
              className={`object-cover w-12 mr-1  -pt-2 ${ props.releasedate || 'hidden'}`}
              src={imblogo}
              alt=""
            />
            <span className="pt-1"> { props.releasedate  ? props.voteaverage?.toFixed(2) : ''}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MoviesCard;
