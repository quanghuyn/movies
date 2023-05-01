import React from "react";
import { fetcher, fetcherConfig } from "../../config";
import { useSearchParams } from "react-router-dom";
import useSWR from "swr";

function Genres(props) {
  const { data: genres } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US",
    fetcher
  );
  const [searchParam, setSearchParam] = useSearchParams();
  const chooseGenre = (genreId) => {
    const existingGenres = searchParam.getAll("genre")
   if (existingGenres.includes(`${genreId}`)) {
      const updatedGenres = existingGenres.filter((genre) => genre != genreId);
      searchParam.delete("genre");
      
      updatedGenres.forEach((genreId) => {
        searchParam.append("genre", genreId);
      });
      
      setSearchParam(searchParam);
    } else {
      searchParam.append("genre", genreId);
      setSearchParam(searchParam);
    }
  };
  return (
    <div>
      {genres &&
        genres.genres.map((i, ix) => {
          return (
            <button
              id={i.id}
              onClick={() => chooseGenre(i.id)}
              key={i.id}
              className={`${
                searchParam.getAll("genre").includes(`${i.id}`) ? 
                "bg-link text-white" : "bg-sc-bglight"
              } hover:scale-110 mb-4 mr-4  rounded-full  w-fit px-4 pt-1 pb-2 text-lg transition hover:duration-700 ease-in-out dark:text-fontactive`}
            >
              {i.name}
            </button>
          );
        })}
    </div>
  );
}

export default Genres;
