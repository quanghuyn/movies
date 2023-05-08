import React from "react";
import { GoogleButton } from "react-google-button";
import { useStateContext } from "../../Contexts/ContextProvider";
import { Google } from "../../Data/Icon";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
function SignIn() {
  const { ggSignIn, fbSignIn, currenUser, setIsShowSignInBox } =
    useStateContext();
    console.log(currenUser);
  const handlGoogleSignIn = async () => {
    try {
      await ggSignIn();
      
    } catch (error) {
      console.log(error);
    }
  };

  const handlFbSignIn = async () => {
    try {
      await fbSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <h2 className="text-4xl w-[500px] dark:text-fontactive font-bold mb-10 text-center ">
        Hey there, welcome back
      </h2>
      <div
        onClick={handlGoogleSignIn}
        className=" cursor-pointer flex flex-row gap-5 w-full bg-dark-lighten rounded-full justify-center py-2 mb-7 "
      >
        <Google></Google>
        <button className="dark:text-fontactive text-xl">
          Login with Google
        </button>
      </div>
      <div
        onClick={handlFbSignIn}
        className=" cursor-pointer flex flex-row gap-5 w-full bg-dark-lighten rounded-full justify-center py-2 mb-7 "
      >
        <FaFacebookF className="text-[#19A7CE] mt-1"></FaFacebookF>
        <button className="dark:text-fontactive text-xl">
          Login with Google
        </button>
      </div>
      <span className=" block text-center dark:text-fontnormal mb-8 ">
        Or login with
      </span>
      {/* form */}
      <form>
        <span className="dark:text-fontnormal ">Email</span>
        <div className="relative mb-6 pt-2">
          <input
            // ref={emailRef}
            name="email"
            id="email"
            type="email"
            placeholder=" Enter Your Email"
            className="w-full text-light dark:bg-secondary-dark-bg px-5 py-3 pr-12 rounded-full outline-none peer text-white border dark:border-dark-lighten"
          />
          <AiOutlineMail
            size={25}
            className="absolute top-1/2 -translate-y-1/2 right-4 dark:text-light"
          />
        </div>
        <span className="text-fontnormal ">Password</span>

        <div className="relative mb-12 pt-2">
          <input
            // ref={passwordRef}
            name="password"
            id="password"
            type="password"
            placeholder=" Enter Your Password"
            className=" dark:text-light w-full dark:bg-secondary-dark-bg px-5 py-3 pr-12 rounded-full outline-none peer text-white border dark:border-dark-lighten "
          />

          <RiLockPasswordLine
            size={25}
            className="absolute top-1/2 -translate-y-1/2 right-4 dark:text-light"
          />
        </div>
        <button className="px-12 py-3 bg-link rounded-full text-lg text-white uppercase absolute left-1/2 -translate-x-1/2 hover:bg-active transition duration-300">
          Sign In
        </button>
      </form>

      <p className="text-xl flex gap-2 mt-32 justify-center text-fontnormal ">
        <span>Do not have an account?</span>
        <button
          onClick={() => setIsShowSignInBox(false)}
          className="text-link font-bold underline"
        >
          Register
        </button>
      </p>
    </div>
  );
}

export default SignIn;
