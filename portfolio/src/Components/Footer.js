import React from 'react'
import { FaFacebook,FaLinkedin,FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
    <hr/>
    <div className='division'>
    <p>&copy; copyright with cyndyDev</p>
    <div className='socials'>
       <a href='https://web.facebook.com/profile.php?id=100008745705403'><FaFacebook/></a>
       <a href='https://www.linkedin.com/in/cynthia-agu-6aa13a172/'><FaLinkedin/></a>
       <a href='https://twitter.com/cyndyblesstech'><FaXTwitter/></a>
       <a href='https://www.tiktok.com/@cyndi_bless?lang=en'><FaTiktok/></a>
    </div>
    </div>
      
    </div>
  )
}

export default Footer
