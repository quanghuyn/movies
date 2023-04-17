import React, { useEffect, useState } from "react";
import {
  Banner,
  Studio,
  ContentSideBar,
  CountinueWatch,
  Skeleton,
} from "../../Component";
import {useFetch} from "../../Hooks/useFetch"
// lib slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
function Home(props) {
  // call api from useFetch
  const {dataFetch,isLoading,error} =  useFetch('popular')
  return (
    // bg-main-dark-bg h-[1000px] w-1600
    <div className=" max-lg:left-0  absolute right-0  max-lg:w-full w-5/6">
      <div className="   flex bg-light-bg dark:bg-main-dark-bg   -ml-1 lg:pl-6  pb-20  max-sm:h-full lg:h-[1180px]">
        <div className=" flex flex-row w-full">
          <div className="   max-lg:w-full lg:w-2/3 ">
            <div className="flex flex-col  h-[990px] ">
              <div className=" max-lg:w-full  min-h-h-[400px] lg:basis-3/6">
                {isLoading && <Skeleton className="absolute top-20  w-4/6 h-[400px] z-50 " ></Skeleton>}
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {dataFetch &&
                    dataFetch.map((i) => {
                      return (
                        <SwiperSlide key={i.id}>
                          <Banner
                            bg={i.backdrop_path}
                            bgSecond={i.poster_path}
                            title={i.title || i.name}
                            lang={i.original_language}
                            id={i.id}
                          ></Banner>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              <div className=" max-lg:mx-auto lg:basis-1/6">
                <Studio></Studio>
              </div>
              <div className="lg:basis-2/6">
                <CountinueWatch></CountinueWatch>
              </div>
            </div>
          </div>
            
          <div className=" bg-light pl-3 w-1/3 dark:border-active dark:text-fontactive max-lg:hidden dark:bg-main-dark-bg">
            <ContentSideBar>content</ContentSideBar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
