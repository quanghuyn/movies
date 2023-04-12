import React, { useEffect, useRef, useState } from "react";
import {
  MoviesCardComingSoon,
  MoviesCardHome,
  Spinner,
  MoviesCardSideBar,
} from "../../Component";

//libary
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { fetcher } from "../../config";
import useSWR from "swr";

const apiComingSoon =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1";
const apiComingYear =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=2";

function Trending(props) {
  const swiperRef = useRef();
  const swiperSecondRef = useRef();


  const [dataComing, setDataComing] = useState([]);
  const [dataOnYear, setDataOnYear] = useState([]);
  const { data, error } = useSWR(apiComingSoon, fetcher);
  const { data: comingYear, error: errorComing } = useSWR(
    apiComingYear,
    fetcher
  );
  error ? (window.location = "/error") : null;
  errorComing ? (window.location = "/error") : null;
  useEffect(() => {
    data && setDataComing(data.results);
    comingYear && setDataOnYear(comingYear.results);
  }, [data, comingYear]);


  return (
    // <div className=' absolute  right-1 w-5/6 pt-20 h-fit bg-main-dark-bg ml-8 ' >
    //     <div className='ml-8'>
    <div className=" max-lg:left-0  absolute right-0 h-fit max-lg:w-full w-5/6  select-none">
      <div className="bg-main-dark-bg   lg:-ml-1 lg:pl-6  pb-10 ">
        <h2 className="text-fontactive text-2xl font-medium mt-16 pt-4 mb-8 z">
          Coming Soon
        </h2>
        {dataComing ? null : <Spinner></Spinner>}
        <div className="movies-commingsoon relative ">
            <div className="absolute top-1/2 lef-1/2  -translate-y-1/2 z-10 flex justify-between w-full ">
              <button
            className="  rounded-full w-10 h-10 bg-fontnormal  bg-opacity-25  hover:bg-fontnormal transition-colors "
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              className=" cursor-pointer w-8 h-8 mx-auto -translate-x-1 "
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
            className="  rounded-full w-10 h-10 bg-fontnormal bg-opacity-70  hover:bg-fontnormal transition-colors"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              className=" cursor-pointer text-fontactive w-8 h-8 mx-auto translate-x-1"
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

          <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"} onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}>
            {dataComing ? (
              dataComing.map((i) => {
                return (
                  <SwiperSlide key={i.id}>
                    <MoviesCardComingSoon
                      title={i.title}
                      img={i.backdrop_path}
                      id={i.id}
                      date={i.release_date}
                    ></MoviesCardComingSoon>
                  </SwiperSlide>
                );
              })
            ) : (
              <Spinner></Spinner>
            )}
          </Swiper>
        </div>
        <h3 className="text-fontactive text-2xl font-medium mt-8 mb-8 max-sm:pl-10  ">
          On 2023
        </h3>

        <div className=" movies-list relative">
        <div className="absolute top-1/3 lef-1/2  translate-y-1/2 z-50 flex justify-between w-full ">
              <button
            className="  rounded-full w-10 h-10 bg-fontnormal  bg-opacity-25  hover:bg-fontnormal transition-colors "
            onClick={() => swiperSecondRef.current?.slidePrev()}
          >
            <svg
              className=" cursor-pointer w-8 h-8 mx-auto -translate-x-1 "
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
            className="  rounded-full w-10 h-10 bg-fontnormal bg-opacity-70  hover:bg-fontnormal transition-colors"
            onClick={() => swiperSecondRef.current?.slideNext()}
          >
            <svg
              className=" cursor-pointer text-fontactive w-8 h-8 mx-auto translate-x-1"
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
            <Swiper grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"} onBeforeInit={(swiper) => {
          swiperSecondRef.current = swiper;
        }}>
            {dataOnYear ? (
              dataOnYear.map((i) => {
                return (
                  <SwiperSlide key={i.id}>
                    <MoviesCardHome
                      title={i.title}
                      bg={i.poster_path}
                      id={i.id}
                      releasedate={i.release_date}
                      voteaverage={i.vote_average}
                    ></MoviesCardHome>
                  </SwiperSlide>
                );
              })
            ) : (
              <Spinner></Spinner>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Trending;
