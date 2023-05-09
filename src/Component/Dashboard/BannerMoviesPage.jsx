import React from "react";
import { BsFillPlayFill, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Poster, Backdrop } from "../../config";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BannerMoviesPage(props) {
  return (
    <Link  
    to={`${props.to ? '/tvseries/':'/moviesdetail/'}${props.id}`} className=" text-fontactive dark:bg-main-dark-bg h-full z-50   ">
      <div className="  mb-7">
        <div className="relative w-full h-[500px] flex flex-col">
          <div  className="flex mx-auto cursor-pointer  w-full h-full   contrast-125 ">
            <div className="  absolute  bg-gradient-to-r h-full w-1/3 from-tobg via-viabg to-frombg  "></div>
            {/* img desktop */}
            <LazyLoadImage
              className=" max-lg:hidden  w-full object-center h-full "
              src={`${Backdrop}${props.bg}`}
              alt=""
            />

            <LazyLoadImage
              className="  w-full h-full bg-no-repeat object-cover  lg:hidden "
              src={`${Poster}${props.bgSecond}`}
              alt=""
            />
            {/* img mobi&tab  */}
          </div>
        <div className="  bottom-0 absolute bg-gradient-to-t h-1/4 w-full from-tobg via-viabg to-frombg z-10 "></div>

          <div className=" flex flex-col max-sm:hidden  ">
            <div className=" absolute bottom-[100px]  left-[40px] ">
              <div>
                <p className="text-4xl max-lg:text-3xl font-bold mb-4 w-56 ">
                  {props.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BannerMoviesPage;
