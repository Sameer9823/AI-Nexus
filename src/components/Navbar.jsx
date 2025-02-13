import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="fixed  top-0 w-full z-50  text-white shadow-md  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 ">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10" alt="" />
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-500 to-purple-900 text-transparent bg-clip-text">
            AI NEXUS
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <a href="#" className="hover:text-gray-200 transition">
            Features
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Product
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Action
          </a>
          <a href="#" className="hover:text-gray-200 transition">
            Pricing
          </a>
        </nav>

        {/* Get Started Button */}
        <button className="hidden md:block bg-white/20 text-white px-5 py-2 rounded-lg font-semibold shadow-md backdrop-blur-md border border-white/30 hover:bg-white/30 transition">
          <a href="https://cloudinary-saas-five.vercel.app/" target="_blank">
            Get Started
          </a>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
