import React from 'react';
import imblogo from '../../Data/IMDb.png'

function MoviesCardHome(props) {
    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr?.split('-');
        let newDate = `${day}-${month}-${year}`;
        return newDate;
      };

    return (
        <div className=' flex '>

            <div className='  rounded-lg  bg-movies  h-full pb-8 '>
              
                <div className='flex'>
                  <div className=' w-[320px] h-[300px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  '></div>
                    <img className=' cursor-pointer  w-[320px] h-[300px] rounded-t-2xl  object-center  '
                    src={`https://image.tmdb.org/t/p/w500${props.bg}`} alt="" />
                </div>
                    <div className='flex flex-col flex-1 h-full '>
                                <span className='text-fontactive text-xl font-semibold mt-4 w-[320px] leading-8 ' >{props.title ? props.title : 'Lorem'}</span>
                            <div className='text-fontnormal  flex justify-between w-full mt-4  pr-3 h-full ' >
                                <span className='pt-1' >{props.releasedate ? formatDate(props.releasedate) : '15-04-2019'}</span>
                                <div className='flex ' >
                                    <img className='object-cover w-12 mr-1  ' src={imblogo} alt="" />
                                    <span className='pt-1'> {props.voteaverage?.toFixed(2)}</span>
                                </div>
                            </div>
                    </div>
                  
            </div>
        </div>
    );
}

export default MoviesCardHome;