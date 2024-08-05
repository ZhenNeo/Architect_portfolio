import React from "react";

const Navbar = () => {
  return (
    <div className="fixed  inset-y-0  p-4 bg-white text-black">
      <nav className="space-y-4 space-x-0">
        <h2 className="px-2"> JOHN DOE</h2>
        <h2 className="px-2">ARCHITECT</h2>
        <div className="flex-col">
          <a href="#home" className="  px-2 rounded hover:bg-gray-700">
            Home
          </a>
          <a href="#work" className="  px-2 rounded hover:bg-gray-700">
            Work
          </a>
          <a href="#about" className="  px-2 rounded hover:bg-gray-700">
            About
          </a>
          <a href="#contact" className=" px-2 rounded hover:bg-gray-700">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
