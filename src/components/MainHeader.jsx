import React from 'react';
import './MainHeader.css'
import arrowIcon from '../assets/images/search-2903.png'

const MainHeader = () => {
  return (
    <section className="main-header">
      <div>
        <div className="logo">
          <img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" alt="Speedlink Hi-TECH" />
          <span className="logo-text">
            Speedlink Hi-TECH <br />
            Solutions Limited
          </span>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <div className="nav">
          <ul>
            <li>
              <button
                className="close-button"
                onClick={() => (document.getElementById('menu-toggle').checked = false)}
              >
                &times;
              </button>
            </li>
            <li className="parent">
              <a href="#">Home</a>
            </li>
            <li className="parent">
              <a href="#">About Us</a>
              <ul className="dropdown">
                <li><a href="#">Who we are</a></li>
                <li><a href="#">What we do</a></li>
                <li><a href="#">Why Speedlink</a></li>
                <li><a href="#">Meet our Team</a></li>
                <li><a href="#">Our partners & top Clients</a></li>
              </ul>
            </li>
            <li className="parent">
              <a href="#">Services</a>
              <ul className="dropdown">
                <li><a href="#">IT Services</a>
                  <ul className="sub-dropdown">
                    <li><a href="#">Software Application Development</a></li>
                    <li><a href="#">Web design/development</a></li>
                    <li><a href="#">Software Installations</a></li>
                  </ul>
                </li>
                <li><a href="#">Networking Services</a>
                  <ul className="sub-dropdown">
                    <li><a href="#">Fiber-to-the-home</a></li>
                    <li><a href="#">Routing and Switching</a></li>
                    <li><a href="#">Voice Over Internet Protocol - VOIP</a></li>
                    <li><a href="#">Internet Service Provider - ISP</a></li>
                  </ul>
                </li>
                <li><a href="#">Technical Security</a>
                  <ul className="sub-dropdown">
                    <li><a href="#">Video Surveillance (CCTV)</a></li>
                    <li><a href="#">Intrusion Prevention Systems</a></li>
                    <li><a href="#">Fire detection and fire extinguisher systems</a></li>
                    <li><a href="#">Alarm zs</a></li>
                  </ul>
                </li>
                <li><a href="#">Cloud Services</a>
                  <ul className="sub-dropdown">
                    <li><a href="#">Storage Infrastructure</a></li>
                    <li><a href="#">Cloud hosting</a></li>
                    <li><a href="#">Cloud based ERP/CRM</a></li>
                  </ul>
                </li>
                <li><a href="#">Digital Marketing</a>
                  <ul className="sub-dropdown">
                    <li><a href="#">Social Media Marketing</a></li>
                    <li><a href="#">Digital Advertising</a></li>
                    <li><a href="#">Media Planning and Buying</a></li>
                    <li><a href="#">Search Engine Optimization</a></li>
                  </ul>
                </li>
                <li><a href="#">Certified Training</a>
                  <ul className="sub-dropdown">
                    <li><a href="#">Mikrotik Certification</a></li>
                    <li><a href="#">CCTV Installation</a></li>
                    <li><a href="#">Web app development</a></li>
                    <li><a href="#">Web design and Development</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="parent">
              <a href="#">Case Study</a>
              <ul className="dropdown">
                <li><a href="#">Integration of Secured and Reliable Examination Platform.</a></li>
                <li><a href="#">Hybrid Learning Management</a></li>
              </ul>
            </li>
            <li className="parent">
              <a href="#">Products</a>
              <ul className="dropdown">
                <li><a href="#">Digi School</a></li>
                <li><a href="#">Speeducation</a></li>
                <li><a href="#">Speed ERP</a></li>
                <li><a href="#">SpeedAdmit</a></li>
              </ul>
            </li>
            <li className="parent">
              <a href="#">Resources</a>
              <ul className="dropdown">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Tech News</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Download Brochure</a></li>
              </ul>
            </li>
            <img src={arrowIcon} className="searchbutton" alt="search" />
            <button className="cta-button"><strong>Get in touch</strong></button>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MainHeader;
