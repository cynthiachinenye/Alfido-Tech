import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


const Hero = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-dark ">
    <Container>
      <Navbar.Brand href="#home" className='text-success fs-2'>CyndiDev...</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-success toggle-nav '/>
      <Navbar.Collapse id="basic-navbar-nav bg-light" className='text-left py-5'>
        <Nav className="me-auto content fs-5 ps-5" activeKey="/home">
        <Nav.Item>
          <Link to="/" className='text-light ps-5 ' smooth={true} duration={500}>Intro</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="about" className='text-light ps-3' smooth={true} duration={500} >About Me</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="skill" className='text-light ps-3' smooth={true} duration={500}>skills/tools</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="contact" className='text-light ps-3'  smooth={true} duration={500}>Contact Me</Link>
          </Nav.Item> 
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Hero
