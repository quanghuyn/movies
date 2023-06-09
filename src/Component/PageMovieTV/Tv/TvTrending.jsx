import React, { useRef } from "react";
import { LeftButton, RightButton } from "../../../Data/Icon";
import { SwiperSlide, Swiper } from "swiper/react";
import { useFetchTV } from "../../../Hooks/useFetch";
import { MoviesCardHome, Skeleton } from "../../../Component";
import { Autoplay, Pagination, Navigation } from "swiper";

function TvTrending(props) {
  const { dataFetch, isLoading, error } = useFetchTV("on_the_air");
  const swiperRef = useRef();

  return (
    <div>
      <div className=" movies-list  relative  ml-8   ">
        <div className="absolute top-1/3 lef-1/2  translate-y-1/2 z-50 flex justify-between w-full ">
          <button
            className="icon_right  "
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RightButton className="w-6 h-6" />
          </button>
          <button
            className="icon_left -translate-x-4 "
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <LeftButton className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-row gap-5">
          {isLoading &&
            new Array(5).fill(".").map((i, ix) => {
              return (
                <Skeleton
                  key={ix}
                  className="w-[350px] h-[370px] z-50 "
                ></Skeleton>
              );
            })}
        </div>
        <Swiper
          grabCursor={"true"}
          spaceBetween={20}
          slidesPerView={"auto"}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {dataFetch &&
            dataFetch.map((i,ix) => {
              return (
                <SwiperSlide key={i.id}>
                  <MoviesCardHome
                    to={'tvseries'}
                    title={i.original_name}
                    bg={i.poster_path}
                    id={i.id}
                    releasedate={i.first_air_date}
                    voteaverage={i.vote_average}
                  ></MoviesCardHome>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default TvTrending;
