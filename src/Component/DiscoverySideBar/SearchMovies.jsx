import React from 'react';
import { useStateContext } from '../../Contexts/ContextProvider';
import { useDebounce } from '../../Hooks/useDebounce';

function SearchMovies(props) {
  const { key,setkey} =useStateContext()

  const handlSearch = (e) => {
    setTimeout(()=>{
      setkey(e)
    },1000)
  }
    return (
        <div className=" -translate-y-2 flex items-start flex-row pt-6  ">
        <input
          className=" w-full flex p-2 dark:text-fontactive dark:bg-textlight outline-none border-b-1 transition-colors focus:duration-700 focus:ease-in-out dark:border-fontnormal   "
          type="search"
          id="gsearch"
          name="gsearch"
          placeholder=" Type to Search..."
          onChange={(e) => handlSearch(e.target.value)}
        />
        <svg
          className=" -translate-x-6 translate-y-3 "
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
      </div>
    );
}

export default SearchMovies;