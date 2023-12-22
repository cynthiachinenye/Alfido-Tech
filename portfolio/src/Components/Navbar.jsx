import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'


const Hero = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-dark ">
    <Container>
      <Navbar.Brand href="#home" className='text-success fs-2'>CyndiDev...</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-success toggle-nav '/>
      <Navbar.Collapse id="basic-navbar-nav bg-light" className='text-left py-5'>
        <Nav className="me-auto content fs-5 ps-5">
        <ul>
         <li> <a href="#home" className='text-light ps-5'>Intro</a></li>
         <li> <a href="#about" className='text-light ps-3'>About Me</a></li>
         <li> <a href="#skill" className='text-light ps-3'>skills/tools</a></li>
         <li> <a href="#projects" className='text-light ps-3'>Projects</a></li>
         <li> <a href="#contact" className='text-light ps-3'>Contact Me</a></li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Hero
