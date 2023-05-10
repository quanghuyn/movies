import React, { useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component";
import { Home, Main, TopRated,PageError,SignInPage } from "./Page";
import { useStateContext } from "./Contexts/ContextProvider";
import { ToastContainer } from "react-toastify";

// const TopRated = React.lazy(() => import("./Page/ManiPage/TopRated"));
const DetailMovies = React.lazy(() => import("./Page/details/Movies/DetailMovies"));
const WatchMovies = React.lazy(() => import("./Page/details/Movies/WatchMovies"));
const DetailMoviesTv = React.lazy(() => import("./Page/details/Tv/DetailMoviesTv"));
const Profile = React.lazy(() => import("./Page/Personal/Profile"));
const RecentPlayed = React.lazy(() => import("./Page/Personal/RecentPlayed"));
const WatchList = React.lazy(() => import("./Page/Personal/WatchList"));
const ComingSoon = React.lazy(() => import("./Page/ManiPage/ComingSoon"));
const Movies = React.lazy(() => import("./Page/ManiPage/Movies"));
const TvSeries = React.lazy(() => import("./Page/ManiPage/TvSeries"));
const Disover = React.lazy(() => import("./Page/ManiPage/Disover"));

function App(props) {

  const { mode, currenUser } = useStateContext();

  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <div>
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
          <Route
            path="/recent"
            element={
              <React.Suspense fallback={<>...</>}>
                <RecentPlayed />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/watchlist"
            element={
              <React.Suspense fallback={<>...</>}>
                <WatchList />
              </React.Suspense>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <React.Suspense fallback={<>...</>}>
                <Profile />
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
          path="/moviesdetail/:moviesId"
          element={
            <React.Suspense fallback={<>...</>}>
              <DetailMovies />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/watch/:moviesId"
          element={
            <React.Suspense fallback={<>...</>}>
              <WatchMovies />
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
        <Route
          path="/tvseries/:moviesId"
          element={
            <React.Suspense fallback={<>...</>}>
              <DetailMoviesTv />
            </React.Suspense>
          }
        ></Route>
        <Route path="/sign" element={<SignInPage />}></Route>

        <Route path="/error" element={<PageError />}></Route>
        <Route path="*" element={<PageError />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
// 17.85962473940236
// 25.15635858234885
