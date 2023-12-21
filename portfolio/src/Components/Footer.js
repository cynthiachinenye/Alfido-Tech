import React from 'react'
import { FaFacebook,FaLinkedin,FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
    <hr/>
    <div className='division'>
    <p>&copy; copyright with cyndyDev</p>
    <div className='socials'>
       <Link to={'https://web.facebook.com/profile.php?id=100008745705403'}><FaFacebook/></Link>
       <Link to={'https://www.linkedin.com/in/cynthia-agu-6aa13a172/'}><FaLinkedin/></Link>
       <Link to={'https://twitter.com/cyndyblesstech'}><FaXTwitter/></Link>
       <Link to={'https://www.tiktok.com/@cyndi_bless?lang=en'}><FaTiktok/></Link>
    </div>
    </div>
      
    </div>
  )
}

export default Footer
