import React from "react";
import img from "../Data/notext.png";
function PageError(props) {
  return (
    <div>
      <div className=" text-fontactive  text-white min-h-screen flex font-thin z-50 relative ">
        <img className="z-50 absolute -top-20 " src="https://i.ibb.co/hgHQmHF/notext.png" alt="" />
        <div class="z-50 absolute container top-10 pl-[550px] flex flex-row   ">
          <div className="flex flex-col items-center">
            <div class="text-7xl mb-8 font-medium">Oops</div>
            <div class="text-xl md:text-3xl font-medium mb-4">
              The Page Not Fround
            </div>
            <div class="text-lg mb-8">Try an other </div>
            <a href="/" class="border border-white rounded p-4">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageError;
