import React from 'react';
import {SignIn} from "../../Component"
import Register from '../../Component/Auth/Register';
import { useStateContext } from '../../Contexts/ContextProvider';
function SignInPage(props) {
  const {  isShowSign, setIsShowSignInBox } =
  useStateContext();
    return (
        <div className='' >
        <video
            autoPlay
            muted
            loop
            id="myVideo"
            className=" fixed md:-top-[130px] -translate-y-4 object-cover left-0 h-[135vh] w-1/2 z-50"
          >
            <source
              src="https://raw.githubusercontent.com/fuocy/video/master/endgame.mp4"
              type="video/mp4"
            />
          </video>
        <div className='h-full w-1/2 bg-main-dark-bg z-40 absolute ' ></div>
        <div className='h-full w-1/2 bg-main-dark-bg z-50 absolute opacity-60' ></div>
        <div className="md:bg-black/80 bg-main-dark-bg min-h-screen  w-1/2 absolute right-0 z-50">
        <div className='flex justify-center items-center w-full h-[700px] '>
           {isShowSign && <SignIn></SignIn> }
           {!isShowSign && <Register></Register> }
        </div>
        </div>
        
      </div>
    );
}

export default SignInPage;
