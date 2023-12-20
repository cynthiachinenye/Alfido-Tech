import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const About = () => {
    const [open, setOpen] = useState(false);
    
    const eventHandler = (e) =>{
      e.preventDefault();
      setTimeout(() =>{
        setOpen(true)
      }, 3000)

    }


  return (
    <div className='about text-white pt-5'>
    <div >
    <h1>About Me</h1>
    <hr style={{width:'80px', border:'1px solid #fff',marginLeft:'10px'}}/>
   
    </div>
    <Button className='bg-success fs-3 border-none ' size='lg' onClick={eventHandler}>
    click Me
  </Button>
  <Collapse in={open} className='text px-5'>
    <div id="example-collapse-text  ">
    my name is cynthia Agu Ngozi, i am from Enugu State, Obinagu Udi to specific, first out of three children. i am a graduate of computer science from yaba college of Technology, i gratuated with upper credit.. I have a strong background in creating visual appealing and user-friendly web experiences. i am motivated to find a role where i can challenge myself and provide value to website users. i am a perfume vendor, supllies perfumes of all kinds and beads to many supermarkets and shops.I started my jounery into  tech as of  late 2022, was able to achieve  some goals espcially bulding static web sites using html and css, i gradually logining into dynamic responsive web pages, its over 2 months i dev into react js looking forward in making more  dynamic and know how react work and know how to manupulate react Dom and state management.
    started my uiux class some weeks back looking forward  for better understanding, looking forward in connecting with tech gurus and working with them, on my free time i watch movies love reading and enjoy cooking and travelling.
    
    </div>
  </Collapse>
  </div>

   
  )
}

export default About
