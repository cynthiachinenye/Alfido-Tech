import React from 'react'
import Image from '../Assets/pc-removebg-preview.png'

const Contact = () => {
  return (
    <div className='contact'>
    <div className='us'>
    <img src={Image} alt='images'/>
    <div>
    <h1>Contact us</h1>
    <form action='method' className='form'>
    <div> 
    <label>Name:</label>
    <input type='text' placeholder="enter your fullname"/>

    </div>
    
    <div>
    <label>E-mail</label>
    <input type="email" placeholder='enter your mail'/>

    </div>
   
    <textarea placeholder='Message' id="text"></textarea>

    <button type='submit'>Submit</button>
    </form>

    </div>

    </div>
    
      
    </div>
  )
}

export default Contact
