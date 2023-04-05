import React from 'react';
import imblogo from '../../Data/IMDb.png'
function MoviesCard(props) {
    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr?.split('-');
        let newDate = `${day}-${month}-${year}`;
        return newDate;
      };
    return (
        <div className=' flex '>
            <div className='rounded-lg h-full bg-movies p-3 '>
                <div className='flex flex-1'>
                  <div className=' w-[320px] h-[300px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  '></div>
                    <img className=' cursor-pointer shadow-lg w-[320px] h-[300px] rounded-xl  object-center '
                    src={`https://image.tmdb.org/t/p/w500${props.bg}`} alt="" />
                </div>

                   <div className='flex flex-col justify-start place-content-end pb-2 '>
                        <div className=' flex text-fontactive mt-4 '>
                            <span className='text-fontactive text-xl font-semibold ' >{props.title}</span>
                        </div>
                        <div className='text-fontnormal flex justify-between w-full mt-4 self-end content-end pt-2 ' >
                            <span className='' >{props.releasedate ? formatDate(props.releasedate) : null}</span>
                            <div className='flex ' >
                                <img className='object-cover w-12 mr-2 ' src={imblogo} alt="" />
                                <span className='pt-1'> {props.voteaverage?.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default MoviesCard;