import React, { useEffect, useRef, useState } from "react";
import MoviesCardHome from "../CardMovies/MoviesCardHome";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/navigation";
import { fetcher } from "../../config";
import Spinner from "../Load/Spinner";
import { Navigation } from "swiper";

const apiTrending ="https://api.themoviedb.org/3/trending/all/day?api_key=dc53e961c475e293222eece8d1187ddb";
function CountinueWatch(props) {
  const swiperRef = useRef();
  const { data, isLoading } = useSWR(apiTrending, fetcher);

  const [dataMovies, setDataMovies] = useState([]);
console.log(data);
  useEffect(() => {
    data && setDataMovies(() => data.results);
  }, [data]);

  return (
    <div className="movies-list bg-main-dark-bg pt-4 ">
      <div className="pt-2 pb-4 pl-2 flex flex-row justify-between items-center z-10 relative ">
        <span className="text-2xl text-fontactive font-medium ">
          Trending movies
        </span>

        {/* // button pre/next slide */}
        <div className=" flex flex-row  bg-opacity-10 ">
          <button
            className=" w-6 h-6 mt-3 mr-3 p-0.5 bg-fontnormal  bg-opacity-25 "
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              className=" cursor-pointer  w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F9F9F9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className=" w-6 h-6 mt-3 mr-3 p-0.5 bg-fontnormal bg-opacity-25 "
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              className=" cursor-pointer text-fontactive w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#F9F9F9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

{/* // Slide Trending Movies */}
      <Swiper
        grabCursor={"true"}
        spaceBetween={20}
        slidesPerView={"auto"}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {dataMovies?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              {isLoading ? (
                <Spinner> </Spinner>
              ) : (
                <MoviesCardHome
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
