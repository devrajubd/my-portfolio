import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Raju Hossain</div>
        <div className="space-x-3 sm:space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#service" className="hover:text-gray-400">
            Service
          </a>
          <a href="#project" className="hover:text-gray-400">
            Project
          </a>
          <a href="#contact" className="hover:text-gray-400 md:hidden">
            Contact
          </a>
        </div>
        <a href="#contact">
          <button className="bg-gradient-to-r from-cyan-400 to-violet-600 font-semibold hover:bg-gradient-to-t hidden md:inline px-6 py-1 rounded-full">
            Contact
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
