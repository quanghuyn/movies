import React, { useEffect, useState } from "react";
import { Skeleton, MoviesCard } from "../../Component";
import { useStateContext } from "../../Contexts/ContextProvider";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

function WatchList() {
  const load = new Array(6).fill(null)
  const [moviesItem, setMoviesItem] = useState();
  const [loading, setLoading] = useState();
  const { currenUser } = useStateContext();

  useEffect(() => {
    setLoading(true)
    if (!currenUser) return;
    const unsub = onSnapshot(
      doc(db, "user", currenUser.uid),
      (doc) => {
        setMoviesItem(doc.data()?.watchlist);
      setLoading(false)

      },
      (error) => {
        alert(error);
      }
    );
  }, [currenUser]);

  return (
    <div className="absolute lg:right-0 mt-10 lg:w-5/6 view ">
      <div className="dark:bg-main-dark-bg -ml-1 min-h-screen   ">
        <div className=" max-sm:grid-cols-1  pt-14 pl-6 grid grid-cols-3 gap-8 pr-8  max-sm:mr-6  ">
          {loading && load.map(() => {return  <div className="flex flex-col ">
            <Skeleton className='w-[370px] h-[340px] mb-4 '> 
            </Skeleton>
            <Skeleton className='w-[370px] h-[50px]' ></Skeleton>
          </div> })}
          {moviesItem &&
            moviesItem.map((item, ix) => {
              return (
                <MoviesCard
                  key={item.id}
                  bg={item.poster}
                  id={item.id}
                  title={item.title}
                ></MoviesCard>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
