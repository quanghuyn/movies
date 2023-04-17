import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import ButtonSetMode from "./Dashboard/ButtonSetMode";
import {data} from "../Data/Icon"


function Sidebar(props) {
  const {handlMode,mode} = useStateContext
  return (
    <div className=" max-lg:hidden  flex flex-col  h-full dark:bg-secondary-dark-bg bg-bg  -ml-1 w-1/6  fixed mt-2 top-16  ">
      <div className="pt-12 pl-8 w-full">
        <span className="dark:text-title font-normal font-[Inter]  bg-primary ">
          MENU
        </span>
      </div>

      {data.map((item, index) => {
        return (
          <div key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? 'linkSideBarActive' : 'linkSideBar')}
              to={`/${item.name}`}
              key={item.name}
            >
              {item.icon}
              <span className="pl-3">{item.title}</span>
            </NavLink>
          </div>
        );
      })}

      {/* button set mode */}
      <div>
        <ButtonSetMode></ButtonSetMode>
      </div>
    </div>
  );
}

export default Sidebar;
