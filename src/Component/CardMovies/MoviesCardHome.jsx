import React from "react";
import imblogo from "../../Data/IMDb.png";
import { Link } from "react-router-dom";
import {Poster} from "../../config"

function MoviesCardHome(props) {
  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr?.split("-");
    let newDate = `${day}-${month}-${year}`;
    return newDate;
  };

  return (
    <Link
      to={`/movies/${props.id}`}
      className=" ease-in-out hover:duration-300 hover:scale-110 flex flex-col rounded-lg dark:bg-movies bg-sc-bglight dark:text-fontactive h-[460px]  mt-4   "
    >
      <div className="   w-[320px] h-[300px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  "></div>
      <img
        src={`${Poster}${props.bg}`}
        alt=""
        className="w-full h-[300px] object-center  rounded-t-lg mb-5  contrast-125"
      />

      <div className="flex flex-col flex-1 pl-4">
        <h3 className="text-2xl font-semibold ">
          {props.title ? props.title : "Lorem"}{" "}
        </h3>

        <div className="flex items-center justify-between text-l mb-10 mt-auto pr-4 ">
          <span className="pt-1">
            {props.releasedate ? formatDate(props.releasedate) : "15-04-2019"}
          </span>

          <span className=" flex">
            <img
              className="object-cover w-12 mr-1  -pt-2"
              src={imblogo}
              alt=""
            />
            <span className="pt-1"> {props.voteaverage?.toFixed(2)}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MoviesCardHome;
