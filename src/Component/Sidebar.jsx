import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import ButtonSetMode from "./Dashboard/ButtonSetMode";
import { data, dataPersonal } from "../Data/Icon";
import { ToastContainer, toast } from "react-toastify";
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3"
        >
          <path
            d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.84 16.41 5.25 12 5.25Z"
            fill="#78828A"
          />
          <path
            d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
            fill="#78828A"
          />
          <path
            d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
            fill="#78828A"
          />
        </svg>
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
