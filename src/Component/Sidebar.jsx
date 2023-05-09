import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import ButtonSetMode from "./Dashboard/ButtonSetMode";
import { data } from "../Data/Icon";
import { ToastContainer, toast } from "react-toastify";
import {RxCountdownTimer} from "react-icons/rx"
// import { Toggle} from "../Data/Toggle";
function Sidebar(props) {
  const navigate = useNavigate();
  const { signOutfn, currenUser } = useStateContext();

  const personalPageHandler = (destinationUrl) => {
    if (!currenUser) {
      toast.info("You need to login to use this feature", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    navigate(destinationUrl);
  };
  return (
    <div className=" max-lg:hidden  flex flex-col  h-full dark:bg-secondary-dark-bg bg-bg  -ml-1 w-1/6  fixed mt-2 top-16  ">
      <div className="pt-12 pl-8 w-full">
        <span className="dark:text-title font-bold font-[Inter]  bg-primary ">
          MENU
        </span>
      </div>

      {data.map((item, index) => {
        return (
          <div key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "linkSideBarActive" : "linkSideBar"
              }
              to={`/${item.name}`}
              key={item.name}
            >
              {item.icon}
              <span className="pl-3">{item.title}</span>
            </NavLink>
          </div>
        );
      })}

      <div className="pt-6   pl-8 w-full">
        <span className="dark:text-title font-bold  font-[Inter]  bg-primary ">
          PERSONAL
        </span>
      </div>
      {/* wacthlist */}
      <button
        className={`${
          location.pathname === "/watchlist"
            ? "linkSideBarActive"
            : "linkSideBar"
        }`}
        onClick={() => personalPageHandler("watchlist")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        Watchlist
      </button>
      {/* RecentPlayed */}
      <button
        className={`${
          location.pathname === "/recent" ? "linkSideBarActive" : "linkSideBar"
        }`}
        onClick={() => personalPageHandler("recent")}
      >
<RxCountdownTimer className="w-6 h-6 mr-3 " ></RxCountdownTimer>
        Recent Played
      </button>
      {/* profile */}
      <button
        className={`${
          location.pathname === "/profile" ? "linkSideBarActive" : "linkSideBar"
        }`}
        onClick={() => personalPageHandler("profile")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-3 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Profile
      </button>
      {!currenUser && (
        <Link className="linkSideBar" to={"/sign"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Login
        </Link>
      )}
      {currenUser && (
        <button className="linkSideBar" onClick={signOutfn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Logout
        </button>
      )}

      {/* button set mode */}
      <div className=" absolute left-6  bottom-20 ">
        <div className=" flex flex-row items-center ">
          <span className=" text-2xl text-fontnormal pr-6 -translate-y-4">
            Mode:
          </span>
          <ButtonSetMode></ButtonSetMode>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Sidebar;
