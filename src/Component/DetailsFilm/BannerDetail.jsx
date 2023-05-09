import React, { useContext } from "react";
import Actor from "./Actor";
import { useStateContext } from "../../Contexts/ContextProvider";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { useEffect } from "react";
import {NavLink, useLocation } from "react-router-dom";
function BannerDetail(props) {
  const calcTime = (time) => {
    const str = time / 60;
    const hour = Math.floor(str);
    const minute = Math.round(60 * (str - Math.floor(str)));
    return `${hour}h ${minute}m`;
  };
  const dataMovies = props.data;
  const { hanldClose, currenUser } = useStateContext();

  const [btWatchList, setBtWatchList] = useState();

  const [btnActive, setBtnActive] = useState(false);
 
  useEffect(() => {
    if (!currenUser) return;
    const unsub = onSnapshot(
      doc(db, "user", currenUser.uid),
      (doc) => {
        const watchlist = doc.data().watchlist;
        watchlist.forEach((movies) => {
          if (movies.id === dataMovies.id) {
            setBtWatchList(true);
          } else {
            setBtWatchList(false);
          }
        });
      },
      (error) => {
        alert(error);
      }
    );
  }, [btnActive]);

  const handlWatchList = async () => {
    setBtnActive((pre) => !pre);
    await updateDoc(doc(db, "user", currenUser.uid), {
      watchlist: !btWatchList
        ? arrayUnion({
            poster: dataMovies.poster_path,
            title: dataMovies.title,
            id: dataMovies.id,
          })
        : arrayRemove({
            poster: dataMovies.poster_path,
            title: dataMovies.title,
            id: dataMovies.id,
          }),
    });
  };

  return (
    <div className="relative  ">
      <img
        className="w-screen z-10  contrast-125 h-[110vh]  -mt-20 "
        src={`https://image.tmdb.org/t/p/original${props.bg}`}
        alt=""
      />
      <div className="text-fontactive flex flex-col justify-start absolute bottom-28  left-28  z-20">
        <h2 className="text-5xl mb-8 ">{props.title}</h2>
        <p className="text-lg w-1/2 mb-4">{props.brfie}</p>
        <div className="flex flex-row text-fontnormal text-lg">
          <p className="  mb-4">{calcTime(props.runtime)} </p>
          {props.gentes?.map((i, ix) => {
            return (
              <div className="ml-1" key={ix}>
                | {i.name}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row">
          <NavLink
            to={`/watch/${dataMovies.id}`}
            className=" bg-link rounded-lg hover:opacity-80 py-3  text-xl w-40  flex flex-row items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6 fill-light ml-4 mr-2 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
            Play Now
          </NavLink>
          <button
            onClick={() => {
              hanldClose();
            }}
            className=" bg-fontnormal bg-opacity-50 rounded-lg  py-3  text-xl w-36  ml-6  "
          >
            Trailer
          </button>

          <button
            onClick={() => handlWatchList()}
            className={` ${
              btWatchList && "border-link"
            }  rounded-full hover:border-link transition duration-300 group  h-11 w-11  border-[3px] border-white absolute bottom-[2px] left-[350px]  max-lg:bottom-[66px] max-lg:text-base `}
          >
            <AiFillHeart
              className={` ${
                btWatchList && "fill-link"
              }  group-hover:fill-link transition duration-300 h-10 w-8 inline-block "></AiFillHeart `}
            />
          </button>
        </div>
      </div>
      <div>
        <div className="absolute bottom-16  right-32  text-fontactive z-50">
          <h3 className="text-2xl mb-4">Actors</h3>
          <Actor id={props.id}></Actor>
        </div>

        {/* Background */}

        <div className="  bottom-0 absolute bg-gradient-to-t h-1/2 w-full from-tobg via-viabg to-frombg z-10 "></div>
      </div>
    </div>
  );
}

export default BannerDetail;
