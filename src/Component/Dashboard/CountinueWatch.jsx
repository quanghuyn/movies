import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import MoviesCardHome from "./MoviesCardHome";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import { fetcher } from "../../config";
import Spinner from "../Load/Spinner";
import { Link, NavLink } from "react-router-dom";


const apiTrending ='https://api.themoviedb.org/3/trending/all/day?api_key=dc53e961c475e293222eece8d1187ddb'
function CountinueWatch(props) {
  const { data,isLoading} = useSWR(apiTrending,fetcher);

  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    data && setDataMovies(() => data.results);
  }, [data]);

  console.log(data);
  return (
    <div className="movies-list bg-main-dark-bg  ">
      <div className='pt-2 pb-4 pl-2 '>
          <span className="text-2xl text-fontactive   " >Trending movies</span>
      </div>
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
        {dataMovies?.map((item) => {
          console.log(item.release_date)
          return (
            <SwiperSlide key={item.title}>
              {isLoading ? (
                <Spinner></Spinner>
              ) : (
                <MoviesCardHome
                  key={item.id}
                  bg={item.poster_path}
                  title={item.title}
                  releasedate={item.release_date}
                  voteaverage={item.vote_average}
                ></MoviesCardHome>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CountinueWatch;
