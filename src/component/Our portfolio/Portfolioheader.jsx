import React from 'react'
// import Header from "../Home/Header";
import heroportfolio from "../../Assets/portofoli.hero.svg"
import Menu from '../Layout/Menu'
import Project from '../Home/Project'
//import Footer from '../Layout/Footer'

// import Header from './Header';

const Portfolio = () => {
  return (
    <div>
    <Menu/>
    <div className='w-[96%] h-[500px]'>
<div >
  <h1 className='text-[84px] w-[1070px] h-[180px] text-white leading-[90px] pl-8'> <span className='text-[#92B2BF]'>Empowering ambition</span> and vision at every level</h1>
</div>
<div className='flex justify-end items-center py-14'>
  <p className='text-lg leading-7 font-inter text-white w-[350px] h-[112px]'>In addition to capital, we dedicate time, resources, and expertise
     to guarantee that each project thrives and fulills expectations.</p>

  <img src={heroportfolio} alt="heroimg" />
</div>
<Project  title="Portfolio" background="bg-white text-black" />

    </div>

    </div>
    
  )
}

export default Portfolio
