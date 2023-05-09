import React from "react";
import { useParams } from "react-router";
import CardSimilar from "./CardSimilar";

function WatchMovies() {
  const { moviesId } = useParams();
  console.log(moviesId);
  const embed = `https://www.2embed.to/embed/tmdb/movie?id=${moviesId}`;
  return (
    <div className=" max-lg:left-0  absolute right-0 top-16  max-lg:w-full w-full flex flex-col dark:bg-main-dark-bg">
      <div className="  bg-light-bg dark:bg-main-dark-bg h-[500px] ">
        <iframe
          className=" w-full h-full  mt-3"
          src={embed}
          title="Film Video Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <h3 className="text-3xl mt-10 pl-6 text-fontactive " >Recommendations</h3>
        <div className=" h-0.5 mt-3 bg-gradient-to-r from-link via-linkvia to-linkto ml-6 mb-8"></div>
      </div>
        <CardSimilar></CardSimilar>
    </div>
  );
}

export default WatchMovies;
