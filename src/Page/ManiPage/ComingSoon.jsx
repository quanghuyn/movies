import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import {
  MoviesCardComingSoon,
  MoviesCardHome,
  DetailsLoad,
  MoviesCardSideBar,
  Spinner,
} from "../../Component";
import { LeftButton, RightButton } from "../../Data/Icon";
//libary
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

function Trending(props) {
  const { dataFetch, isLoading, error } = useFetch("upcoming");
  const { dataFetch: dataOnYear } = useFetch("upcoming", 2);
  const swiperRef = useRef();
  const swiperSecondRef = useRef();
  error ? (window.location = "/error") : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        // transition: { duration: 0.1 },
        opacity: 0.1,
      }}
      className=" max-lg:left-0  absolute right-0 h-fit max-lg:w-full w-5/6  select-none"
    >
      <div className="dark:bg-main-dark-bg   lg:-ml-1 lg:pl-6  pb-10 ">
        {isLoading ? <DetailsLoad></DetailsLoad> : null}
        <h2 className="dark:text-fontactive text-2xl font-medium mt-16 pt-4 mb-8 z">
          Coming Soon
        </h2>
        <div className="movies-commingsoon relative ">
          <div className="absolute top-1/2 lef-1/2  -translate-y-1/2 z-10 flex justify-between w-full ">
            <button
              className="  rounded-full w-10 h-10 bg-fontnormal  bg-opacity-25  hover:bg-fontnormal transition-colors "
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <LeftButton className=" cursor-pointer w-8 h-8 mx-auto -translate-x-1 " />
            </button>

            <button
              className="  rounded-full w-10 h-10 bg-fontnormal bg-opacity-70  hover:bg-fontnormal transition-colors"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <RightButton className=" cursor-pointer text-fontactive w-8 h-8 mx-auto translate-x-1" />
            </button>
          </div>

          <Swiper
            grabCursor={"true"}
            spaceBetween={20}
            slidesPerView={"auto"}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {dataFetch ? (
              dataFetch.map((i) => {
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
        <h3 className="dark:text-fontactive text-2xl font-medium mt-8 mb-8 max-sm:pl-10  ">
          On 2023
        </h3>

        <div className=" movies-list relative">
          <div className="absolute top-1/3 lef-1/2  translate-y-1/2 z-50 flex justify-between w-full ">
            <button
              className="  rounded-full w-10 h-10 bg-fontnormal  bg-opacity-25  hover:bg-fontnormal transition-colors "
              onClick={() => swiperSecondRef.current?.slidePrev()}
            >
              <LeftButton className=" cursor-pointer w-8 h-8 mx-auto -translate-x-1 " />
            </button>

            <button
              className="  rounded-full w-10 h-10 bg-fontnormal bg-opacity-70  hover:bg-fontnormal transition-colors"
              onClick={() => swiperSecondRef.current?.slideNext()}
            >
              <RightButton className=" cursor-pointer text-fontactive w-8 h-8 mx-auto translate-x-1" />
            </button>
          </div>
          <Swiper
            grabCursor={"true"}
            spaceBetween={20}
            slidesPerView={"auto"}
            onBeforeInit={(swiper) => {
              swiperSecondRef.current = swiper;
            }}
          >
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
    </motion.div>
  );
}

export default Trending;
