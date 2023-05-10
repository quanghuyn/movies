import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from 'framer-motion';

//component
import {BannerMovies,MoviesPopular,CardResSize,MoviesTrending} from "../../Component/"
function Movies(props) {
  const [parent] = useAutoAnimate();
  return (
    <motion.div
      initial={{width:0,opacity:0 }}
      animate ={{width:"100%", opacity:1 }}
      exit={{x:window.innerWidth, transition:{duration:0.2},backgroundColor:"black",opacity:0 }}
     ref={parent} className="dark:bg-main-dark-bg w-full min-h-screen h-full">
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
    </motion.div>
  );
}

export default Movies;
