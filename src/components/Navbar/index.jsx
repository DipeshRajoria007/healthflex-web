import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="h-16 w-full bg-slate-800 flex justify-around items-center ">
      <h1>
        <NavLink to="/" className="text-white">
          Library Management System
        </NavLink>
      </h1>
      <div className="flex gap-24">
        <NavLink to="/books" className="text-white">
          Books
        </NavLink>
        <NavLink to="/members" className="text-white">
          Members
        </NavLink>
        <NavLink to="/over-due-books" className="text-white">
          Over due books
        </NavLink>
        <NavLink to="/checkout" className="text-white">
          Checkout
        </NavLink>
        <NavLink to="/return" className="text-white">
          Return
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
