import React, { useRef } from "react";
//component
import { MoviCardResSize } from "../../Component";

import BannerMovies from "../PageComponent/Movies/BannerMovies";
import MoviesTrending from "../PageComponent/Movies/MoviesTrending";
import MoviesPopular from "../PageComponent/Movies/MoviesPopular";

function Movies(props) {
  return (
    <div className="dark:bg-main-dark-bg w-full min-h-screen h-full">
      <BannerMovies></BannerMovies>

   

      <div className="relative mb-16 mt-12 ">
        <MoviCardResSize></MoviCardResSize>
      </div>

      <h3 className="dark:text-fontactive text-2xl mb-6 ml-9 uppercase ">
        Trending
      </h3>
      <div className=" h-0.5  bg-gradient-to-r from-link via-linkvia to-linkto ml-9 mb-8"></div>
      <div className="mb-16">
        <MoviesTrending></MoviesTrending>
      </div>
      <h3 className="dark:text-fontactive text-2xl mb-6 ml-9 uppercase ">
        Popular
      </h3>
      <div className=" h-0.5  bg-gradient-to-r from-link via-linkvia to-linkto ml-9 mb-8"></div>
      <div className="pb-16">
        <MoviesPopular></MoviesPopular>
      </div>
    </div>
  );
}

export default Movies;
