import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../Data/logo.png";
import { useStateContext } from "../Contexts/ContextProvider";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
const data = [
  {
    name: "Movies",
    to: "movies",
  },
  {
    name: "TV",
    to: "tvseries",
  },
  {
    name: "Animation",
    to: "animation",
  },
  {
    name: "Genres",
    to: "geners",
  },
];

function Navbar(props) {
  const location = useLocation();
  const pathname = location.pathname.slice(0, 14);
  const { open, setOpen, currenUser } = useStateContext();
  const name = currenUser?.displayName || "Anonymously";
  const { setkey } = useStateContext();
  const [img, setImg] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currenUser) return;
    const unsub = onSnapshot(doc(db, "user", currenUser?.uid), (doc) => {
      setImg(doc.data().photoURL);
    });
  }, [currenUser]);
  const url = currenUser ? img : "https://i.ibb.co/stB42Nb/catface-5.jpg";
  // const url =  img  ||  currenUser?.photoURL ||   "https://i.ibb.co/stB42Nb/catface-5.jpg"
  const handlSearch = (e) => {
    setTimeout(() => {
      document.addEventListener('keydown', function(){navigate("/discovery") } )
      setkey(e);
    }, 1000);
  };
  const handlClose = () => {
    setOpen(() => !open);
  };

  return (
    <nav
      className={pathname === `/moviesdetail/` ? "navbarLocation  " : "navbar"}
    >
      {/* PC CSS */}
      <NavLink
        to={"/"}
        className=" flex font-bold text-2xl items-center ml-14 w-3/12  max-lg:hidden "
      >
        {" "}
        Cinemax{" "}
      </NavLink>

      <div className="flex justify-around   gap-4 max-w-[347px] content-center ml-10 mr-11 w-3/12 max-lg:hidden ">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex items-center">
              <NavLink
                className={({ isActive }) => (isActive ? "linkActive" : "link")}
                to={`/${item.to}`}
              >
                {item.name}
              </NavLink>
            </div>
          );
        })}
      </div>
      {/* search */}
      <div className=" flex items-center pt-2 ml-16  w-2/12 ">
        <input
          onChange={(e) => handlSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className=" bg-opacity-10 max-sm:hidden  max-lg:ml-20  pl-3 pb-1 placeholder:text-fontnormal  focus:outline-none text-opacity-60 dark:bg-main-dark-bg h-7 rounded-full w-30  border border-fontnormal"
        />
        <Link type="submit" className="" to={"discovery"}>
          <svg
            className="ml-3 max-lg:hidden"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.739 0C15.109 0 19.477 4.368 19.477 9.738C19.477 12.2715 18.5047 14.5823 16.9136 16.3165L20.0444 19.4407C20.3374 19.7337 20.3384 20.2077 20.0454 20.5007C19.8994 20.6487 19.7064 20.7217 19.5144 20.7217C19.3234 20.7217 19.1314 20.6487 18.9844 20.5027L15.8159 17.343C14.1491 18.6778 12.0357 19.477 9.739 19.477C4.369 19.477 0 15.108 0 9.738C0 4.368 4.369 0 9.739 0ZM9.739 1.5C5.196 1.5 1.5 5.195 1.5 9.738C1.5 14.281 5.196 17.977 9.739 17.977C14.281 17.977 17.977 14.281 17.977 9.738C17.977 5.195 14.281 1.5 9.739 1.5Z"
              fill="#F9F9F9"
            />
          </svg>
        </Link>
      </div>
      {/* Sub */}
      <div className="flex items-center w-1/12 max-lg:hidden max-lg:right-32 max-lg:top-3 max-sm:right-40  max-sm:mr-4 ml-10 ">
        <button className="bg-link rounded-full text-xl  pt-2 pb-2  pl-5 pr-5 ml-16 font-semibold text-fontactive">
          Subscribe
        </button>
      </div>

      <div className="flex items-center ml-28  w-2/12 max-lg:hidden ">
        <NavLink to={"/profile"} className="flex flex-row items-center">
          <img src={`${url}`} className="w-10 h-10 rounded-full" alt="Avatar" />
          <p className=" pl-3">{name}</p>
        </NavLink>
      </div>

      {/* Mobi & Tab css */}
      {/* logo */}
      <Link to={"/"}>
        <img
          className="absolute w-32 left-0 -top-3 lg:hidden "
          src={logo}
          alt=""
        />
      </Link>
      {/* menu icon */}
      <div className={`absolute right-0 top-3 lg:hidden ${open ? 'hidden' : null}`}>
        <svg
          onClick={(e) => handlClose(e)}
          className="w-10 h-10 mr-4 "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className={`absolute right-0 top-3 lg:hidden ${open ? null : 'hidden'}`}>
        <svg
        onClick={(e) => handlClose(e)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-16 h-11"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <Outlet />
    </nav>
  );
}

export default Navbar;
