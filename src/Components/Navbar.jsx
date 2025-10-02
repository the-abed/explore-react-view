import React, { use, useContext } from "react";
import { NavLink } from "react-router";
import ThemToggler from "./ThemToggler";
import { ShoppingCart } from "lucide";
import Cart from "../Pages/Cart";
import { CartContext } from "../Providers/CartContext";

const Navbar = () => {
  
  const {cart,setCart} = useContext(CartContext);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           <li className="nav-link">
            <NavLink to="/">Home</NavLink>{" "}
          </li>

          <li>
            <NavLink to="/About">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="text-xl">
            <NavLink to="/cart"> 🛒<span className="">{cart.length}</span> </NavLink>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Green Earth</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 nav">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>{" "}
          </li>

          <li>
            <NavLink to="/About">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="text-xl">
            <NavLink to="/cart"> 🛒<span className="absolute bottom-6 left-10 text-sm">{cart.length}</span> </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemToggler></ThemToggler>
      </div>
    </div>
  );
};

export default Navbar;
