import React, { useEffect, useState } from "react";
import { Skeleton, MoviesCard } from "../../Component";
import { useStateContext } from "../../Contexts/ContextProvider";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { motion } from "framer-motion";

function WatchList() {
  const load = new Array(6).fill(null);
  const [moviesItem, setMoviesItem] = useState();
  const [loading, setLoading] = useState();
  const { currenUser } = useStateContext();

  useEffect(() => {
    setLoading(true);
    if (!currenUser) return;
    const unsub = onSnapshot(
      doc(db, "user", currenUser.uid),
      (doc) => {
        setMoviesItem(doc.data()?.watchlist);
        setLoading(false);
      },
      (error) => {
        alert(error);
      }
    );
  }, [currenUser]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{
      // transition: { duration: 0.1 },
      opacity: 0.1,
    }} className="absolute lg:right-0 mt-10 lg:w-5/6 max-lg:right-0  max-lg:left-0 ">
      <div className="dark:bg-main-dark-bg -ml-1 min-h-screen   ">
        <div className=" max-sm:grid-cols-1  pt-14 pl-6 grid grid-cols-3 gap-8 pr-8  max-sm:mr-6  ">
          {loading &&
            load.map((i, ix) => {
              return (
                <div key={ix} className="flex flex-col ">
                  <Skeleton className="w-[370px] h-[340px] mb-4 "></Skeleton>
                  <Skeleton className="w-[370px] h-[50px]"></Skeleton>
                </div>
              );
            })}
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
    </motion.div>
  );
}

export default WatchList;
