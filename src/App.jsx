import React, { useEffect } from "react";
import {  Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Component";
import { useStateContext } from "./Contexts/ContextProvider";
import { ToastContainer } from "react-toastify";
import AnmateRoute from "./AnmateRoute";

// const TopRated = React.lazy(() => import("./Page/ManiPage/TopRated"));


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
        <AnmateRoute></AnmateRoute>
      <ToastContainer />
    </div>
  );
}

export default App;
// 17.85962473940236
// 25.15635858234885
