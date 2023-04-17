import React, { useRef } from 'react';
import { LeftButton, RightButton } from '../../../Data/Icon';
import { SwiperSlide,Swiper } from 'swiper/react';
import { useFetch } from '../../../Hooks/useFetch';
import { BannerMoviesPage, DetailsLoad, MoviesCardHome, Skeleton, Spinner } from '../../../Component';
import { Autoplay, Pagination, Navigation } from "swiper";

function MoviesTrending(props) {
    const {dataFetch,isLoading,error} =  useFetch('now_playing')
    const swiperRef = useRef();

    return (
        <div>
            <div className=" movies-list  relative  ml-8   " >
          <div className="absolute top-1/3 lef-1/2  translate-y-1/2 z-50 flex justify-between w-full ">
          <button className="icon_right  " onClick={() => swiperRef.current?.slideNext()} >
          <RightButton  className="w-6 h-6"  />
        </button>
        <button className="icon_left -translate-x-4 "  onClick={() => swiperRef.current?.slidesPerView()}>
          <LeftButton   className="w-6 h-6" />
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
              <Skeleton className="w-full h-[350px]" ></Skeleton>
            )}
          </Swiper>
        </div>
        </div>
    );
}

export default MoviesTrending;