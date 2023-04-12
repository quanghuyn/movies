import React from "react";
import { Navbar, Sidebar } from "../../Component";
import { Outlet } from "react-router";
function Main(props) {
  return (
    <div>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
}

export default Main;
