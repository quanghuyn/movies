import React from "react";
import Genres from "./Genres";
import SearchMovies from "./SearchMovies";
import FilterRunTime from "./FilterRunTime";
import FilterDate from "./FilterDate";
function SideBar(props) {
  return (
    <div className=" dark:bg-textlight w-[320px] max-lg:absolute  max-lg:w-full right-0 pl-6 pt-6 top-20 fixed rounded-lg ">
      <h3 className="dark:text-fontactive text-xl pr-4 ">Find Your Movies</h3>
      <SearchMovies></SearchMovies>
      <p className="dark:text-fontactive text-xl pt-6 mb-4">Genres</p>
      <div className="  content-start ml-4 h-60 overflow-y-scroll scrollGenres ">
        <Genres></Genres>
      </div>
      <div>
        <FilterRunTime></FilterRunTime>
      </div>
      <div>
        <FilterDate></FilterDate>
      </div>
    </div>
  );
}

export default SideBar;
