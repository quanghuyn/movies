import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

//component
import {BannerMovies,MoviesPopular,CardResSize,MoviesTrending} from "../../Component/"
function Movies(props) {
  const [parent] = useAutoAnimate();
  return (
    <div   ref={parent} className="dark:bg-main-dark-bg w-full min-h-screen h-full">
    <div className="mt-10">
      <BannerMovies></BannerMovies>

    </div>
      <div className="relative mb-16 mt-12 ">
        <CardResSize></CardResSize>
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
