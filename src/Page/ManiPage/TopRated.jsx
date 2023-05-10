import React, { useEffect, useState } from "react";
import { Spinner, MoviesCard } from "../../Component";
import scrollTo from "gatsby-plugin-smoothscroll";
import { useFetch } from "../../Hooks/useFetch";
import { motion } from "framer-motion";

function TopRated(props) {
  const Page = new Array(10).fill(null);
  const [page, setPage] = useState(1);
  const { dataFetch, isLoading, error } = useFetch("top_rated", page);
  error ? (window.location = "/error") : null;
  const handlPage = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        // transition: { duration: 0.1 },
        opacity: 0.1,
      }}
      className="absolute lg:right-0 mt-10 lg:w-5/6 view "
    >
      <div className="dark:bg-main-dark-bg -ml-1 min-h-screen   ">
        <div className=" max-sm:grid-cols-1  pt-14 pl-6 grid grid-cols-3 gap-8 pr-8  max-sm:mr-6  ">
          {isLoading ? (
            <Spinner></Spinner>
          ) : (
            dataFetch &&
            dataFetch.map((item) => {
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
    </motion.div>
  );
}

export default TopRated;
TopRated;
