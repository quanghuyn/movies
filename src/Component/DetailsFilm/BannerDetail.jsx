import React from 'react';
import imblogo from '../../Data/IMDb.png'
function BannerDetail(props) {
    ;
    const calcTime = (time) => {
      const str = time/60
      const hour = Math.floor( str ) 
      const minute = Math.round(60 * (str - Math.floor( str ) ))
        return `${hour}h ${minute}m`
    }
    
    const imgTest = 'https://image.tmdb.org/t/p/original/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg'
    return (
        <div className='relative h-full bg-main-dark-bg'>

            <div className='text-fontactive flex flex-col justify-start absolute bottom-20   left-28 contrast-100  z-20'>
                <h2 className='text-5xl mb-8 shadow-lg' >{props.title}</h2>
                <p className='text-lg w-1/2 mb-4' >{props.brfie}</p>
                <div className='flex flex-row text-fontnormal text-lg'>
                <p className='  mb-4'>{calcTime(props.runtime)} </p>
                {props.gentes.map(i => {return(
                    <div className='ml-1'>
                       | {i.name}
                    </div>
                )})}
                </div>
                <div className='mb-4 flex flex-row '>
                    <div className='flex content-center mb-4 '>
                        <img className='object-cover w-12 mr-1  -pt-2' src={imblogo} alt="" />
                        <span className='pt-1'>8.3</span>
                    </div>
                    {/* <p className='pt-1 pl-1 ml-10'> {calcTime(190)}</p> */}
                    
                </div>
                <button className= ' bg-link rounded-lg  py-3  text-xl w-36   '  >Trailer</button>
            </div>

            <div>
            {/* <div className=' w-1/2 h-1/2 absolute bottom-0 bg-gradient-to-r  from-cardmovies  to-cardmoviesto  '></div> */}
             <img className='w-screen  contrast-125' src={`https://image.tmdb.org/t/p/original${props.bg}`} alt="" />
            </div>

        </div>
    );
}

export default BannerDetail;