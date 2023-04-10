import React from 'react';

function MoviesCardTrending(props) {
    return (
        <div className='flex movies-commingsoon w-[644px] '>
            <div className='relative '>
                <img className='  w-[644px] h-[366px] rounded-3xl object-cover'
                src="https://cdn.dribbble.com/users/2400293/screenshots/19766354/media/f00ba86ba0c81e959f855126e2d6a8ba.png?compress=1&resize=1600x1200&vertical=top" alt="" />
          
                <div className='flex flex-col absolute bottom-24 left-12 items-start '>
                    <span className='text-xs text-fontactive bg-fontnormal rounded-full px-3 py-2 bg-opacity-20  ' >Coming Soon</span>
                    <h5 className='text-3xl text-fontactive  font-bold mt-3'>Avatar 2</h5>
                    <span className='text-base text-fontnormal mt-2 ' >On December</span>
                    <div className='mt-6 flex flex-row '>
                        <svg className='px-1 py-1 bg-opacity-30 bg-fontnormal rounded-full' width="26" height="26" viewBox="0 0 24 24" fill="#F9F9F9" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9611 13.7364L8.99228 18.2901C7.65896 19.052 6 18.0892 6 16.5536V7.44631C6 5.91067 7.65896 4.94793 8.99228 5.70983L16.9611 10.2635C18.3048 11.0313 18.3048 12.9687 16.9611 13.7364Z" stroke="#F9F9F9" stroke-width="1.5" stroke-linejoin="round"/>
                            </svg>
                         <span className=' ml-2 text-lg text-fontactive' >Watch Trailer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviesCardTrending;