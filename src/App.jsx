import { useState,useEffect } from 'react'
import React from 'react';
// import {Routes,Route,BrowserRouter}  from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Popup from 'reactjs-popup'
import './App.css'
import{Sidebar,Navbar} from './Component'
import{Banner,Studio,ContentSideBar,CountinueWatch}  from  './Component/Discovery'
import {ComingSoon,RecentPlayed,TopRated,Home} from './Page'

// API Key: dc53e961c475e293222eece8d1187ddb

function App(props) {
  return (
    <div className='  bg-main-dark-bg  min-h-screen h-[1500px]' >
        <BrowserRouter>
            <div className=' relative'>
               
                <div className='fixed  top-0  z-50 '>
                  <Navbar></Navbar>
                </div>

                <div className=' w-screen  '>
                  <div className=' -ml-1 w-1/5 fixed  h-full top-20'>
                    <Sidebar></Sidebar>
                  </div>  
                  {/*  */}
                  <div className=' overflow-x-clip absolute lg:left-60 md:left-40  top-20  w-4/5 ml-8 ' >
                      <Routes>
                        <Route  path='/' element={<Home/>} ></Route>
                        <Route  path='/toprated' element={<TopRated/>} ></Route>
                        <Route  path='/comingsoon' element={<ComingSoon/> }></Route>
                        <Route  path='/recent' element={<RecentPlayed/>}></Route>
                      </Routes>
                  </div> 
                </div>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App
// 17.85962473940236
// 25.15635858234885