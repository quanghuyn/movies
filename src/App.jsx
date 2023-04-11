
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import{Sidebar,Navbar} from './Component'
import {ComingSoon,TopRated,Home,DetailMovies,Main,Movies,PageError} from './Page' 

function App(props) {
  return (
      <>
            <Navbar></Navbar>
            <Routes>
                 <Route  path='/' element={<Main/>}>
                     <Route  path='/' element={<Home/>} ></Route>
                     <Route  path='/toprated' element={<TopRated/>}></Route>
                      <Route  path='/comingsoon' element={<ComingSoon/>}></Route>
                      {/* <Route  path='/trending' element={<Trending/>}></Route> */}
                 </Route>
                 <Route  path='/movies-details/:moviesId' element={<DetailMovies/>}></Route>
                <Route path='/error' element={<PageError/>} > </Route>
            </Routes>

      </>           
  );
}

export default App
// 17.85962473940236
// 25.15635858234885