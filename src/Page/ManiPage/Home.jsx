import React from 'react';
import{Banner,Studio,ContentSideBar,CountinueWatch}  from  '../../Component'

function Home(props) {
    return (
        // bg-main-dark-bg h-[1000px] w-1600
        <div className=' max-lg:left-0  absolute right-0  max-lg:w-full w-5/6' >
        <div className='   flex  bg-main-dark-bg   -ml-1 lg:pl-6  pb-20  max-sm:h-full lg:h-[1180px]' >
            <div className=' flex flex-row w-full'>

                <div className='   max-lg:w-full lg:w-2/3 '>
                    <div className='flex flex-col  h-[990px] '>
                            <div className=' max-lg:w-full  lg:basis-3/6'>
                                <Banner></Banner>
                            </div>
                            <div  className=' max-lg:mx-auto lg:basis-1/6'>
                                <Studio></Studio>
                            </div>
                            <div  className='lg:basis-2/6'>
                                <CountinueWatch></CountinueWatch>
                            </div>
                    </div>
                </div>

                <div className=' pl-3 w-1/3 border-active text-fontactive max-lg:hidden '>
                        <ContentSideBar>
                            content
                        </ContentSideBar>
                </div>
            </div>
            
        </div>
        
        </div>
    );
}

export default Home;