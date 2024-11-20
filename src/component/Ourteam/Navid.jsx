import React from 'react'
import patner2 from "../../Assets/Patner2.svg";


const Navid = () => {
  return (
    <div className='bg-white'>
        <div className="flex items-start space-x-10 p-14 ">
          {/* Member Image */}
          <img
            src={patner2}
            alt="partner"
            className="w-[410px] h-[550px] top-10"
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
            <a href="#link">linkedin.com/in/navid-karedia-b5aa87b6</a>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Navid;