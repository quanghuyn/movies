import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import {Spinner,MoviesCard} from "../../Component";


function TopRated(props) {
  const Page = new Array(10).fill(null)
  console.log(Page);
  const pageRef = useRef(null)
  const [page,setPage] = useState(1)
  const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=${page}`;
  const { data, error, isLoading } = useSWR(api, fetcher);
  const [dataTopRated, setDataTopRate] = useState([]);
  useEffect(() => {

    data && setDataTopRate(() => data.results);
  }, [data,page]);

   const handlPage = (e) => {
    setPage(e.target.textContent);
    //  setPage(e.target.value)
    //  console.log(page);
    } 
 
  return (
    <div className="bg-main-dark-bg -ml-1 min-h-screen " >
       <div className=" pt-14 pl-16 grid grid-cols-3 gap-10     ">
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          dataTopRated &&
          dataTopRated.map((item) => {
            return (
              <MoviesCard
                key={item.id}
                bg={item.poster_path}
                title={item.title}
                releasedate={item.release_date}
                voteaverage={item.vote_average}
              ></MoviesCard>
            );
          })
        )}
      </div>
      <div className="text-link ml-20 mt-14 pb-14 flex flex-row gap-8 content-center justify-center ">
          {Page.map((i,index) => { return(
              
              <span key={index} onClick={(e) => handlPage(e)} 
                className="cursor-pointer bg-title bg-opacity-5  text-xl px-2 py-0.5 rounded-sm" >
                {index +1}</span>
              
          )})} 
      </div> 

    </div>
  );
}

export default TopRated;
TopRated;
