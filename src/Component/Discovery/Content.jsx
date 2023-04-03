import React, { useEffect, useState } from 'react';
import MoviesCard2 from './MoviesCard2';
import { fetcher } from '../../config'
import useSWR from 'swr'
function ContentSideBar(props) {
    const {data,error,isLoading} = useSWR('https://api.themoviedb.org/3/movie/top_rated?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1'
    ,fetcher)

    const [dataMovies,setDataMovies] = useState([])
    useEffect(()=> {
        setDataMovies(()=> data?.results)
    },[data])


    console.log(data);

    return (
        <div className='w-full'>
            {dataMovies?.map((item)=> {return(
                <MoviesCard2 
                    key={item.id} 
                    bg={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                title={item.title}
                                releasedate={item.release_date}
                                voteaverage={item.vote_average}
                ></MoviesCard2>
            )})}
            <MoviesCard2

            ></MoviesCard2>
        </div>
    );
}

export default ContentSideBar