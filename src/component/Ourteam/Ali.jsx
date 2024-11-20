

import React from "react";
// import footerlogo from "../../Assets/footerlogo.svg";
// import Ourteam from "../../Assets/ourteam.svg";
import patner1 from "../../Assets/patner1.svg";

const Ali = () => {
  return (
    <div>
      <div className='bg-white p-14'>
        <div className="flex items-start space-x-10 ">
          {/* Member Image */}
          <img
            src={patner1}
            alt="partner"
            className="w-[410px] h-[550px] top-10"
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
            <a href="#link">linkedin.com/in/ali-momin-02b46930</a>
          </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Ali



// const Ali = () => {
//   return (
//     <section className="relative pb-20 bg-black text-white">
      
//       <div className="px-10 py-16 mb-40">
//         <img src={footerlogo} alt="logo" className="mb-10" />
//         <h1 className="text-[84px] font-bold leading-tight">
//           We are developers, <br />
//           operators, and <br />
//           <span className="text-[#92B2BF]">entrepreneurs</span>
//         </h1>
//         <hr className="mt-6 w-12" />
//       </div>  

      
//       <div className="absolute top-[550px] inset-x-0 mb-8 flex justify-center items-center ">
//         <img
//           src={Ourteam}
//           alt="team"
//           className="h-[650px]"
//         />
//       </div>

// <div className="h-[400px] bg-white ml-10">

// </div>
      
      
//       <div className= "h-full bg-white text-black p-24 ml-10">
//         <div className="mb-10">
//           <h2 className="text-[64px] font-semibold">Team</h2>
//           <ul className="flex space-x-8 text-[40px] mt-4 font-semibold">
//             <li>Ali Momin</li>
//             <li>Navid Karedia</li>
//           </ul>
//           <hr className=" w-24 mt-4 border-[#92B2BF]" />
//         </div>
      
        
//         <div className="flex items-start space-x-10">
//           {/* Member Image */}
//           <img
//             src={patner1}
//             alt="partner"
//             className="w-[410px] h-[550px] object-cover rounded-lg shadow-lg"
//           />

          
//           <div>
//             <h3 className="text-[64px] font-bold">Ali Momin</h3>
//             <a
//               href="#Partner"
//               className="block text-[#92B2BF] font-semibold mt-2"
//             >
//               Partner
//             </a>
//             <p className="mt-4 text-gray-400 w-[520px] font-inter leading-7">
//               Ali Momin, a prominent figure in the hospitality industry, excels
//               as a developer, owner, and operator of top-tier hotels in the
//               United States. Known for cultivating a culture of excellence and
//               innovation, he spearheads projects that go beyond conventional
//               hospitality norms.
//             </p>
//             <p className="mt-4 text-gray-400 w-[520px] font-inter leading-7">
//               His initiatives integrate state-of-the-art technology,
//               sustainable approaches, and captivating storytelling,
//               revolutionizing the guest experience. With expertise in high-rise
//               construction, historic redevelopment through adaptive reuse, and
//               extensive renovation experience, Ali Momin has been a driving
//               force in hospitality for over 22 years.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Ali;