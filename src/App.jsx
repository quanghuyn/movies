import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component";
import { Home, Main, TopRated, PageError,RecentPlayed,Profile,SignInPage ,WatchList} from "./Page";
import { useStateContext } from "./Contexts/ContextProvider";
import { ToastContainer } from "react-toastify";

// const TopRated = React.lazy(() => import("./Page/ManiPage/TopRated"));
const DetailMovies = React.lazy(() => import("./Page/details/DetailMovies"));
const ComingSoon = React.lazy(() => import("./Page/ManiPage/ComingSoon"));
const Movies = React.lazy(() => import("./Page/ManiPage/Movies"));
const TvSeries = React.lazy(() => import("./Page/ManiPage/TvSeries"));
const Disover = React.lazy(() => import("./Page/ManiPage/Disover"));

function App(props) {
  const navigate = useNavigate();
  const { mode, currenUser } = useStateContext();

  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  useEffect(() => {
    if (currenUser) {
      return navigate("/");
    }
  }, [currenUser]);

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/toprated" element={<TopRated />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
          <Route path="/recent" element={<RecentPlayed />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
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
