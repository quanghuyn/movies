import React from 'react';
import{Banner,Studio,ContentSideBar,CountinueWatch}  from  '../Component/Discovery'

function Home(props) {
    return (
       
        <div className='absolute flex w-full pl-7 ' >
            <div className=' flex flex-row w-full'>

                <div className=' w-2/3 '>
                    <div className='flex flex-col  h-[990px] '>
                            <div className='basis-3/6'>
                                <Banner></Banner>
                            </div>
                            <div  className='basis-1/6'>
                                <Studio></Studio>
                            </div>
                            <div  className='basis-2/6'>
                                <CountinueWatch></CountinueWatch>
                            </div>
                    </div>
                </div>

                <div className=' pl-7 w-1/3 border-active text-fontactive'>
                        <ContentSideBar>
                            content
                        </ContentSideBar>
                </div>
            </div>
            
        </div>
        
        
    );
}

export default Home;