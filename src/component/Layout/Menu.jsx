import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import foooterimg from "../../Assets/footerlogo.svg";
import { Link } from "react-router-dom";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpen = () => {
    setShowMenu(true);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <div className="w-full bg-black flex justify-between relative">
      {/* Header with logo */}
      <header className="w-[96%]">
        <img src={foooterimg} alt="logo" className="px-8 py-8" />
      </header>

      {/* Hamburger Icon */}
      <div>
        <CgMenuRight
          className="text-white mr-6 mt-2 text-3xl cursor-pointer"
          onClick={handleOpen}
        />
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white z-50 transition-transform duration-500 ease-in-out transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } w-[300px]`}
      >
        {/* Menu Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <img src={foooterimg} alt="logo" className="h-10" />
          <IoCloseOutline
            className="text-white text-3xl cursor-pointer"
            onClick={handleClose}
          />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 text-lg font-semibold p-6">
          <li>
            <Link to="/" className="hover:text-gray-300" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300"
              onClick={handleClose}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className="hover:text-gray-300"
              onClick={handleClose}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="hover:text-gray-300"
              onClick={handleClose}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-300"
              onClick={handleClose}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Footer Info */}
        <div className="p-6 text-sm text-gray-400">
          <p>405 Main St, Suite 712 Houston, Texas 77002</p>
          <a
            href="mailto:info@sltxcapital.com"
            className="block text-[#92B2BF] mt-2 text-right"
          >
            info@sltxcapital.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
