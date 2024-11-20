import React from 'react'
import materialimg from "../../Assets/material.png";

const Stratgies = () => {
  return (
    <div className="w-full flex px-5">
        <div className="w-1/3">
          <div className="mt-48">
            <img
              src={materialimg}
              alt="img7"
              className="px-10 w-[700px] h-[700px]"
            />
          </div>
        </div>  
        <div className="w-2/3 flex flex-col">
          <div className="flex justify-start mt-40 flex-col gap-10 text-white">
            <h1 className="text-6xl leading-[74px] text-start font-bold">
              {" "}
              SLTX is a real estate <br />
              private equity firm <br />
              specializing in the <br />
              <span className="text-[#92B2BF]">hospitality</span> sector
            </h1>
            <hr className="w-28 " />
          </div>
          <div className="w-full flex flex-col items-end text-white font-inter p-14 ">
            <p className="text-lg w-1/2 text-start gap-10 leading-7">
              Our team utilizes best-in-class resources to acquire and develop
              hotels across the United States, making them more efficient, more
              profitable, and more valuable for our investors.
              <br />
              <div className='mt-5 font-inter'>
              <a href="#stratgies" className="underline text-white text-xl italic ">
                Our Strategies
              </a>
              </div>
              
            </p>
          </div>
        </div>
      </div>

  )
}

export default Stratgies