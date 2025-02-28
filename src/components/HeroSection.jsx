import React from 'react';
import './HeroSection.css'; 
import arrowIcon from '../assets/images/right-arrow.png';
const HeroSection = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="https://speedlinkng.com/wp-content/uploads/2022/09/Circuit-27725.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-image">
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/tech-background-1.jpg" alt="Hero Image" />
      </div>
      <div className="hero-content">
        {/* <h1>We provide comprehensive IT solutions that make businesses stand out</h1>
        <p>We're a team of IT experts who help you transform and scale your organization</p>
        <br />
        <br /> */}
        <button className="cta-button2">
          <img src={arrowIcon} className="arrow" alt="Arrow" />
          <span>IT SOLUTIONS AND SERVICES</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
