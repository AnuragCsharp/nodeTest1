import React from 'react';
import heroportfolio from '../../Assets/portofoli.hero.svg';
import Menu from '../Layout/Menu';
import Project from '../Home/Project';

const PortfolioHeader = () => {
  return (
    <div>
      <Menu />
      <div className='w-full p-4 md:p-8'>
        <div>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight pl-4'>
            <span className='text-[#92B2BF]'>Empowering ambition</span> and vision at every level
          </h1>
        </div>
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-6 py-8'>
          <p className='text-base md:text-lg lg:text-xl leading-7 font-inter text-white max-w-md'>
            In addition to capital, we dedicate time, resources, and expertise
            to guarantee that each project thrives and fulfills expectations.
          </p>
          <img src={heroportfolio} alt="heroimg" className='w-full max-w-md lg:max-w-lg' />
        </div>
        <Project title="Portfolio" background="bg-white text-black" />
      </div>
    </div>
  );
};

export default PortfolioHeader;
