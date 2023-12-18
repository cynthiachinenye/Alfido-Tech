import React from 'react'
import Image from '../Assets/pc-removebg-preview.png'

const Contact = () => {
  return (
    <div className='contact'>
    <div className='us'>
    <img src={Image} alt='images'/>
    <div>
    <h1>Contact us</h1>
    <form action='method'>
    <label>Name</label>
    <input type='text' placeholder="enter your fullname"/>

    <label>E-mail</label>
    <input type="email" placeholder='enter your mail'/>

    <textarea placeholder='Message'></textarea>
    </form>

    </div>

    </div>
    
      
    </div>
  )
}

export default Contact
