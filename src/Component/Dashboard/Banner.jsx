import React from "react";
import { BsFillPlayFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Poster, Backdrop } from "../../config";

import { LazyLoadImage } from "react-lazy-load-image-component";

function Banner(props) {
  return (
    <div className=" text-fontactive dark:bg-main-dark-bg h-full pt-16 ">
      <div className=" mt-6 mb-7">
        <div className="relative  w-full h-[400px] flex flex-col">
          <Link
            to={`/moviesdetail/${props.id}`}
            className="flex mx-auto  w-full h-full   contrast-125 "
          >
            {/* img desktop */}
            <div className="  absolute  bg-gradient-to-r h-full w-1/3 dark:from-tobg via-viabg to-frombg  "></div>
            <img
              className=" max-lg:hidden  w-full object-cover h-full   bg-gradient-to-r from-fontnormal dark:to-title "
              src={`${Backdrop}${props.bg}`}
              alt=""
            />

            <img
              className="  w-full h-full bg-no-repeat object-cover  lg:hidden "
              src={`${Poster}${props.bgSecond}`}
              alt=""
            />
            {/* img mobi&tab  */}
          </Link>
          <div className=" flex flex-col max-sm:hidden  ">
            <div className=" absolute bottom-[137px]  left-[40px] ">
              <div>
                <p className="text-4xl max-lg:text-3xl font-bold mb-4 text-fontactive  ">
                  {props.title}
                </p>
              </div>
              <span className=" uppercase  max-lg:text-m font-normal text-fontnormal">
                {props.lang}
              </span>
            </div>
            <Link
              to={`/moviesdetail/${props.id}`}
              className=" transition hover:scale-110 ease-in-out cursor-pointer absolute bottom-[50px] left-[40px] max-lg:bottom-[60px] z-50 "
            >
              <button className="bg-link rounded-full text-xl  py-3  px-5 font-semibold  max-lg:py-2 max-lg:px-3 z-50 ">
                <BsFillPlayFill className="inline-block mb-0.5 mr-2 max-lg:text-base"></BsFillPlayFill>
                Watch Trailer
              </button>
            </Link>
            <button className="hover:bg-viabg pl-1 hover:rounded-full absolute bottom-[60px] left-[258px] text-xl max-lg:bottom-[66px] max-lg:text-base ">
              <BsHeart className=" h-7 inline-block mr-2"></BsHeart>
              Add Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
