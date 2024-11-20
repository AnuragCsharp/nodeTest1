import React from 'react'
import projectimg1 from "../../Assets/projectimg1.svg";
import projectimg2 from "../../Assets/projectimg2.svg";
import projectimg3 from "../../Assets/projectimg3.svg";
import projectimg4 from "../../Assets/projectimg4.svg";
import projectimg5 from "../../Assets/projectimg5.svg";
import projectimg6 from "../../Assets/projectimg6.svg";
import projectimg7 from "../../Assets/projectimg7.svg";
import projectimg8 from "../../Assets/projectimg8.svg";
import projectimg9 from "../../Assets/projectimg9.svg";

const Project = ({title,background}) => {
  const PortfolioData=[
    {
      image:projectimg1,
      text1:"Staybridge Suites Houston Stafford - Sugar Land",
      text2:"Stafford, Texas",
    },

    {
      image:projectimg2,
      text1:"Hyatt Place Austin Lake Travis",
      text2:"Austin, Texas",
    },

    {
      image:projectimg3,
      text1: "Holiday Inn Express / Staybridge Suites Downtown Houston",
      text2:"Houston, Texas Under Construction",
    },

    {
      image:projectimg4,
      text1:"Canopy by Hilton - Houston Downtown",
      text2:"Houston, Texas Under Development",
    },

    {
      image:projectimg5,
      text1:"Tribute By Marriott - Atlanta Downtown",
      text2:"Atlanta, Georgia Under Development",
    },

    {
      image:projectimg6,
      text1:"Staybridge Suites Austin Lake Travis",
      text2:"Austin, Texas Under Development",
    },

    {
      image:projectimg7,
      text1:"Residence Inn by Marriott - Marble Falls",
      text2:" Marble Falls, Texas Under Development",
            
    },

    {
      image:projectimg8,
      text1:"Residence Inn by Marriott – Hutto",
      text2:" Hutto, Texas Under Development",
    },

    {
      image:projectimg9,
      text1:" Aloft Houston Downtown",
      text2:"Aloft Houston Downtown",
    }
  ];
  return (
    <div className={`p-14 ${background}`}>
        <h1 className=" text-6xl font-bold my-24 pl-14 flex justify-items-start">
          {title}
        </h1>
        <hr className="w-24 " />
        <div className="grid grid-cols-3 gap-8 text-white text-start">
          {PortfolioData.map((data,index)=>( 
          <div key={index}>
            <img src={data.image} alt="p1" />
            <h3 className=" w-96 h-20 text-2xl leading-10 font-bold ">
              {data.text1}
            </h3>
            <p className="  text-lg  leading-7 font-inter w-96 h-14">{data.text2}</p>
          </div>
          ))}
        </div>
      </div>
    
  )
}

export default Project