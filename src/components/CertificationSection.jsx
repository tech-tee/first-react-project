import React from 'react';
import './CertificationSection.css'; 

const CertificationSection = () => {
  return (
    <section className="certification">
      <img 
        src="https://speedlinkng.com/wp-content/uploads/2024/02/pearson-vue-1.gif" 
        className="cert-img" 
        alt="Pearson VUE Certification" 
      />
      <div className="certification-text">
        <h3>Pursue Your Certification Dreams with Speedlink!</h3>
        <p>We’re excited to announce that we’re now an official Pearson VUE testing center! {<br />} Schedule your exam today and unlock your full potential.</p>
      </div>
      <button className="button1">
        <span className="button1-text">Get<br />Certified</span>
      </button>
    </section>
  );
};

export default CertificationSection;
