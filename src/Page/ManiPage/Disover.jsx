import React, { useEffect, useState } from "react";
import {  MoviesCardDiscover, Skeleton } from "../../Component";
import SideBar from "../../Component/DiscoverySideBar/SideBar";
import { useSearchParams } from "react-router-dom";
import {  fetcher,  getExploreMovie } from "../../config";
import { useQuery } from "@tanstack/react-query";
import scrollTo from "gatsby-plugin-smoothscroll";
import useSWR from "swr";
import { useStateContext } from "../../Contexts/ContextProvider";
import { motion } from "framer-motion";

function Disover(props) {
  const load = new Array(6).fill(null)
  const {key} =useStateContext()
  const numPage = new Array(10).fill(null);
  const [config, setConfig] = useState({ with_genres: "" });
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const apiKey = `https://api.themoviedb.org/3/search/movie?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&query=${key}&page=${page}&include_adult=false`
  const { data, error,isLoading } = useQuery(
    ["explore-result-movie", page, config],
    getExploreMovie(config)
  );

  const {data:dataSearch} = useSWR(apiKey,fetcher)
  const dataRender = dataSearch?.results == '' ?  data?.results : dataSearch?.results 
  useEffect(() => {
    const changeConfig = (key, value) => {
      setConfig((pre) => ({
        ...pre,
        [key]: value,
      }));
    };
    const genreType = searchParams.getAll("genre") || [];
    changeConfig("with_genres", genreType.toString());

    const minRuntime = Number(searchParams.get("minRuntime")) || 0;
    const maxRuntime = Number(searchParams.get("maxRuntime")) || 200;
    changeConfig("with_runtime.gte", minRuntime);
    changeConfig("with_runtime.lte", maxRuntime);
    const releaseFrom = searchParams.get("from") || "2002-11-04";
    const releaseTo = searchParams.get("to") || "2023-07-28";
    changeConfig("primary_release_date.gte", releaseFrom);
    changeConfig("primary_release_date.lte", releaseTo);
  }, [window.location.search]);

  function handlPage(e) {
    setPage(e.target.textContent);
  }

  return (
    <motion.div
    initial={{opacity: 0.1 }}
    animate={{opacity: 1 }}
    exit={{
      // transition: { duration: 0.4 },
      opacity: 0.1,
    }}
     className=" dark:bg-main-dark-bg flex flex-row  w-full max-lg:h-[5700px] h-[3500px]">
      <div className=" w-7/12 max-lg:w-full max-lg:top-[800px]  absolute left-1/4 -translate-x-[117px] max-xl:-translate-x-[90px] dark:bg-main-dark-bg  top-16 pl-6 mt-6 max-lg:left-20 ">
        <h3 className="dark:text-fontactive text-2xl pr-4 "></h3>
        <div className=" grid max-xl:grid-cols-2  grid-cols-3  gap-5 hover:transition-none">
          {isLoading &&  load.map((i,ix) => {return  <div key={ix} className="flex flex-col ">
            <Skeleton className='w-[280px] h-[340px] mb-4 '> 
            </Skeleton>
            <Skeleton className='w-[280px] h-[50px]' ></Skeleton>
          </div> })  }
          {data &&
            dataRender?.map((item, ix) => {
              if (item === undefined) {
                return;
              } else {
                return (
                  <MoviesCardDiscover
                    key={item.id}
                    bg={item.poster_path}
                    title={item.title}
                    id={item.id}
                  ></MoviesCardDiscover>
                );
              }
            })}
        </div>
        {/* Page */}
        <div className=" text-link absolute -bottom-16 flex flex-row gap-7 justify-center mx-auto  h-8 w-full mb-2 ml-20 ">
          { dataRender && numPage.map((i, index) => {
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
      {/* content side bar */}
      <SideBar></SideBar>
    </motion.div>
  );
}

export default Disover;
