import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="ser-txt">
        <h2>Services we offer</h2>
        <p>We offer a wide range of specialized services designed to meet your goals</p>
      </div>
      <div className="ser-content">
        <div className="ser-list">
          <ul>
            <li className="hover-item" data-service="itservices">
              <a href="#itservices">IT Services</a>
            </li>
            <li className="hover-item" data-service="networkservices">
              <a href="#networkservices">Network Services</a>
            </li>
            <li className="hover-item" data-service="technicalsecurity">
              <a href="#technicalsecurity">Technical Security</a>
            </li>
            <li className="hover-item" data-service="digitalmarketing">
              <a href="#digitalmarketing">Digital Marketing</a>
            </li>
            <li className="hover-item" data-service="cloudservices">
              <a href="#cloudservices">Cloud Services</a>
            </li>
            <li className="hover-item" data-service="collaborationsystem">
              <a href="#collaborationsystem">Collaboration System</a>
            </li>
          </ul>
        </div>
        <div className="ser-images">
          {/* IT Services section */}
          <div className="ser-image" id="itservices">
            <div className="overlay">
              <h3>IT SERVICES</h3>
              <ul>
                <li><span className="chevron">&gt;</span> Software Application Development</li>
                <li><span className="chevron">&gt;</span> Software Installation</li>
                <li><span className="chevron">&gt;</span> Web Design and Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
