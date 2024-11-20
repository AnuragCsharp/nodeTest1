import React from 'react'
import teamimg from "../../Assets/teamimg.svg";
import teammate from "../../Assets/teammate.svg";


const Team = () => {
  return (
    <>
    <section className="">
        <img src={teamimg} alt="img8" className='h-[520px] ml-14'/>
      </section>
      <div className="relative">
        <h2 className=" text-[#92B2BF] text-6xl text-left pt-20 pb-40 pl-80">
          Driven by more <br />
          than dollars
        </h2> 
        <div className=" ">
          <div className="absolute top-40 right-0 mt-7 p-14">
            <img src={teammate} alt="img9" />
            <hr className="w-24 mt-10" />
          </div>  
          <div className="w-full flex justify-end gap-10 p-14">
            <div className="w-[100%] bg-white h-[800px]  flex items-end justify-end pb-24">
              <p className="w-1/3 mr-32 font-inter text-lg leading-7 text-left  ">
                The cornerstone of SLTX Capital is building deep-rooted
                relationships founded on trust and authenticity. We firmly
                believe that success is built on these principles, and we are
                committed to maintaining transparency and integrity in all our
                projects.
                <br />
              </p>
              <div className="">
                <a
                  href="#ourteam"
                  className="underline text-black text-2xl leading-7 font-inter italic font-semibold"
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Team