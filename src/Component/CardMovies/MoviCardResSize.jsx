import React, { useEffect, useRef } from "react";

function MoviCardResSize(props) {
  const ref = useRef(null);
  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }
  return (
    <div className="">
      <div className=" cards scrollbar " ref={ref}>
        <button className="icon_right" onClick={() => scroll(320)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button className="icon_left" onClick={() => scroll(-320)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <a className=" card" href="">
          <img
            className="poster"
            src="https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
            alt=""
          />

          <div className="rest_card">
            {/* <video src="https://youtu.be/vVgMqtCW_Dw"></video> */}
            <img
              className=""
              src="	https://image.tmdb.org/t/p/w500/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg"
              alt=""
            />
            <div className="cont">
              <p>Action 2023</p>
              <h3>IBM</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default MoviCardResSize;
