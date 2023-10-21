/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <header className="fixed top-0 w-full h-16 bg-white text-black z-50 shadow-lg">
      <div className="w-450 mx-auto flex items-center justify-between p-2 mt-1">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-9 w-11" />
          <span className="text-lg font-bold ml-2"></span>
        </div>
        <div className="flex items-center">
          <button className="border border-primary-500 hover:bg-primary-500 hover:text-white transition duration-300 font-semibold text-sm px-4 py-2 mr-4 p-2 rounded-lg">
            Sign In
          </button>
          <button className="bg-primary-700 border hover:bg-primary-500 transition duration-300 border-primary-500 text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Sign Up
          </button> 
        </div>
      </div>
    </header>
  );
}

export default Navbar;
