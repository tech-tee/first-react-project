import React from 'react';
import './Body1.css';
import buttonIcon from '../assets/images/icons8-paper-60.png';
import imageSec from '../assets/images/Speed-web-01-1024x682.jpg';

const Body1 = () => {
  return (
    <section className="body1">
      <div className="text-section">
        <h6>SPEEDLINK HI-TECH SOLUTIONS LIMITED</h6>
        <h1>A complete Solution<br /> IT provider</h1>
        <p>
          Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems provider, known for providing clients with Enterprise world-class solutions addressing their local business needs. We deliver positive,<br /> rapid and the best return on investment “ROI” solutions for our customers.
        </p>
        <button className="cret-button">
          <span className="button-text">Who we are</span>
          <img src={buttonIcon} alt="Button Icon" />
        </button>
      </div>
      <img src={imageSec} className="image-section" alt="Speedlink Web" />
    </section>
  );
}

export default Body1;
