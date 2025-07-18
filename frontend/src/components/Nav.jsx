import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-center items-center gap-x-5 p-5 bg-slate-800">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white hover:text-blue-400"
        }
        style={{ textDecoration: "none" }}
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white hover:text-blue-400"
        }
        style={{ textDecoration: "none" }}
      >
        Products
      </NavLink>
      
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-white hover:text-blue-400"
        }
        style={{ textDecoration: "none" }}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Nav;
