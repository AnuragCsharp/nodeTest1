import React from "react"; // Add this line
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Layout/Footer";
import Ali from "./component/Ourteam/Ali";
import Navid from "./component/Ourteam/Navid";
import Teamheader from './component/Ourteam/Teamheader';
import Header from "./component/Home/Header";
import Driven from "./component/Home/Driven";
import Development from "./component/Home/Development";
import Project from "./component/Home/Project";
import Stratgies from "./component/Home/Stratgies";
import Team from "./component/Ourteam/Teamheader";
import Home from "./component/Home/Home";
import Portfolioheader from "./component/Our portfolio/Portfolioheader";
import Menu from "./component/Layout/Menu";
import Portfolio from "./component/Our portfolio/Portfolio";


function App() {
  return (
    <Router basename="/nodeTest1"> {/* Added basename */}
      <Routes>
        {/* Home folder */}
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/driven" element={<Driven />} />
        <Route path="/development" element={<Development />} />
        <Route path="/project" element={<Project />} />
        <Route path="/stratgies" element={<Stratgies />} />
        <Route path="/team" element={<Team />} />
        <Route path="/footer" element={<Footer />} />

        {/* Layout folder */}
        <Route path="/menu" element={<Menu />} />

        {/* Ourteam folder */}
        <Route path="/teamheader" element={<Teamheader />} />
        <Route path="/ali" element={<Ali />} />
        <Route path="/navid" element={<Navid />} />

        {/* OurPortfolio folder */}
        <Route path="/portfolioheader" element={<Portfolioheader />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;