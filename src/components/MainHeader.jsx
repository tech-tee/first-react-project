import React from 'react';
import './MainHeader.css'
import roundSquare from '../assets/images/rounded-square.png'
import arrowIcon from '../assets/images/search-2903.png'

const MainHeader = () => {
  return (
    <section className="main-header">
  <div className="nav">
    <div className="logo">
      <img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" alt="Logo" />
      <span className="logo-text">Speedlink Hi-TECH <br />Solutions Limited</span>
    </div>

    <div className="hamburgermenu">
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>
    </div>

    <div className="close-button">
      <button onClick={() => document.getElementById('menu-toggle').checked = false}>&times;</button>
    </div>

    <div className="nav-items">
      <div className="parent">
        <a href="#">Home</a>
      </div>
    </div>

    <div className="nav-items">
      <div className="parent">
        <a href="#">About Us</a>
      </div>
      <div className="dropdown">
        <div>
          <a href="#">
            <h5>Who we are</h5>
            <p>Our history, mission, vision and values.</p>
          </a>
        </div>
        <div>
          <a href="#">
            <h5>What we do</h5>
            <p>Learn more about the wide range of IT services we offer.</p>
          </a>
          <hr />
        </div>
        <div>
          <a href="#">
            <h5>Why Speedlink</h5>
            <p>We provide ICT solutions that make your business stand out...</p>
          </a>
          <hr />
        </div>
        <div>
          <a href="#">
            <h5>Meet our Team</h5>
            <p>Meet our decent hardworking team members.</p>
          </a>
          <hr />
        </div>
        <div>
          <a href="#">
            <h5>Our partners & top Clients</h5>
            <p>View our partner companies and top clients</p>
          </a>
          <hr />
        </div>
      </div>
    </div>

    <div className="nav-items">
      <div className="parent">
        <a href="#">Services</a>
      </div>
      <div className="dropdown">
        <div className="sub-dropdown">
          <h5>IT Services</h5>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Software Application Development</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Web design/development</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Software Installations</span></a></li>
        </div>
        <div className="sub-dropdown">
          <h5>Networking Services</h5>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Fiber-to-the-home</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Routing and Switching</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Voice Over Internet Protocol - VOIP</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Internet Service Provider - ISP</span></a></li>
        </div>
        <div className="sub-dropdown">
          <h5>Technical Security</h5>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Video Surveillance (CCTV)</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Intrusion Prevention Systems</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Fire detection and fire extinguisher systems</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Alarm zs</span></a></li>
        </div>
        <div className="sub-dropdown">
          <h5>Cloud Services</h5>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Storage Infrastructure</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Cloud hosting</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Cloud-based ERP/CRM</span></a></li>
        </div>
        <div className="sub-dropdown">
          <h5>Digital Marketing</h5>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Social Media Marketing</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Digital Advertising</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Media Planning and Buying</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Search Engine Optimization</span></a></li>
        </div>
        <div className="sub-dropdown">
          <h5>Certified Training</h5>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Mikrotik Certification</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>CCTV Installation</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Web app development</span></a></li>
          <li><img src={roundSquare} alt="icon" /><a href="#"><span>Web design and Development</span></a></li>
        </div>
      </div>
    </div>

    <div className="nav-items">
      <div className="parent">
        <a href="#">Case Study</a>
      </div>
      <div className="dropdown">
        <li><a href="#">Integration of Secured and Reliable Examination Platform.</a></li>
        <li><a href="#">Hybrid Learning Management</a></li>
      </div>
    </div>

    <div className="nav-items">
      <div className="parent">
        <a href="#">Products</a>
      </div>
      <div className="dropdown">
        <li><a href="#">Digi School</a></li>
        <li><a href="#">Speeducation</a></li>
        <li><a href="#">Speed ERP</a></li>
        <li><a href="#">SpeedAdmit</a></li>
      </div>
    </div>

    <div className="nav-items">
      <div className="parent">
        <a href="#">Resources</a>
      </div>
      <div className="dropdown">
        <li><a href="#">Blog</a></li>
        <li><a href="#">Tech News</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Download Brochure</a></li>
      </div>
    </div>

    <img src={arrowIcon} className="searchbutton" alt="search" />
    <button className="cta-button"><span>Get in touch</span></button>
  </div>
</section>

  );
}

export default MainHeader;
