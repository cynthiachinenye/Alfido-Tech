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
      <p><span><FaHtml5 className='icon'/></span> Html</p>
    </div>
    
    </Col>
    <Col sm>
    <div className='icons'>
      <p><span><FaCss3 className='icon1'/></span> Css</p>
    </div>
    
    </Col>
    <Col sm>
    <div className='icons'>
      <p><span><FaGitAlt className='icon2'/></span> Git</p>
    </div>
    
    </Col>
    
    <Col sm>
    <div className='icons'>
      <p><span><IoLogoJavascript className='icon'/> </span>JavaScript</p>
    </div>
    
    </Col>
    
    <Col sm>
    <div className='icons'>
      <p><span><FaSass className='icon3'/></span> Sass</p>
    </div>
    
    </Col>
    
    <Col sm>
    <div className='icons'>
      <p><span><FaBootstrap className='icon2'/></span> Bootstrap</p>
    </div>
    
    </Col>
    <Col sm>
    <div className='icons'>
      <p><span><FaReact  className='icon4'/></span> React</p>
    </div>
    
    </Col>
    
    
    
    </Row>
    <Row>
    
    </Row>
    </Container>
      
    </div>
  )
}

export default Skills
