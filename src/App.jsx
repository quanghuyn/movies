
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import{Sidebar,Navbar} from './Component'
import {ComingSoon,RecentPlayed,TopRated,Home} from './Page' 

function App(props) {
  return (
    <BrowserRouter>
               
                  <Navbar></Navbar>
                  <div className=' relative'>
                    <Sidebar></Sidebar>
                  // Mani layout
                  {/* <div className='ml-1 pl-1 top-16 absolute lg:left-60 md:left-40 pt-4 w-5/6 bg-main-dark-bg ' > */}
                  {/* <div className=' absolute ml-20 pl-4 top-16  md:left-40 pt-4 w-5/6  bg-main-dark-bg ' > */}
                  <div className=' absolute right-0  w-5/6 ' >
                      <Routes>
                        <Route  path='/' element={<Home/>} ></Route>
                        <Route  path='/toprated' element={<TopRated/>} ></Route>
                        <Route  path='/comingsoon' element={<ComingSoon/> }></Route>
                        <Route  path='/recent' element={<RecentPlayed/>}></Route>
                      </Routes>
                  </div> 
                  </div>
        </BrowserRouter>
  );
}

export default App
// 17.85962473940236
// 25.15635858234885