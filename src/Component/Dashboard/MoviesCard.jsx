import React from 'react';

function MoviesCard(props) {
    return (
        <div className=' flex'>
            <div className='rounded-lg h-full bg-movies p-3 '>
                <div className='flex flex-1'>
                  <div className=' w-[320px] h-[300px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  '></div>
                    <img className=' cursor-pointer shadow-lg w-[320px] h-[300px] rounded-xl  object-center '
                    src={`https://image.tmdb.org/t/p/w500${props.bg}`} alt="" />
                </div>

                   <div className='grid justify-start place-content-end  '>
                        <div className=' flex text-fontactive mt-4 '>
                            <span className='text-fontactive text-l font-semibold ' >{props.title}</span>
                        </div>
                        <div className='text-fontnormal flex justify-between w-full mt-4 self-end content-end  ' >
                            <span className='' >{props.releasedate}</span>
                            <span className=''>IMB {props.voteaverage}</span>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default MoviesCard;