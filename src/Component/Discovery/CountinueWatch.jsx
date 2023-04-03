import React, { useEffect, useState } from 'react';
import MoviesCard from './MoviesCard';
import {Swiper,SwiperSlide} from 'swiper/react'
import useSWR from 'swr'
import 'swiper/css'
import { fetcher } from '../../config'
import Spinner from './Spinner'
import { Link, NavLink } from 'react-router-dom';
function CountinueWatch(props) {
    const { data, error, isLoading } = useSWR(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=3'
        , fetcher)

    const [dataMovies,setDataMovies] =useState([])
    
    useEffect(()=> {
        data && setDataMovies(() => data.results)
    },[data])
    console.log(dataMovies)
    console.log(data);
    
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US
    return (
            <div className='movies-list '>
            <Swiper grabCursor ={"true"}  spaceBetween={20} slidesPerView={"auto"}>
                    {dataMovies.map(item =>{ return(
                        <SwiperSlide key={item.title}>
                         {isLoading ? <Spinner></Spinner> :
                                <MoviesCard
                                bg={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                title={item.id}
                                releasedate={item.release_date}
                                voteaverage={item.vote_average}
                                >
                            </MoviesCard>
                         }
                        </SwiperSlide>
                    )})}
               
              
            </Swiper>
            </div>

    );
}

export default CountinueWatch;