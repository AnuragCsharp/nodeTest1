import React, { useState } from "react";
import logoimg from "../../Assets/logo.svg.svg";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import foooterimg from "../../Assets/footerlogo.svg";

const Header = () => {
  const [showmenu, setShowmenu] = useState(false);

  const handleOpen = () => {
    setShowmenu(true);
  };

  const handleClose =()=>{
    setShowmenu(false);

  }
  return (
    <div className="w-full bg-black flex justify-between relative">
      <header className="bg-white w-[96%] ">
        <img src={logoimg} alt="img1" className="px-7 py-7" />
      </header>

      <div>
        <CgMenuRight className="text-white mr-6 mt-2" onClick={handleOpen} />
       
      </div>

      {/* Nav section */}
      {showmenu && (
        <div className="absolute top-0 bg-black z-40 w-full">
          <div className="flex justify-between">
            <img src={foooterimg} alt="logo" />
            <IoCloseOutline className="text-white text-4xl"  onClick={handleClose}/>
          </div>
          <div className=" text-white flex justify-start items-center mt-16 ">
            <ul className="text-[84px] font-bold">
              <li>Team</li>
              <li>Portfolio</li>
              <li> Our Strategies</li>
              <li> Contact Us</li>
            </ul>
            <div className="">
              <p>405 Main St, Suite 712 Houston, Texas 77002</p>
              <a
                href="mailto:info@sltxcapital.com"
                className="text-[#92B2BF] gap-5"
              >
                info@sltxcapital.com
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
