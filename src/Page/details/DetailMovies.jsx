import React, { useEffect, useState } from 'react';
import {BannerDetail,MoviesCardDetail, Spinner,DetailsLoad  } from '../../Component';

import { fetcher } from "../../config";
import useSWR from "swr";
import { useParams } from 'react-router';

function DetailMovies(props) {
    const {moviesId} = useParams()
    const apiDetail = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US`
    const {data,isLoading}  = useSWR(apiDetail,fetcher)
    data && data.backdrop_path == null ? window.location = '/error' : null
    console.log(data);
    return (
        <>
            <div>
                {isLoading && <DetailsLoad></DetailsLoad>}
                { data && <BannerDetail
                    bg ={data.backdrop_path  }
                    brfie ={data.overview}
                    title ={data.original_title}
                    gentes ={data.genres}
                    runtime ={data.runtime}
                    id = {data.id}
                 ></BannerDetail> }
            </div>
        </>
    );
}

export default DetailMovies;