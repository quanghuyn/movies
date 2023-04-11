import React, { useEffect, useState } from 'react';
import { MoviesCardComingSoon,MoviesCardHome, Spinner,MoviesCardSideBar } from '../../Component';

//libary
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { fetcher } from "../../config";
import useSWR from "swr";

const apiComingSoon ='https://api.themoviedb.org/3/movie/upcoming?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1'
const apiComingYear ='https://api.themoviedb.org/3/movie/upcoming?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=2'

function Trending(props) {

    const [dataComing,setDataComing] = useState([])
    const [dataOnYear,setDataOnYear]  = useState([])
    const {data}  = useSWR(apiComingSoon,fetcher) 
    const {data:comingYear}  = useSWR(apiComingYear,fetcher) 
    
    useEffect(()=>{
        data && setDataComing(data.results)
        comingYear && setDataOnYear(comingYear.results)
    },[data,comingYear])
    console.log(dataComing);


    return (
        // <div className=' absolute  right-1 w-5/6 pt-20 h-fit bg-main-dark-bg ml-8 ' >
        //     <div className='ml-8'>
        <div className=' max-lg:left-0  absolute right-0 h-fit max-lg:w-full w-5/6  select-none' >
        <div className='bg-main-dark-bg   lg:-ml-1 lg:pl-6  pb-10 ' >
               
                <h2 className='text-fontactive text-2xl font-medium mt-8 mb-8' >Coming Soon</h2>
              {dataComing ? null :<Spinner></Spinner>}
            <div className='movies-commingsoon'>

                <Swiper  grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
                        {dataComing ? dataComing.map(i => { return(
                            <SwiperSlide key={i.id}>
                                  <MoviesCardComingSoon
                                        title ={i.title}
                                        img ={i.backdrop_path}
                                      
                                        date = {i.release_date}
                                    ></MoviesCardComingSoon> 
                           </SwiperSlide>
                        )})
                        : <Spinner></Spinner> }
                     
                  
                </Swiper>

            </div>
                <h3 className='text-fontactive text-2xl font-medium mt-8 mb-8 max-sm:pl-10  ' >On 2023</h3>

            <div className=' movies-list'>
                
                <Swiper  grabCursor={"true"} spaceBetween={20} slidesPerView={"auto"}>
                         {dataOnYear ? dataOnYear.map(i => { return(
                            <SwiperSlide key={i.id}>
                                    <MoviesCardHome

                                        title ={i.title}
                                        bg ={i.poster_path}
                                      
                                        releasedate = {i.release_date }
                                    ></MoviesCardHome>
                           </SwiperSlide>
                          )})
                             : <Spinner></Spinner> }
                </Swiper>
            </div>                

            </div>

        </div>
    );
}

export default Trending