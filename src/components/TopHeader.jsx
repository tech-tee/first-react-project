import React from 'react';
import './TopHeader.css'; 
import facebookLogo from '../assets/images/facebook-logo-108.png';
import twitterLogo from '../assets/images/twitter-logo-2429.png';
import linkedinLogo from '../assets/images/linkedin-112.png';
import instagramLogo from '../assets/images/black-instagram-logo-3497.png';
import phoneIcon from '../assets/images/phone-331.png';
import emailIcon from '../assets/images/message-324.png';

const TopHeader = () => {
  return (
    <section className="topheader">
      <header className="top-header">
        <div className="container">
          <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
          </div>
          <div className="c-info">
            <a href="tel:+2340167716220" className="contact">
              <span>
                <img src={phoneIcon} className="phone-button" alt="Phone" />
              </span>
              <span className="phnum">tel:+2340167716220</span>
            </a>
            <a href="mailto:info@speedlingng.com" className="email">
              <span>
                <img src={emailIcon} className="email-button" alt="Email" />
              </span>
              <span className="emailacc">info@speedlingng.com</span>
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default TopHeader;
