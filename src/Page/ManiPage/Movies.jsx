import React, { useEffect, useRef, useState } from "react";
import { fetcher } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import{MoviCardResSize,BannerMoviesPage} from '../../Component'

function Movies(props) {
  const apiTrending ="https://api.themoviedb.org/3/movie/now_playing?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1";
  const { data, error } = useSWR(apiTrending, fetcher);
  // error ? (window.location = "/error") : null;
  const [dataBaner, setDataBaner] = useState([]);
  const swiperRef = useRef();
  useEffect(() => {
    data &&
      setDataBaner(() => {
        return data.results.slice(4, 15);
      });
    
  }, [data]);

  return (
    <div className="dark:bg-main-dark-bg w-full h-full">
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2  flex justify-between w-full z-40 px-0.5 ">
          <button
            className="  rounded-r-2xl w-7 h-64 bg-fontnormal  bg-opacity-10  hover:bg-fontnormal hover:bg-opacity-40 transition-colors "
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
            className="  rounded-l-2xl  w-7 h-64 bg-fontnormal bg-opacity-10 hover:bg-opacity-40 hover:bg-fontnormal transition-colors"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              className=" cursor-pointer text-fontactive w-8 h-8 mx-auto -translate-x-0.5"
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
      <h3 className="dark:text-fontactive text-2xl mb-6 ml-9 uppercase ">Popular</h3>
      <div className=" h-0.5  bg-gradient-to-r from-link via-linkvia to-linkto ml-9 mb-12"></div>
    <div className="relative">

      <MoviCardResSize
      ></MoviCardResSize>
    </div>
      <div className="pb-44"></div>
    </div>
  );
}

export default Movies;
