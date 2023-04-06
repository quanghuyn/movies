
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import{Sidebar,Navbar} from './Component'
import {ComingSoon,RecentPlayed,TopRated,Home,DetailMovies,Main} from './Page' 

function App(props) {
  return (
      <>
            <Navbar></Navbar>
            <Routes>
                 <Route  path='/' element={<Main/>}>
                     <Route  path='/' element={<Home/>} ></Route>
                     <Route  path='/toprated' element={<TopRated/>}></Route>
                 </Route>
                 <Route  path='/movies' element={<DetailMovies/>}></Route>
                 <Route  path='/movies/:moviesId' element={<DetailMovies/>}></Route>

            </Routes>

      </>           
  );
}

export default App
// 17.85962473940236
// 25.15635858234885