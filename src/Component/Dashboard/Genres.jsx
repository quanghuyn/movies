import React from "react";
import { Link } from "react-router-dom";
import Genres from "../DiscoverySideBar/Genres"
import useSWR from "swr";
import { fetcher, fetcherConfig } from "../../config";
import { useSearchParams } from "react-router-dom";

function Genress(props) {
  const { data: genres } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US",
    fetcher
  );
  const [searchParam, setSearchParam] = useSearchParams();
  const chooseGenre = (genreId) => {
    searchParam.append("genre", genreId);
    setSearchParam(searchParam);
  };
  const genreType = searchParam.getAll("genre");
 
  return (
    <div className="pl-4 pt-2   ">
      <Link
        to={"/toprated"}
        className="mb-6  mx-4 grid justify-items-center px-20 border rounded-full py-2 border-link text-link text-lg   "
      >
        See All
      </Link>
      <div className="text-2xl font-medium mb-6 ">Favorites Genres</div>
      <div className="content-start ml-4 h-48 overflow-y-scroll scrollGenres">
      {genres &&
        genres.genres.map((i, ix) => {
          return (
            <Link
              to={`/discovery?genre=${i.id}`}
              id={i.id}
              onClick={() => chooseGenre(i.id)}
              key={i.id}
              className=" inline-block hover:scale-110 mb-4 mr-4 bg-sc-bglight rounded-full  w-fit px-4 pt-1 pb-2 text-lg transition hover:duration-700 ease-in-out dark:text-fontactive "
            >
              {i.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Genress;
