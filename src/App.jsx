import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Sidebar, Navbar, DetailsLoad } from "./Component";
import { lazy } from "react";
import { Home, Main, TopRated, PageError } from "./Page";
import { useStateContext } from "./Contexts/ContextProvider";
import { Suspense } from "react";

// const TopRated = React.lazy(() => import("./Page/ManiPage/TopRated"));
const DetailMovies = React.lazy(() => import("./Page/details/DetailMovies"));
const ComingSoon = React.lazy(() => import("./Page/ManiPage/ComingSoon"));
// const PageError = React.lazy(() => import("./Page/PageError"));
const Movies = React.lazy(() => import("./Page/ManiPage/Movies"));
const TvSeries = React.lazy(() => import("./Page/ManiPage/TvSeries"));
const Disover = React.lazy(() => import("./Page/ManiPage/Disover"));

function App(props) {
  const { mode } = useStateContext();
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/toprated" element={<TopRated />}></Route>
          <Route
            path="/comingsoon"
            element={
              <React.Suspense fallback={<>...</>}>
                <ComingSoon />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/discovery"
            element={
              <React.Suspense fallback={<>...</>}>
                <Disover />
              </React.Suspense>
            }
          ></Route>
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
          path="/tvseries"
          element={
            <React.Suspense fallback={<>...</>}>
              <TvSeries />
            </React.Suspense>
          }
        ></Route>
        <Route path="/error" element={<PageError />}></Route>
        <Route path="*" element={<PageError />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 17.85962473940236
// 25.15635858234885
