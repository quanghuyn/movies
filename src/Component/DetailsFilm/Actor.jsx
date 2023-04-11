import React, { useEffect, useState } from 'react';
import { fetcher } from "../../config";
import useSWR from "swr";
function Actor(props) {
    console.log(props.id);
    const apiCast = `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US`
    const {data}  = useSWR(apiCast,fetcher)
    console.log(data);
    const [dataCast,setDataCast] = useState()
    useEffect(()=>{
        data && setDataCast(()=>{
            return data?.cast.slice(0,5)
        })
     },[data])
     console.log(dataCast);
    return (
        <>
            <div className='w-full grid grid-cols-5 gap-6 mb-3'>
            { dataCast && dataCast.map(i => {return(
                <div className='flex flex-col justify-center'>

                    <img className='rounded-full w-16 h-16 object-cover mb-2' src={`https://image.tmdb.org/t/p/w500${i.profile_path}`} alt="" />
                    <p className=' flex-1 text-fontactive w-14 text-center  text-sm' >{i.name}</p>
                </div>
            )})}
            </div>
        </>
    );
}

export default Actor;