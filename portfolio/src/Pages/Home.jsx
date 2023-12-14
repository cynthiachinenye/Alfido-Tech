import React, { useEffect, useRef } from 'react'
import image from '../Assets/pc-removebg-preview.png'
import {init} from 'ityped'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    const element = useRef()
    useEffect(() => {
        init(element.current,{
            showCursor:true,
            backDelay:2000,
            backSpeed: 1000,
            strings:['Frontend Designer', 'UI/UX Designer', 'Wordpress Designer'],})
    },[])
  return (
    <Container className='intro '>
    <Row>
    <div className='contents text-white '>
    <h1>hello 🤍, I am Cyndi </h1>
    <h3> A Freelance <span ref={element}></span></h3>
    </div>
      <div className='image'>
      <img src={image}alt='images'/>
      </div>

      </Row>
    </Container>
  )
}

export default Home
