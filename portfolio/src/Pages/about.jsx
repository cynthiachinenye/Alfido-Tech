import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const About = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className='about text-white pt-5'>
    <div >
    <h1>About Me</h1>
    <hr style={{width:'80px', border:'1px solid #fff',marginLeft:'10px'}}/>
   
    </div>
    <Button className='bg-success fs-3 border-none ' size='lg'
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
    click Me
  </Button>
  <Collapse in={open} className='text px-5'>
    <div id="example-collapse-text  ">
    my name is cynthia Agu Ngozi, i am from Enugu State, Obinagu Udi to specific, first out of three children. i am a graduate of computer science from yaba college of Technology, i gratuated with upper credit..  i am a perfume vendor, supllies perfumes of all kinds and beads to many supermarkets and shops.I started my jounery into  tech as of  late 2022, was able to achieve my some goals espcially bulding static web sites using html and css, i gradually logining into dynamic responsive web pages, its over 2 months i dev into react js looking forward in making more  dynamic and know how react work and know how to manupulate reac Dom and state management.
    started my uiux class some weeks back looking forward  for better understanding .
    
    </div>
  </Collapse>
  </div>

   
  )
}

export default About
