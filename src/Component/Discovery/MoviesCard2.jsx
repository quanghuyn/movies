import React from 'react';

function MoviesCard2(props) {

    return (
        <div className='w-full my-4 rounded-md '>
        <div className='rounded-lg w-[370px] h-[170px]  p-4 flex flex-row '>
            <div className=' '>
              <div className='  absolute z-10 bg-gradient-to-r  w-[112px] h-[140px] from-cardmovies  to-cardmoviesto  '></div>
                <img className=' cursor-pointer shadow-lg w-[112px] h-[140px] rounded-xl  object-center '
                src={props.bg} alt="" />

            </div>
                <div className='flex flex-col justify-between pl-5 '>
                        <span className='text-fontactive text-l font-semibold pt-2 ' >{props.title}</span>
                        <div className='flex flex-col text-sm'>
                        <span className='mb-2' >{props.releasedate}</span>
                        <span className=''>IMB {props.voteaverage}</span>
                        </div>
                    
                </div>
        </div>
    </div>
    );
}

export default MoviesCard2;