import React from 'react';
import {BsFillPlayFill,BsHeartFill,BsHeart} from "react-icons/bs"

function Banner(props) {
    return (
        <div className=' text-fontactive bg-main-dark-bg h-full'>
            <div className=' mt-6 mb-7'>
                <div className='relative  w-full h-[400px] flex flex-col' >
                    <div className='flex mx-auto w-full h-full '>
                        <div className='absolute z-1 bg-gradient-to-r h-full w-full from-tobg via-viabg to-frombg  '></div>
                        <img className='shadow-lg w-full object-fill h-full rounded-lg  bg-gradient-to-r from-fontnormal to-title ' 
                        src="https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg" alt="" />
                    </div>

                    <div className=' flex flex-col  '>
                        <div className=' absolute bottom-[137px]  left-[40px] '>
                            <div>
                                <p className='text-4xl font-bold' >Ms.Marvel</p>
                            </div>
                            <div className=' font-normal text-fontnormal flex flex-row justify-between'>
                                <span>1 Season</span>
                                <span> - Spuer Marvel</span>
                            </div>
                        </div>
                        <div className='cursor-pointer absolute bottom-[50px] left-[40px] '>
                            <button className='bg-link rounded-full text-xl  py-4  px-6 font-semibold'  >
                            <BsFillPlayFill className='inline-block mb-0.5 mr-2 ' ></BsFillPlayFill>
                                Watch Trailer
                            </button>
                        </div>
                        <button className='absolute bottom-[67px] left-[258px] text-xl'>
                            <BsHeart className=' h-7 inline-block mr-2'></BsHeart>
                              Add Watchlist 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;Banner    