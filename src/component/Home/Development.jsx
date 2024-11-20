import React from 'react'
import devimg from "../../Assets/dev.img.svg";
import projectimg from "../../Assets/projectimg.png";
import histroryimg from "../../Assets/histroy.png";

const Development = () => {
  return (
    <div className="w-full flex justify-center -mt-28 p-14 gap-5">
        <div className=" h-[500px] w-[700px]">
          <img src={devimg} alt="developmentimg4" className="" />
        </div>
        <div className="h-[500px] w-[700px]">
          <img src={projectimg} alt="projectimg5" className="" />
        </div>
        <div className="h-[500px] w-[700px] ">
          <img src={histroryimg} alt="historyimg6" className="" />
        </div>
      </div>

  )
}

export default Development