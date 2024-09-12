import React from "react";
import logo from "../assets/logo.png";
import { PiPhoneCall } from "react-icons/pi";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl container mx-auto ">
      <div className="navbar xl:px-24">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2">
                <li>
                    <a>All</a>
                  </li>
                  <li>
                    <a>Salad</a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2">
                <li>
                    <a>Online Order</a>
                  </li>
                  <li>
                    <a>Table Booking</a>
                  </li>
                  <li>
                    <a>Order Tracking</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Offers</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn"><PiPhoneCall /> Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
