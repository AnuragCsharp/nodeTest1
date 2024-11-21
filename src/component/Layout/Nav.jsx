import React from "react";
import foooterimg from "../../Assets/footerlogo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="pl-14">
      <div>
        <img src={foooterimg} alt="logo" />
      </div>
      <div className="text-white flex justify-start items-center mt-16">
        <ul className="text-lg font-semibold">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="/team">Team</Link>
          </li>
          <li className="hover:underline">
            <Link to="/project">Project</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="ml-10">
          <p>405 Main St, Suite 712 Houston, Texas 77002</p>
          <a
            href="mailto:info@sltxcapital.com"
            className="text-[#92B2BF] hover:underline"
          >
            info@sltxcapital.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
