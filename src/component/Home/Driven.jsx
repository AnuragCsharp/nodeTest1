// import React from 'react';
// import constructionimg from "../../Assets/constrution.png"; // Check this path

// const Driven = () => {
//   return (
//     <div className="w-full flex justify-center py-36 px-5">
//       <div className="w-1/3 mt-40">
//         <h2 className="text-4xl md:text-6xl font-bold leading-1 text-left px-7 text-white">
//           We drive powerful, decisive investments in{" "}
//           <span className="text-gray-400">ground-up</span> developments,
//           adaptive reuse projects, and acquisitions
//           <hr className="w-24 mt-8" />
//         </h2>
//       </div>
//       <div className="w-1/3 mt-[200px] flex flex-col">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="md:col-span-1">
//             <img
//               src={constructionimg}
//               alt="img3"
//               className="object-cover h-[600px] w-[700px]"
//             />
//           </div>
//           <div className="md:col-span-1 flex flex-col items-start justify-end">
//             <div className="text-white mt-4">
//               <p>
//                 Our goal is simple. Create a better tomorrow than today. This ambition fuels everything we do, from how we operate our business to the support and touch we provide our investors.
//               </p>
//               <p className="text-lg mt-4">
//                 We have established a proven track record of successful projects across multiple projects, consistently generating value since our inception. This achievement is driven by the expertise, determination, vision, and openness of our team.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Driven;

import React from 'react';
import constructionimg from "../../Assets/constrution.png"; 

const Driven = () => {
  return (
    <div className="w-full flex justify-items-stretch py-36 px-5 ">
      <div className="w-1/3 mt-40">
        <h2 className=" text-6xl font-bold leading-[74px] text-left px-7 text-white ">
          We drive powerful, decisive investments in{" "}
          <span className="text-gray-400">ground-up</span> developments,
          adaptive reuse projects, and acquisitions
          <hr className="w-24 mt-10" />
        </h2>
      </div>
      <div className="mt-[200px] flex flex-col ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <img
              src={constructionimg}
              alt="img3"
              className="object-cover h[736px]"
            />
          </div>
          <div className="md:col-span-1 flex items-end w-[370px]">
            <div className="text-white mt-4 font-inter leading-7">
              <p className='text-lg'>
                Our goal is simple. Create a better tomorrow than today. This ambition fuels everything we do, from how we operate our business to the support and touch we provide our investors.
              </p>
              <p className="text-lg mt-4">
                We have established a proven track record of successful projects across multiple projects, consistently generating value since our inception. This achievement is driven by the expertise, determination, vision, and openness of our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Driven;