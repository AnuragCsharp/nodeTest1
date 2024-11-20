import React, { useState } from "react";
import footerlogo from "../../Assets/footerlogo.svg";
import Ourteam from "../../Assets/ourteam.svg";
import Footer from "../Layout/Footer";
import patner1 from "../../Assets/patner1.svg";
import patner2 from "../../Assets/Patner2.svg";

const Team = () => {
  const[showContent,setShowContent]=useState("ali");
  const handleClick =(name)=>{
    setShowContent(name)
  }
  return (
    <section className="relative pb-20 bg-black text-white ">
      {/* Header Section */}
      <div className="px-10 py-16 mb-40">
        <img src={footerlogo} alt="logo" className="mb-10" />
        <h1 className="text-[84px] font-bold leading-tight">
          We are developers, <br />
          operators, and <br />
          <span className="text-[#92B2BF]">entrepreneurs</span>
        </h1>
        <hr className="mt-6 w-12" />
      </div>  

      {/* Team Image */}
      <div className="absolute top-[550px] inset-x-0 mb-8 flex justify-center items-center ">
        <img
          src={Ourteam}
          alt="team"
          className="h-[650px]"
        />
      </div>

<div className="h-[400px] bg-white ml-10">

</div>
    
      
      <div className= "h-full bg-white text-black p-24 ml-10">
        <div className="mb-10">
          <h2 className="text-[64px] font-semibold">Team</h2>
          <ul className="flex space-x-8 text-[40px] mt-4 font-semibold">
            <li onClick={()=>{handleClick("ali")}}>Ali Momin</li>
            <li onClick={()=>{handleClick("navid")}}>Navid Karedia</li>

          </ul>
          <hr className=" w-44 mt-4 border-[#92B2BF]" />
        </div>
    
      
        {showContent==="ali" &&  
        <div>
        <div className='bg-white py-14'>
          <div className="flex items-start space-x-10 ">
            {/* Member Image */}
            <img
              src={patner1}
              alt="partner"
              className=" h-[550px] top-10 space-x-10 :"
            />
  
            {/* Member Info */}
            <div>
              <h3 className="text-[64px] font-bold ">Ali Momin</h3>
              <div className='font-inter'>
              <a
                href="#Partner"
                className="block text-[#92B2BF] font-semibold mt-2"
              >
                Partner
              </a>
              <h4 className='text-lg font-semibold pt-2'>Bio</h4>
              <p className="mt-4 text-gray-400 w-[520px] leading-7 ">
              Ali Momin, a prominent figure in the hospitality industry, excels as a developer, owner,
               and operator of top-tier hotels in the United States.
               Known for cultivating a culture of excellence and innovation, he spearheads projects 
               that go beyond conventional hospitality norms.
              </p>
              <h4 className='text-lg font-semibold pt-2 '>PRIOR EXPERIENCE</h4>
              <p className="mt-4 text-gray-400 w-[520px] leading-7">
              His initiatives integrate state-of-the-art technology, sustainable approaches, 
              and captivating storytelling, revolutionizing the guest experience. With expertise in high-rise construction, 
              historic redevelopment through adaptive reuse, and extensive renovation experience,
               Ali Momin has been a driving force in hospitality for over 22 years.
              </p>
              <div className="mt-10">
              <a href="#link">linkedin.com/in/ali-momin-02b46930</a>
              </div>
              
            </div>
            </div>
            </div>
      </div>
      </div>
      }


      {showContent==="navid"&&  
      <div className='bg-white py-14'>
      <div className="flex items-start space-x-10 ">
        {/* Member Image */}
        <img
          src={patner2}
          alt="partner"
          className="h-[550px] top-10"
        />

        {/* Member Info */}
        <div>
          <h3 className="text-[64px] font-bold">Navid Karedia</h3>
          <div className='font-inter'>
          <a
            href="#Partner"
            className="block text-[#92B2BF] font-semibold mt-2"
          >
            Partner
          </a>
          <h4 className='text-lg font-semibold'>Bio</h4>
          <p className="mt-4 text-gray-400 w-[520px] leading-7">
          Navid Karedia has been actively involved in real estate development
           with a particular focus in the hotel sector since 2016. 
          Over the years, he has honed his expertise in various aspects
           of development and management.
          </p>
          <h4 className='text-lg font-semibold'>PRIOR EXPERIENCE</h4>
          <p className="mt-4 text-gray-400 w-[520px] leading-7">
          His expertise extends across multiple aspects, including land acquisition, 
          navigation the entitlement processes, oversight of construction, and management.
           Navid has been successful in adding value and opportunities for his organization.
            He enthusiastically embraces SLTX’s vision of fostering a legacy of sustainable growth 
            through the cultivation of exceptional culture, strategic partnerships, and impactful projects.
          </p>
          <div className="mt-10">
          <a href="#link">linkedin.com/in/navid-karedia-b5aa87b6</a>
          </div>
          
        </div>
        </div>
  </div>
  </div>
  }
      </div>
      <Footer/>

    </section>
  );
};

export default Team;
