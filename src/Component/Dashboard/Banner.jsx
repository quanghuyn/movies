import React from 'react';
import {BsFillPlayFill,BsHeartFill,BsHeart} from "react-icons/bs"

function Banner(props) {
    return (
        <div className=' text-fontactive bg-main-dark-bg h-full pt-16 '>
            <div className=' mt-6 mb-7'>
                <div className='relative   w-full h-[400px] flex flex-col' >
                    <div className='flex mx-auto  w-full h-full '>
                        <div className='  absolute z-1 bg-gradient-to-r h-full w-full from-tobg via-viabg to-frombg  '></div>
                        {/* img desktop */}
                       <img className=' max-lg:hidden  w-full object-fill h-full rounded-lg  bg-gradient-to-r from-fontnormal to-title ' 
                        src="https://image.tmdb.org/t/p/original/ovM06PdF3M8wvKb06i4sjW3xoww.jpg" alt="" />

                        <img className='  w-full h-full bg-no-repeat object-cover  lg:hidden ' 
                        src="https://image.tmdb.org/t/p/w500/ovM06PdF3M8wvKb06i4sjW3xoww.jpg" alt="" />
                        {/* img mobi&tab  */}
                    </div>

                    <div className=' flex flex-col max-sm:hidden  '>
                        <div className=' absolute bottom-[137px]  left-[40px] '>
                            <div>
                                <p className='text-4xl max-lg:text-3xl font-bold' >Ms.Marvel</p>
                            </div>
                            <div className='max-lg:text-m font-normal text-fontnormal flex flex-row justify-between'>
                                <span>1 Season</span>
                                <span> - Spuer Marvel</span>
                            </div>
                        </div>
                        <div className='cursor-pointer absolute bottom-[50px] left-[40px] max-lg:bottom-[60px] '>
                            <button className='bg-link rounded-full text-xl  py-4  px-6 font-semibold  max-lg:py-2 max-lg:px-3 '  >
                            <BsFillPlayFill className='inline-block mb-0.5 mr-2 max-lg:text-base' ></BsFillPlayFill>
                                Watch Trailer
                            </button>
                        </div>
                        <button className='absolute bottom-[67px] left-[258px] text-xl max-lg:bottom-[66px] max-lg:text-base '>
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