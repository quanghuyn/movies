import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Sidebar, Navbar } from "./Component";
import { lazy } from "react";
import { Home, Main } from "./Page";
import { useStateContext } from './Contexts/ContextProvider';

const TopRated = React.lazy(() => import("./Page/ManiPage/TopRated"));
const DetailMovies = React.lazy(() => import("./Page/details/DetailMovies"));
const ComingSoon = React.lazy(() => import("./Page/ManiPage/ComingSoon"));
const PageError = React.lazy(() => import("./Page/PageError"));
const Movies = React.lazy(() => import("./Page/ManiPage/Movies"));
function App(props) {

  const{toggleDarklMode,mode} = useStateContext()



  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/toprated"
            element={
              <React.Suspense fallback={<>...</>}>
                <TopRated />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/comingsoon"
            element={
              <React.Suspense fallback={<>...</>}>
                <ComingSoon />
              </React.Suspense>
            }
          ></Route>
          {/* <Route  path='/trending' element={<Trending/>}></Route> */}
        </Route>
        <Route
          path="/movies"
          element={
            <React.Suspense fallback={<>...</>}>
              <Movies />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/movies/:moviesId"
          element={
            <React.Suspense fallback={<>...</>}>
              <DetailMovies />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/error"
          element={
            <React.Suspense fallback={<>...</>}>
              <PageError />
            </React.Suspense>
          }
        >
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
// 17.85962473940236
// 25.15635858234885
