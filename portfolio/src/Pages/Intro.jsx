import React, { useEffect, useRef } from 'react'
import image from '../Assets/pc-removebg-preview.png'
import {init} from 'ityped'
import {Element} from "react-scroll"

const Home = () => {
    const element = useRef()
    useEffect(() => {
        init(element.current,{
            showCursor:true,
            backDelay:2000,
            backSpeed: 1000,
            strings:['Frontend Designer'],})
    },[])
  return (
    <Element className='container' name="home" >
    
   
    <div className='contents text-white '>
    <h1>hello 🤍, I am Cynthia Agu </h1>
    <h3> A Junior <span ref={element}></span></h3>
    </div>
      <div className='image'>
      <img src={image}alt='images'/>
      </div>
     
     
    </Element>
  )
}

export default Home
