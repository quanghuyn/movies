import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../config";

import {Spinner,MoviesCard} from "../../Component";

const api =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1";

function TopRated(props) {
  const { data, error, isLoading } = useSWR(api, fetcher);
  const [dataTopRated, setDataTopRate] = useState([]);
  useEffect(() => {
    data && setDataTopRate(() => data.results);
  }, [data]);

  console.log(dataTopRated, isLoading);
  console.log(length);
  return (
    <div>
      <div className="   grid grid-cols-3 gap-7 pl-6 -ml-1  bg-main-dark-bg  ">
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          dataTopRated &&
          dataTopRated.map((item) => {
            return (
              <MoviesCard
                key={item.id}
                bg={item.poster_path}
                title={item.title}
                releasedate={item.release_date}
                voteaverage={item.vote_average}
              ></MoviesCard>
            );
          })
        )}
      </div>
    </div>
  );
}

export default TopRated;
TopRated;
