import React from 'react'
import foooterimg from '../../Assets/footerlogo.svg'
const Nav = () => {
  return (
    <div className='pl-14'   >
        <div className=''>  
            <img src={foooterimg} alt="logo" />
        </div>
        < div className=' text-white flex justify-start items-center mt-16 ' >
        
            <ul className='text-[84px] font-bold'>
                <li>Team</li>
                <li>Portfolio</li>
                <li> Our Strategies</li>
                <li> Contact Us</li>
            </ul>    
            <div className=''>
            <p>405 Main St, Suite 712 Houston, Texas 77002</p>
            <a href="mailto:info@sltxcapital.com" className='text-[#92B2BF] gap-5'>info@sltxcapital.com</a>
            </div>
    </div>
    </div>
  )
}

export default Nav;
