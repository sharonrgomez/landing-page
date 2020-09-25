import React from 'react'
import logo from './assets/logo.png'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='brand'>
          <img className='logo' src={logo} alt='company logo' />
          <div className='brand__text'>
            <span className='title'>Landeux</span>
            <span className='subtitle'>Landing page template</span>
          </div>
        </div>
        <ul className='links'>
          <li>About</li>
          <li>Features</li>
          <li>Use case</li>
          <li>Pricing</li>
          <div className='versions'>
            <li className='outlined'>Free Version</li>
            <li className='filled'>Pro Version</li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
