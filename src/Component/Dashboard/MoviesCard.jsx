import React from 'react';
import imblogo from '../../Data/IMDb.png'
function MoviesCard(props) {
    const formatDate = (dateStr) => {
        const [year, month, day] = dateStr?.split('-');
        let newDate = `${day}-${month}-${year}`;
        return newDate;
      };
    return (
        // <div className=' flex  h-[500px]'>
        //     <div className='rounded-lg h-full bg-movies  '>
                
        //           <div className=' w-[320px] h-[300px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  '></div>
        //             <img className=' cursor-pointer shadow-lg w-[320px] h-[350px] rounded-t-xl  object-center mb-6 '
        //             src={`https://image.tmdb.org/t/p/w500${props.bg}`} alt="" />
               

        //            <div className='flex flex-col text-fontactive flex-1 '>
                       
        //                     <span className=' w-[320px] text-xl font-semibold pl-4 ' >{props.title}</span>
                       
        //                 <div className='flex items-center justify-between px-4 text-fontnormal  pt-2 mt-auto  ' >
        //                     <span className='' >{props.releasedate ? formatDate(props.releasedate) : null}</span>
        //                     <div className=' flex  ' >
        //                         <img className='object-cover w-12 mr-2 ' src={imblogo} alt="" />
        //                         <span className='pt-1'> {props.voteaverage?.toFixed(2)}</span>
        //                     </div>
        //                 </div>
        //             </div>
        //     </div>
        // </div>
        <div className='flex flex-col rounded-lg bg-movies text-fontactive h-[460px] sele '>
        <div className=' w-[320px] h-[300px] absolute z-10 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  '></div>
        <img src={`https://image.tmdb.org/t/p/w500${props.bg}`} alt=""
        className='w-full h-[300px] object-cover rounded-t-lg mb-5' />

        <div className='flex flex-col flex-1 pl-4'>

            <h3 className='text-2xl font-semibold '>{props.title ? props.title : 'Lorem' } </h3>

            <div className='flex items-center justify-between text-l mb-10 mt-auto pr-4 ' >
                  <span className='pt-1' >{props.releasedate ? formatDate(props.releasedate) : '15-04-2019'}</span>

                <span className=' flex'>
                <img className='object-cover w-12 mr-1  -pt-2' src={imblogo} alt="" />
                <span className='pt-1'> {props.voteaverage?.toFixed(2)}</span>
                </span>

            </div>
        </div>
    </div>
    );
}

export default MoviesCard;