import React from 'react';
import searchbutton from '../assets/images/search-2903.png';
import roundSquare from '../assets/images/rounded-square.png';
import './MainHeader.css'; 
const MainHeader = () => {
  const closeMenu = () => {
    document.getElementById('menu-toggle').checked = false;
  };

  return (
    <section className="main-header">
      <div>
        <div className="logo">
          <img src="https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png" alt="Speedlink Hi-TECH Solutions Limited" />
          <span className="logo-text">
            Speedlink Hi-TECH <br /> Solutions Limited
          </span>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <div className="nav">
            <div>
              <button className="close-button" onClick={closeMenu}>
                &times;
              </button>
            </div>
            <div className="parent">
              <a href="#">Home</a>
            </div>
            <div className="parent">
              <a href="#">About Us</a>
              <div className="dropdown">
                <span><a href="#">Who we are</a></span>
                <span><a href="#">What we do</a></span>
                <span><a href="#">Why Speedlink</a></span>
                <span><a href="#">Meet our Team</a></span>
                <span><a href="#">Our partners & top Clients</a></span>
              </div>
            </div>
            <div className="parent">
                <a href="#">Services</a>
                <div className="dropdown">
                  <div><h5>IT Services</h5></div>
                    <div className="sub-dropdown">
                      <span><img src={roundSquare}/>Software Application Development</span><br></br>
                      <span><img src={roundSquare}/>Web design/development</span><br></br>
                      <span><img src={roundSquare}/>Software Installations</span>
                    </div>
                  <div><h5 href="#">Networking Services</h5></div>
                    <div className="sub-dropdown">
                      <span><img src={roundSquare}/>Fiber-to-the-home</span><br></br>
                      <span><img src={roundSquare}/>Routing and Switching</span><br></br>
                      <span><img src={roundSquare}/>Voice Over Internet Protocol - VOIP</span><br></br>
                      <span><img src={roundSquare}/>Internet Service Provider - ISP</span><br></br>
                    </div>
                  <div><h5 href="#">Technical Security</h5></div>
                    <div className="sub-dropdown">
                      <span><img src={roundSquare}/>Video Surveillance (CCTV)</span><br></br>
                      <span><img src={roundSquare}/>Intrusion Prevention Systems</span><br></br>
                      <span><img src={roundSquare}/>Fire detection and fire extinguisher systems</span><br></br>
                      <span><img src={roundSquare}/>Alarm zs</span>
                    </div>
                  <div><h5 href="#">Cloud Services</h5></div>
                    <div className="sub-dropdown">
                      <span><img src={roundSquare}/>Storage Infrastructure</span><br></br>
                      <span><img src={roundSquare}/>Cloud hosting</span><br></br>
                      <span><img src={roundSquare}/>Cloud based ERP/CRM</span><br></br>
                    </div>
                  <div><h5 href="#">Digital Marketing</h5></div>
                    <div className="sub-dropdown">
                      <span><img src={roundSquare}/>Social Media Marketing</span><br></br>
                      <span><img src={roundSquare}/>Digital Advertising</span><br></br>
                      <span><img src={roundSquare}/>Media Planning and Buying</span><br></br>
                      <span><img src={roundSquare}/>Search Engine Optimization</span>
                    </div>
                  <div><h5 href="#">Certified Training</h5></div>
                    <div className="sub-dropdown">
                      <span><img src={roundSquare}/>Mikrotik Certification</span><br></br>
                      <span><img src={roundSquare}/>CCTV Installation</span><br></br>
                      <span><img src={roundSquare}/>Web app development</span><br></br>
                      <span><img src={roundSquare}/>Web design and Development</span>
                    </div>
                </div>
              </div>
            <div className="parent">
                <a href="#">Case Study</a></div>
                <div className="dropdown">
                  <span>Integration of Secured and Respanable Examination Platform.</span>
                  <span>Hybrid Learning Management</span>
                </div>
              <div className="parent">
                <a href="#">Products</a>
                </div>
                <div className="dropdown">
                  <span><a href="#">Digi School</a></span>
                  <span><a href="#">Speeducation</a></span>
                  <span><a href="#">Speed ERP</a></span>
                  <span><a href="#">SpeedAdmit</a></span>
                </div>
              <div className="parent">
                <a href="#">Resources</a></div>
                <div className="dropdown">
                  <span><a href="#">Blog</a></span>
                  <span><a href="#">Tech News</a></span>
                  <span><a href="#">Gallery</a></span>
                  <span><a href="#">Download Brochure</a></span>
                </div>
              <img src={searchbutton} className="searchbutton" alt="Search" />
              <button className="cta-button"><strong>Get in touch</strong></button>
          </div>
      </div>
    </section>
  );
};

export default MainHeader;
