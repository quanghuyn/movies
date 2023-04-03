import React from 'react';

function MoviesCard(props) {
    return (
        <div className=' '>
            <div className='rounded-lg  bg-movies p-3'>
                <div className=' '>
                  <div className=' w-[320px] h-[300px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  '></div>
                    <img className=' cursor-pointer shadow-lg w-[320px] h-[300px] rounded-xl  object-center '
                    src={props.bg} alt="" />
                </div>
                   
                    <div className=' text-fontactive  mt-4 '>
                        <span className='text-fontactive text-l font-semibold ' >{props.title}</span>
                    </div>
                    <div className='text-fontnormal flex justify-between w-full mt-2' >
                        <span className='' >{props.releasedate}</span>
                        <span className=''>IMB {props.voteaverage}</span>
                    </div>
            </div>
        </div>
    );
}

export default MoviesCard;