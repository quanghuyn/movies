import React from "react";
import BannerTV from "../PageComponent/TVSeries/BannerTv";
import TvTrending from "../PageComponent/TVSeries/TvTrending";
import TvPopular from "../PageComponent/TVSeries/TvPopular";
import TvCardResSize from "../PageComponent/TVSeries/TvCardResSize";

function TvSeries(props) {
  return (
    <div className="dark:bg-main-dark-bg w-full min-h-screen h-full">
      <BannerTV></BannerTV>
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
