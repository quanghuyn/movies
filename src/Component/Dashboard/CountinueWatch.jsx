import React, { useEffect, useRef, useState } from "react";
import MoviesCard from "./MoviesCard";
import MoviesCardHome from "./MoviesCardHome";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";
import { fetcher } from "../../config";
import Spinner from "../Load/Spinner";
import { Link, NavLink } from "react-router-dom";
import { Navigation } from "swiper";


const apiTrending ='https://api.themoviedb.org/3/trending/all/day?api_key=dc53e961c475e293222eece8d1187ddb'
function CountinueWatch(props) {
  const swiperRef = useRef();
  const { data,isLoading} = useSWR(apiTrending,fetcher);

  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    data && setDataMovies(() => data.results);
  }, [data]);

  console.log(data);
  return (
    <div className="movies-list bg-main-dark-bg pt-4 ">
      <div className='pt-2 pb-4 pl-2 flex flex-row justify-between items-center z-10 relative '>
          <span className="text-2xl text-fontactive font-medium " >Trending movies</span>
          <div className=" flex flex-row  bg-opacity-20 ">
             <button className="mr-3 p-0.5 bg-fontnormal bg-opacity-25 " onClick={() => swiperRef.current?.slidePrev()}>
                <svg  className=" cursor-pointer text-fontactive w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path  stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
             </button>
             <button className="mr-3 p-0.5 bg-fontnormal bg-opacity-25 " onClick={() => swiperRef.current?.slideNext()}>
              <svg className=" cursor-pointer text-fontactive w-6 h-6 "  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
             </button>

          </div>
      </div>
      <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}   modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}  >

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
