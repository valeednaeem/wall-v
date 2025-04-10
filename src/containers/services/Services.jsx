import React from 'react'
import './services.css'
const Services = () => {
  return (
    <div className='section'>
      <h1 className='gradient__text container__header'>My Services</h1>
      <div className='services'>
        <div className='container'>
          <div className='service'>
            <i className="fas fa-code"></i>
            <h2>Web Development</h2>
            <p>Building responsive and user-friendly websites.</p>
          </div>
          <div className='service'>
            <i className="fas fa-camera"></i>
            <h2>Web Hosting</h2>
            <p>Reliable and secure hosting solutions for your website.</p>
          </div>
          <div className='service'>
            <i className="fas fa-mobile-alt"></i>
            <h2>Mobile Development</h2>
            <p>Creating mobile applications for Android and iOS.</p>
          </div>
          <div className='service'>
            <i className="fas fa-lock"></i>
            <h2>Debuging</h2>
            <p>Identifying and fixing bugs in your code.</p>
          </div>
          <div className='service'>
            <i className="fas fa-paint-brush"></i>
            <h2>UI/UX Design</h2>
            <p>Designing intuitive and engaging user interfaces.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services