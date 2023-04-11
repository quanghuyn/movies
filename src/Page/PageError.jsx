import React from 'react';
import img from '../Data/notext.png'
function PageError(props) {
    return (
        <div>
            <div class=" text-fontactive  text-white min-h-screen flex ">
            <img className='z-10' src={img} alt="" />
                <div class="z-20 absolute container top-10 left-1/3 flex flex-row   ">
                    <div className='flex flex-col items-center'>
                        <div class="text-7xl mb-8 font-medium">Oops</div>
                        <div class="text-xl md:text-3xl font-medium mb-4">
                            The movies has been removed
                        </div>
                        <div class="text-lg mb-8">
                            Try an other movies
                        </div>
                        <a href="/" class="border border-white rounded p-4">Go Home</a>
                        
                    </div>
                </div>
                </div>
        </div>
    );
}

export default PageError;