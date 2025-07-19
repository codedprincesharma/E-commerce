import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Nav = () => {
const user = useSelector((State)=> State.usersReducer.user)

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

      {user ? (
        <>
          <NavLink
            to="/admin/create-product"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white hover:text-blue-400"
            }
            style={{ textDecoration: "none" }}
          >
            Create Product
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white hover:text-blue-400"
            }
            style={{ textDecoration: "none" }}
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
