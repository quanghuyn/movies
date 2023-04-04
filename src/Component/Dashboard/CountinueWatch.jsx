import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import { fetcher } from "../../config";
import Spinner from "../Load/Spinner";
import { Link, NavLink } from "react-router-dom";
function CountinueWatch(props) {
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1",
    fetcher
  );

  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    data && setDataMovies(() => data.results);
  }, [data]);

  console.log(data);
  return (
    <div className="movies-list ">
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {dataMovies?.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              {isLoading ? (
                <Spinner></Spinner>
              ) : (
                <MoviesCard
                  key={item.id}
                  bg={item.poster_path}
                  title={item.title}
                  releasedate={item.release_date}
                  voteaverage={item.vote_average}
                ></MoviesCard>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CountinueWatch;
