import React from 'react'
import { NavLink  } from 'react-router-dom'
import './Header.css'
import Logo from '../../images/logo.svg'

const Header = () => (
  <div className='Header'>
    <div className='Header-box'>
      <div className='Logo'>
        <div className='box'>
          <img src={Logo} alt='Logo' />
        </div>
      </div>
      <div className='Nav'>
        <ul>
            <li>
              <NavLink to='/home' activeClassName='Nav-active'>HOME</NavLink>
            </li>
            <li>
              <NavLink to='/about' activeClassName='Nav-active'>ABOUT</NavLink>
            </li>
          </ul>
      </div>
    </div>
  </div>
)

export default Header
