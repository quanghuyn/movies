import React, { useEffect, useState } from "react";
import MoviesCard2 from "../CardMovies/MoviesCardSideBar";
import Genress from "./Genres";
import { fetcher } from "../../config";
import useSWR from "swr";

import  {Skeleton} from "../../Component";

function ContentSideBar(props) {
  const { data,isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1",
    fetcher
  );
  const [dataMovies, setDataMovies] = useState();
  useEffect(() => {
    const dataM = [];
    for (let index = 0; index < 4; index++) {
      isLoading || dataM.push(data?.results[index]);
    }
    setDataMovies(() => dataM);
  }, [data]);

  return (
    <div className="w-full max-lg:hidden">
    {isLoading && new Array(4).fill("").map((i,ix)=>( <div  key={ix} > <Skeleton className="w-[340px] h-[160px] ml-7 mb-5 "></Skeleton> </div>   )) }
      <div className="font-medium  text-2xl mb-6 pt-20 pl-3">Top Movies</div>
      <div className="mb-2 min-h-[650px] ">
        
         {dataMovies?.map((item) => {
            return (
              <MoviesCard2
                key={item.id}
                bg={item.poster_path}
                title={item.title}
                releasedate={item.release_date}
                voteaverage={item.vote_average}
                lg={item.original_language}

              ></MoviesCard2>
            );
          })
        }
      </div>
      {!isLoading && 
        <Genress></Genress>

      }
    </div>
  );
}

export default ContentSideBar;
