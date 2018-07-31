import React from 'react'
import './About.css'
import AboutM from './About.module.scss'

const About = () => (
  <div className='About'>
    <div className='About-con'>
      <div>HELLO ABOUT</div>
      <div className={ AboutM.test }>
        CSS MODULES AND SCSS
      </div>
    </div>
  </div>
)

export default About
