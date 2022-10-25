import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import logo from '../../assets/logo-lg.png'


const About = () => {
  return (
    <div className="home-wrapper">
        <Navigation/>
        <div className="home-content-wrapper d-flex justify-content-around">
          <img className='about-brand' src={logo} alt='Penny Nichols Logo'/>
          <div className='about-info'>
              <p className='title display-6 text-center mt-5'>About Software Developer</p> 
              <p className='title display-5 text-center fw-bold'>Penny Nichols</p>
              <div className='border rounded text-end p-5'>
                
              </div>
              
          </div>
        </div>
    </div>
  )
}

export default About
