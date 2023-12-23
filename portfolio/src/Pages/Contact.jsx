import React from 'react'
import Image from '../Assets/pc-removebg-preview.png'


const Contact = () => {
  return (
    <div className="contact" name="contact">
    <div style={{backgroundImage: `url(${Image})`}}></div>
     <div className='contact-content'>
     <h1> Contact Us</h1>
     <form id='name' method='POST'>
      <label>Full Name</label>
      <input type='text' placeholder='Enter Full Name'/>
      <label>Email</label>
      <input type='email' placeholder='Enter Email' name='email'/>
      <label>Message</label>
      <textarea placeholder='Enter Your Message' type='text'></textarea>
       
      <button type='submit'>Send Message</button>

     </form>
           
     </div>
    </div>
  )
}

export default Contact
