import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import logo from '../../assets/transparent-logo-yellow.svg'

const Menu = () => {
    return (
        <>
            <p><a href='/' className='home'>Wall-V</a></p>
            <p><a href='/about'>About</a></p>
            <p><a href="/blog">Blog</a></p>
            <p><a href='/services'>Services</a></p>
            <p><a href='/features'>Features</a></p>
            <p><a href='portfolio'>Portfolio</a></p>
            <p><a href='/skills'>Skills</a></p>
            <p><a href='/contact'>Contact Us</a></p>
        </>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
          <div className='navbar-links'>
              <div className='navbar-links_logo'>
                  <img src={logo} width={60} height={'auto'} alt='Wall-V Logo' />
              </div>
              <div className='navbar-links_container'>
                  <Menu />
              </div>
          </div>
          <div className="navbar-sign">
              <a href='/sign-in'><p>Sign In</p></a>
              <button type='button'>Sign Up</button>
          </div>
          <div className="navbar-menu">
              {
                  toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
              }
              {toggleMenu && <div className='navbar-menu_container scale-up-center'>
                  <div className='navbar-menu_container-links'>
                      <Menu />
                  </div>
                  <div className="navbar-menu_container-links-sign">
                    <a href='/sign-in'><p>Sign In</p></a>
                    <button type='button'>Sign Up</button>
                  </div>
              </div>}
          </div>
    </div>
  )
}

export default Navbar