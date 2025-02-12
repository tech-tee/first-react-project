import React from 'react';
import './ClientSection.css';

const ClientSection = () => {
  return (
    <section className="clients">
      <div className="client-txt">
        <h2>Our Top Clients</h2>
        <div className="custom-divider2">
          <span className="dot1"></span>
          <span className="dot1"></span>
          <span className="dot1"></span>
          <div className="rectangle2"></div>
        </div>
        <p>Meet our happy clients</p>
      </div>
      <div className="client-img">
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/primerose-highschool.png" alt="Primerose High School" />
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/redeemers-high-school.png" alt="Redeemer's High School" />
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/SPH-LOGO.png" alt="SPH Logo" />
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/cefor-logo.png" alt="Cefor Logo" />
        {/* Uncomment these images if needed
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/cgrp-logo.png" alt="CGRP Logo" />
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/laser-engineering-2.png" alt="Laser Engineering Logo" />
        <img src="https://speedlinkng.com/wp-content/uploads/2022/09/FAST-LOGO.png" alt="FAST Logo" />
        */}
      </div>
    </section>
  );
};

export default ClientSection;
