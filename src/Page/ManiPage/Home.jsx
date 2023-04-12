import React, { useEffect, useState } from "react";
import {
  Banner,
  Studio,
  ContentSideBar,
  CountinueWatch,
} from "../../Component";
import { fetcher } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
function Home(props) {
  const apiTrending =
    "https://api.themoviedb.org/3/trending/all/day?api_key=dc53e961c475e293222eece8d1187ddb";
  const { data, error } = useSWR(apiTrending, fetcher);
  error ? (window.location = "/error") : null;

  const [dataBaner, setDataBaner] = useState([]);

  useEffect(() => {
    data &&
      setDataBaner(() => {
        return data.results.slice(0, 5);
      });
  }, [data]);


  return (
    // bg-main-dark-bg h-[1000px] w-1600
    <div className=" max-lg:left-0  absolute right-0  max-lg:w-full w-5/6">
      <div className="   flex  bg-main-dark-bg   -ml-1 lg:pl-6  pb-20  max-sm:h-full lg:h-[1180px]">
        <div className=" flex flex-row w-full">
          <div className="   max-lg:w-full lg:w-2/3 ">
            <div className="flex flex-col  h-[990px] ">
              <div className=" max-lg:w-full  lg:basis-3/6">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {dataBaner &&
                    dataBaner.map((i) => {
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

          <div className=" pl-3 w-1/3 border-active text-fontactive max-lg:hidden ">
            <ContentSideBar>content</ContentSideBar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
