import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Hero = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-dark ">
    <Container>
      <Navbar.Brand href="#home" className='text-success fs-2'>CyndiDev...</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-success toggle-nav '/>
      <Navbar.Collapse id="basic-navbar-nav bg-light" className='text-left py-5'>
        <Nav className="me-auto content fs-5 ps-5">
          <Nav.Link href="#home" className='text-light ps-5'>Intro</Nav.Link>
          <Nav.Link href="#about" className='text-light ps-3'>About Me</Nav.Link>
          <Nav.Link href="#about" className='text-light ps-3'>skills/tools</Nav.Link>
          <Nav.Link href="#projects" className='text-light ps-3'>Projects</Nav.Link>
          <Nav.Link href="#contact" className='text-light ps-3'>Contact Me</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Hero
