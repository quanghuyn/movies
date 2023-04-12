import React from "react";
import imblogo from "../../Data/IMDb.png";
import { Link } from "react-router-dom";
function MoviesCard(props) {
  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr?.split("-");
    let newDate = `${day}-${month}-${year}`;
    return newDate;
  };
  return (
    <Link
      to={`/movies/${props.id}`}
      className=" ease-in-out hover:duration-300 hover:scale-110 flex flex-col rounded-lg bg-movies text-fontactive max-sm:h-[560px] h-[460px] sele "
    >
      <div className=" w-[320px] h-[350px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  "></div>
      <img
        src={`https://image.tmdb.org/t/p/w500${props.bg}`}
        alt=""
        className="w-full max-sm:h-[400px] h-[330px] object-fill max-sm:object-top  rounded-t-lg mb-5"
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

export default MoviesCard;
