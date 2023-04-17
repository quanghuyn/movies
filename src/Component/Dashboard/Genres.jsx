import React from "react";
import { Link } from "react-router-dom";

function Genres(props) {
  return (
    <div className="pl-4 pt-8   ">
            <Link
        to={"/toprated"}
        className="mb-6  mx-4 grid justify-items-center px-20 border rounded-full py-2 border-link text-link text-lg   "
      >
        See All
      </Link>
      <div className="text-2xl font-medium mb-6 ">Favorites Genres</div>
      <div className="  content-start ml-4 ">
        <button className="hover:scale-110 mb-4 mr-4 dark:bg-secondary-dark-bg bg-sc-bglight rounded-full  w-fit px-4 pt-1 pb-2 text-lg transition hover:duration-700 ease-in-out ">
          Action
        </button>

      </div>
    </div>
  );
}

export default Genres;
