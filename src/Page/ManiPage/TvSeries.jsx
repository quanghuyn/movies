import React from "react";

import {BannerTv,TvTrending,TvPopular,TvCardResSize} from "../../Component/"

function TvSeries(props) {
  return (
    <div className="dark:bg-main-dark-bg w-full min-h-screen h-full">
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
    </div>
  );
}

export default TvSeries;
