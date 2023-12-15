import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaGitAlt, FaHtml5, FaCss3, FaSass,FaBootstrap, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";


const Skills = () => {
  return (
    <div className='skills '>
    <Container fluid>
    <h2>My Skills</h2>
    <hr style={{width:'80px', border:'1px solid #fff',marginLeft:'10px'}}/>
    <p>Here are some of the tools i've worked with over the months, for my personal, professional and open source projects</p>
    <Row>
    <Col sm>
    <div className='icons'>
      <p><FaHtml5 className='icon'/> Html</p>
    </div>
    
    </Col>
    <Col sm>
    <div className='icons'>
      <p><FaCss3 className='icon1'/> Css</p>
    </div>
    
    </Col>
    <Col sm>
    <div className='icons'>
      <p><FaGitAlt className='icon2'/> Git</p>
    </div>
    
    </Col>
    
    <Col sm>
    <div className='icons'>
      <p><IoLogoJavascript className='icon'/> JavaScript</p>
    </div>
    
    </Col>
    
    <Col sm>
    <div className='icons'>
      <p><FaSass className='icon3'/> Sass</p>
    </div>
    
    </Col>
    
    <Col sm>
    <div className='icons'>
      <p><FaBootstrap className='icon2'/> Bootstrap</p>
    </div>
    
    </Col>
    <Col sm>
    <div className='icons'>
      <p><FaReact  className='icon4'/> React</p>
    </div>
    
    </Col>
    
    
    
    </Row>
    </Container>
      
    </div>
  )
}

export default Skills
