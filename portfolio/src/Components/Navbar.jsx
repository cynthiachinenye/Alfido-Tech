import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-dark ">
    <Container>
      <Navbar.Brand href="#home" className='text-success fs-2'>CyndiDev...</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-success toggle-nav '/>
      <Navbar.Collapse id="basic-navbar-nav bg-light" className='text-left py-5'>
        <Nav className="me-auto content fs-5 ps-5">
          <Link to="#home" className='text-light ps-5'>Intro</Link>
          <Link to="#about" className='text-light ps-3'>About Me</Link>
          <Link to="#skill" className='text-light ps-3'>skills/tools</Link>
          <Link to="#projects" className='text-light ps-3'>Projects</Link>
          <Link to="#contact" className='text-light ps-3'>Contact Me</Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Hero
