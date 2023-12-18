import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaGitAlt, FaHtml5, FaCss3, FaSass, FaBootstrap, FaReact,  FaFigma } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";


const Skills = () => {
  const now = 90;
  const css = 85;
  const js = 65;
  const gx = 15;
  const html = 50;


  return (
    <div className='skills '>
      <Container fluid>
        <h2>My Skills</h2>
        <hr style={{ width: '80px', border: '1px solid #fff', marginLeft: '10px' }} />
        <p>Here are some of the tools i've worked with over the months, for my personal, professional and open source projects</p>
        <Row>
          <Col sm>
            <div className='d-flex  align-items-center m-3'>
              <div className='icons'>
              <FaHtml5 className='icon' />
                <p> Html</p>

              </div>
              <ProgressBar now={now} label={`${now}%`} className='progress ms-2 ' variant="success" />
            </div>

          </Col>
          <Col sm >
            <div className='d-flex align-items-center m-3'>
              <div className='icons'>
              <FaCss3 className='icon1' />
                <p> Css</p>
              </div>
              <ProgressBar now={css} label={`${css}%`} className='progress ms-2 '   variant="success"/>
            </div>
          </Col>

          <Col sm>
            <div className='d-flex  align-items-center m-3'>
              <div className='icons'>
              <FaGitAlt className='icon2 ' />
                <p> Git</p>
              </div>
              <ProgressBar now={gx} label={`${gx}%`} className='progress ms-2'  variant="warning"/>
            </div>
          </Col>

          <Col sm>
            <div className='d-flex align-items-center m-3'>
              <div className='icons'>
              <IoLogoJavascript className='icon' /> 
                <p>JavaScript</p>
              </div>
              <ProgressBar now={js} label={`${js}%`} className='progress ms-2'  variant="danger"/>
            </div>
          </Col>

          <Col sm>
            <div className='d-flex  align-items-center m-3'>
              <div className='icons'>
              <FaSass className='icon3' />
                <p> Sass</p>
              </div>
              <ProgressBar now={html} label={`${html}%`} className='progress ms-2' variant="info" />
            </div>
          </Col>

          <Col sm>
            <div className='d-flex  align-items-center m-3'>
              <div className='icons'>
              <FaBootstrap className='icon2' />
                <p> Bootstrap</p>
              </div>
              <ProgressBar now={html} label={`${html}%`} className='progress ms-2'  variant="info"/>
            </div>
          </Col>
          <Col sm>
            <div className='d-flex  align-items-center m-3'>
              <div className='icons'>
            <FaReact className='icon4' />
                <p> React</p>
              </div>
              <ProgressBar now={js} label={`${js}%`} className='progress ms-2'  variant="danger" />
            </div>
          </Col>

          <Col sm>
            <div className='d-flex  align-items-center m-3'>
              <div className='icons'>
              <FaFigma className='icon4' />
                <p> Figma</p>
              </div>
              <ProgressBar now={gx} label={`${gx}%`} className='progress ms-2'  variant="warning"/>
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
