import React, { useRef } from "react";
import { LeftButton, RightButton } from "../../../Data/Icon";
import { SwiperSlide, Swiper } from "swiper/react";
import { useFetchTV } from "../../../Hooks/useFetch";
import { BannerMoviesPage, Skeleton } from '../../../Component';

import { Autoplay, Pagination, Navigation } from "swiper";

function BannerTv(props) {
  const { dataFetch: dataBaner, isLoading, error } = useFetchTV("popular");
  const swiperRef = useRef();
  return (
    <>
      <div className="relative mt-16 mb-16 ">
        <div className="absolute top-1/2 -translate-y-1/2  flex justify-between w-full z-40 px-0.5 ">
          <button
            className="  rounded-r-2xl w-7 h-64 bg-fontnormal  bg-opacity-10  hover:bg-fontnormal hover:bg-opacity-40 transition-colors "
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <LeftButton className=" cursor-pointer w-8 h-8 mx-auto -translate-x-1 " />
          </button>
          <button
            className="  rounded-l-2xl  w-7 h-64 bg-fontnormal bg-opacity-10 hover:bg-opacity-40 hover:bg-fontnormal transition-colors"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RightButton className=" cursor-pointer text-fontactive w-8 h-8 mx-auto -translate-x-0.5" />
          </button>
        </div>
        {isLoading && <Skeleton className="w-full h-[500px] z-50 "></Skeleton>}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          {dataBaner &&
            dataBaner.map((i) => {
              return (
                <SwiperSlide key={i.id}>
                  <BannerMoviesPage
                    to={'tvseries'}
                    bg={i.backdrop_path}
                    bgSecond={i.poster_path}
                    title={i.title || i.name}
                    lang={i.original_language}
                    id={i.id}
                  ></BannerMoviesPage>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export default BannerTv;
