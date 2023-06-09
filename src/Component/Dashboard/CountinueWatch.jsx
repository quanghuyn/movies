import React, { useEffect, useRef, useState } from "react";
import MoviesCardHome from "../CardMovies/MoviesCardHome";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import Spinner from "../Load/Spinner";
import { Navigation } from "swiper";
import { RightButton, LeftButton } from "../../Data/Icon";

const apiTrending =
  "https://api.themoviedb.org/3/trending/all/day?api_key=dc53e961c475e293222eece8d1187ddb";
function CountinueWatch(props) {
  const swiperRef = useRef();
  const { data, isLoading } = useSWR(apiTrending, fetcher);

  const [dataMovies, setDataMovies] = useState([]);
  useEffect(() => {
    data && setDataMovies(() => data.results);
  }, [data]);

  return (
    <div className="movies-list dark:bg-main-dark-bg pt-4 ">
      <div className="pt-2 pb-4 pl-2 flex flex-row justify-between items-center z-10 relative ">
        <span className="text-2xl dark:text-fontactive font-medium ">
          Trending movies
        </span>

        {/* // button pre/next slide */}
        <div className=" flex flex-row  bg-opacity-10 translate-y-1 ">
          <button
            className=" w-6 h-6 mt-3 mr-3 p-0.5 bg-fontnormal  rounded-md bg-opacity-25  hover:bg-fontnormal transition-colors "
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <LeftButton className=" cursor-pointer text-fontactive w-6 h-6  pb-1 pr-1 " />
          </button>
          <button
            className=" w-6 h-6 mt-3 mr-3 p-0.5 bg-fontnormal bg-opacity-25  rounded-md  hover:bg-fontnormal transition-colors"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RightButton className=" cursor-pointer pb-1 pr-1 w-6 h-6 " />
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
                <Spinner></Spinner>
              ) : (
                <MoviesCardHome
                  bg={item.poster_path}
                  title={item.title}
                  releasedate={item.release_date}
                  voteaverage={item.vote_average}
                  id={item.id}
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
