import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Hero = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-dark ">
    <Container>
      <Navbar.Brand href="#home" className='text-success fs-2'>Cyndi...</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-success'/>
      <Navbar.Collapse id="basic-navbar-nav bg-light">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
          <Nav.Link href="#about" className='text-light'>About Me</Nav.Link>
          <Nav.Link href="#projects" className='text-light'>Projects</Nav.Link>
          <Nav.Link href="#contact" className='text-light'>Contact Me</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Hero
