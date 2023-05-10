import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import {
  BannerTv,
  TvTrending,
  TvPopular,
  TvCardResSize,
} from "../../Component/";
import { motion } from 'framer-motion';

function TvSeries(props) {
  const [show] = useAutoAnimate();

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.2 },
        // backgroundColor: "black",
        opacity: 0,
      }}
      ref={show}
      className="dark:bg-main-dark-bg w-full min-h-screen h-full"
    >
      <BannerTv></BannerTv>
      <TvCardResSize></TvCardResSize>
      <h3 className="dark:text-fontactive text-2xl mb-6 ml-9 uppercase ">
        Trending
      </h3>
      <div className=" h-0.5  bg-gradient-to-r from-link via-linkvia to-linkto ml-9 mb-8"></div>
      <div className="mb-16">
        <TvTrending></TvTrending>
      </div>

      <div className="pb-16">
        <TvPopular></TvPopular>
      </div>
    </motion.div>
  );
}

export default TvSeries;
