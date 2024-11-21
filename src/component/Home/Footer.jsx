import React from 'react'
import footerlogo from "../../Assets/footerlogo.svg"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    
    <footer className='text-white h-32 font-inter text-base'>
        <div className='p-14'>
            
                <img src={footerlogo} alt="logo" />
            
            <div className='flex justify-between items-center my-10 '>
                <p className=''>405 Main St, Suite 712 Houston, Texas 77002</p>
                <ul className='flex justify-between items-center gap-10'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li> {/* About now clickable */}
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                </ul>

                
            </div>
            <div className='flex justify-between items-center text-[#92B2BF]'>
            <a href="mailto:info@sltxcapital.com" className=''>info@sltxcapital.com</a>
            <a href="#Back"> Back to top</a>
            </div>

        </div>
        <div>
            <hr className='border-gray-300 border-t' />
        </div>

        <div className='flex justify-between items-center p-14'>
            <p>© 2024, The Tarsadia Group, LLC. All rights reserved.</p>
            <a href="#linkedin">linkedin</a>
            <ul className='flex justify-between items-end gap-5'>
                <li>Privacy policy</li>
                <li>Terms of Use</li>
                <li>by noformat</li>
            </ul>
        </div>
        <hr className='border-gray-300 border-t'/>
    </footer>
  )
}

export default Footer