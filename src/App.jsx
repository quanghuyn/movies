import React, { useEffect } from "react";
import "./App.css";
import { Navbar } from "./Component";
import { useStateContext } from "./Contexts/ContextProvider";
import { ToastContainer } from "react-toastify";
import AnmateRoute from "./AnmateRoute";
// import {Scrolltotop} from "./Hooks/ScrolltoTop"

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
