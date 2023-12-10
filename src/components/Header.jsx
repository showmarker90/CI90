import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <NavLink to={"/"} className={({ isActive }) => isActive && "isActive"}>
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => isActive && "isActive"}
      >
        About
      </NavLink>
      <NavLink
        to={"/products"}
        className={({ isActive }) => isActive && "isActive"}
      >
        Products
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive }) => isActive && "isActive"}
      >
        Login
      </NavLink>
    </div>
  );
};

export default Header;
