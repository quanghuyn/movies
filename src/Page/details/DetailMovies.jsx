import React, { useEffect, useState } from "react";
import { BannerDetail, Trailer,DetailsLoad} from "../../Component";
import { useParams } from "react-router";

import { fetcher } from "../../config";
import useSWR from "swr";


function DetailMovies(props) {
  const { moviesId } = useParams();



  const apiDetail = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US`;
  const { data, isLoading, error } = useSWR(apiDetail, fetcher);
  console.log(data,isLoading);
  data && data.backdrop_path == null ? (window.location = "/error") : null;
  error ? (window.location = "/error") : null;
  // console.log(data,isLoading,error);
  return (
    <>
      <div  className="dark:bg-main-dark-bg w-full min-h-screen" >
        {/* {!data && <div className="dark:bg-main-dark-bg w-full h-screen" ></div>} */}
       {isLoading && <DetailsLoad></DetailsLoad>} 
        {data && (
          <BannerDetail
            data = {data}
            bg={data.belongs_to_collection?.backdrop_path || data.backdrop_path}
            brfie={data.overview}
            title={data.original_title}
            gentes={data.genres}
            runtime={data.runtime}
            id={data.id}
          ></BannerDetail>
        )}
        {data &&
        <Trailer
           id ={data.id} 
        ></Trailer> } 
      </div>
    </>
  );
}

export default DetailMovies;
