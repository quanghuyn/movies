import React from 'react';
import { MoviesCardTrending } from '../../Component';

//libary
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


function Trending(props) {
    return (
        <div className=' absolute  right-1 w-5/6 pt-20 h-full bg-main-dark-bg ml-8  movies-commingsoon ' >
            <div className='ml-8'>
                <div>
                    <h2 className='text-fontactive text-2xl font-medium mt-8 mb-8' >Coming Soon</h2>
                </div>

                <Swiper  grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
                    <SwiperSlide>
                         <MoviesCardTrending></MoviesCardTrending> 
                    </SwiperSlide>
                    <SwiperSlide>
                         <MoviesCardTrending></MoviesCardTrending> 
                    </SwiperSlide>
                    <SwiperSlide>
                         <MoviesCardTrending></MoviesCardTrending> 
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Trending