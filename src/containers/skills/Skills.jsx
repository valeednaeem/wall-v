import React from 'react'
import './skills.css'
//html icons
import html from './img/w3_html5-ar21.png'
import htmlMob from './img/mobile/w3_html5-icon.png'
//css icons
import css from './img/w3_css-ar21.png'
import cssMob from './img/mobile/w3_css-icon.png'
//javascript icons
import javascript from './img/javascript.png'
import javascriptMob from './img/mobile/javascript-js.png'
//jquery icons
import jquery from './img/jquery-ar21.png'
import jqueryMob from './img/mobile/jquery-icon.png'
//php icons
import php from './img/php-ar21.png'
import phpMob from './img/mobile/php-icon.png'
//phpmyadmin icons
import phpMyAdmin from './img/phpmyadmin-ar21.png'
import phpMyAdminMob from './img/mobile/phpmyadmin-icon.png'
//wordpress icons
import wordpress from './img/wordpress-ar21.png'
import wordpressMob from './img/mobile/wordpress-icon.png'
//cordova icons
import cordova from './img/apache_cordova-ar21.png'
import cordovaMob from './img/mobile/apache_cordova-icon.png'
//apache icons
import apache from './img/apache-official.png'
import apacheMob from './img/mobile/apache-icon.png'
//linux icons
import linux from './img/linux-ar21.png'
import linuxMob from './img/mobile/linux-icon.png'
//react icons
import react from './img/reactjs-ar21.png'
import reactMob from './img/mobile/reactjs-icon.png'
//next icons
import next from './img/nextjs-ar21.png'
import nextMob from './img/mobile/nextjs-icon.png'
//nodejs icons
import node from './img/nodejs-ar21.png'
import nodeMob from './img/mobile/nodejs-icon.png'
//mongodb icons
import mongodb from './img/mongodb-ar21.png'
import mongodbMob from './img/mobile/mongodb-icon.png'
//tailwindcss icons
import tailwindCss from './img/tailwindcss-ar21.png'
import tailwindCssMob from './img/mobile/tailwindcss-icon.png'
//xampp icons for both mobile and desktop devices
import xampp from './img/xampp-logo.png'

const Skills = () => {
    return (

          <div className='slider section'>
            <h1 className='gradient__text'>My Skills</h1>
            <p className='gradient__text'>I have experience with the following technologies:</p>
            <div className="list">
                  <div className="item item1">
                        <img src={html} alt='HTML Logo' className="Desk" />
                        <img src={htmlMob} alt='HTML Logo' className="Mob" />
                  </div>
                  <div className="item item2">
                        <img src={css} alt='CSS Logo' className="Desk" />
                        <img src={cssMob} alt='CSS Logo' className="Mob" />
                  </div>
                  <div className="item item3">
                        <img src={javascript} alt='JS Logo' className="Desk" />
                        <img src={javascriptMob} alt='JS Logo' className="Mob" />
                  </div>
                  <div className="item item4">
                        <img src={jquery} alt='jQuery Logo' className="Desk" />
                        <img src={jqueryMob} alt='jQuery Logo' className="Mob" />
                  </div>
                  <div className="item item5">
                        <img src={php} alt="PHP Logo" className="Desk" />
                        <img src={phpMob} alt="PHP Logo" className="Mob" />
                  </div>
                  <div className="item item6">
                        <img src={phpMyAdmin} alt="phpMyAdmin Logo" className="Desk" />
                        <img src={phpMyAdminMob} alt="phpMyAdmin Logo" className="Mob" />
                  </div>
                  <div className="item item7">
                        <img src={wordpress} alt="Wordpress Logo" className="Desk" />
                        <img src={wordpressMob} alt="Wordpress Logo" className="Mob" />
                  </div>
                  <div className="item item8">
                        <img src={apache} alt="Apache Logo" className="Desk" />
                        <img src={apacheMob} alt="Apache Logo" className="Mob" />
                  </div>
                  <div className="item item9">
                        <img src={xampp} alt="Xampp Logo" />
                  </div>
                  <div className="item item10">
                        <img src={cordova} alt="Cordova Logo" className="Desk" />
                        <img src={cordovaMob} alt="Cordova Logo" className="Mob" />
                  </div>
                  <div className="item item11">
                        <img src={linux} alt="Linux Logo" className="Desk" />
                        <img src={linuxMob} alt="Linux Logo" className="Mob" />
                  </div>
                  <div className="item item12">
                        <img src={node} alt="Node Logo" className="Desk" />
                        <img src={nodeMob} alt="Node Logo" className="Mob" />
                  </div>
                  <div className="item item13">
                        <img src={react} alt="ReactJS Logo" className="Desk" />
                        <img src={reactMob} alt="ReactJS Logo" className="Mob" />
                  </div>
                  <div className="item item14">
                        <img src={mongodb} alt="MongoDB Logo" className="Desk" />
                        <img src={mongodbMob} alt="MongoDB Logo" className="Mob" />
                  </div>
                  <div className="item item15">
                        <img src={next} alt="NextJS Logo" className="Desk" />
                        <img src={nextMob} alt="NextJS Logo" className="Mob" />
                  </div>
                  <div className="item item16">
                        <img src={tailwindCss} alt="Tailwind CSS Logo" className="Desk" />
                        <img src={tailwindCssMob} alt="Tailwind CSS Logo" className="Mob" />
                  </div>
            </div>
        </div>

    )
}

export default Skills