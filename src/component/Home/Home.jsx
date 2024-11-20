import React from 'react';
import heroimg from "../../Assets/hero.png";
// import constructionimg from "../../Assets/constrution.png";
import Header from './Header';
import Driven from './Driven';
import Development from './Development';
import Stratgies from './Stratgies';
import Team from './Team';
import Project from './Project';
import Footer from '../Layout/Footer';

const Home = () => {
  return (
    <div>
        <Header />
       
        <section className="w-full">

        <div className="bg-white w-[96%] pb-80">
          <h1 className="text-6xl font-bold leading-1 text-left px-7 py-10  ">
            {" "}
            A versatile{" "}
            <span className="text-gray-400 font-Playfair Display">
              hospitality
            </span>{" "}
            <br />
            development company with a <br />
            personal approach
            <hr className="w-24 mt-8 " />
          </h1>

          <div className="w-full">
            <img
              src={heroimg}
              alt="img2"
              className="w-full h-[600px] absolute px-10"
            />
          </div>
        </div>
</section>
     
      <Driven/>

      <Development/>
      <Stratgies/>
      <Team/>
      
      <Project title="our project" background="text-white"/>
      <Footer/>
    </div>
  )
}

export default Home