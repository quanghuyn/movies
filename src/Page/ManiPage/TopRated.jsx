import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import { Spinner, MoviesCard } from "../../Component";
import scrollTo from "gatsby-plugin-smoothscroll";

function TopRated(props) {
  const Page = new Array(10).fill(null);
  const pageRef = useRef(null);
  const [page, setPage] = useState(1);
  const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=${page}`;
  const { data, error, isLoading } = useSWR(api, fetcher);
  const [dataTopRated, setDataTopRate] = useState([]);
  error ? (window.location = "/error") : null;

  useEffect(() => {
    data && setDataTopRate(() => data.results);
  }, [data, page]);

  // get api for num page
  const handlPage = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <div className="absolute lg:right-0 mt-10 lg:w-5/6 view ">
      <div className="bg-main-dark-bg -ml-1 min-h-screen   ">
        {/* <h3 className="text-fontactive mt-8 top-10 " >Top Rated</h3> */}
        <div className=" max-sm:grid-cols-1  pt-14 pl-8 grid grid-cols-3 gap-8 pr-8  max-sm:mr-6  ">
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
                  id={item.id}
                ></MoviesCard>
              );
            })
          )}
        </div>
        <div className="text-link ml-20 mt-14 pb-12 flex flex-row gap-8 content-center justify-center ">
          {Page.map((i, index) => {
            return (
              <span
                key={index}
                onClick={(e) => {
                  scrollTo("#root");
                  return handlPage(e);
                }}
                className=" transition-all hover:duration-700 ease-in-out  hover:scale-110 cursor-pointer bg-title bg-opacity-5  text-xl px-2 py-0.5 rounded-sm"
              >
                {index + 1}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopRated;
TopRated;
