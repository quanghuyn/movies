import React, { useEffect, useState } from "react";
import MoviesCard2 from "./MoviesCardSideBar";
import Genres from "./Genres";
import { fetcher } from "../../config";
import useSWR from "swr";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import Spinner from "../Load/Spinner";

function ContentSideBar(props) {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1",
    fetcher
  );
  const [dataMovies, setDataMovies] = useState();
  useEffect(() => {
    const dataM = [];
    for (let index = 0; index < 3; index++) {
      isLoading ? null : dataM.push(data?.results[index]);
    }
    setDataMovies(() => dataM);
  }, [data]);

  return (
    <div className="w-full">
      <div className="font-semibold text-xl mb-4 pt-5 pl-3">Top Movies</div>
      <div>
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          dataMovies?.map((item) => {
            return (
              <MoviesCard2
                key={item.id}
                bg={item.poster_path}
                title={item.title}
                releasedate={item.release_date}
                voteaverage={item.vote_average}
                lg={item.original_language}
              ></MoviesCard2>
            );
          })
        )}

        <button className=" ml-8 w-72 border rounded-full h-10 border-link text-link text-lg">
          {" "}
          See All
        </button>
      </div>
      <div>
        <Genres></Genres>
      </div>
    </div>
  );
}

export default ContentSideBar;
