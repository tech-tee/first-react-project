import React, { useState } from 'react';
import './ServicesSection.css';
import itServicesImg from '../assets/images/pexels-nemuel-sereti-6424583.jpg';
import networkServicesImg from '../assets/images/pexels-brett-sayles-2881229.jpg';
import technicalSecurityImg from '../assets/images/Technical-Security-1.jpg';
import digitalMarketingImg from '../assets/images/digotal-marketing.jpg';
import cloudServicesImg from '../assets/images/cloud-internetdienste_blue_planet_studio_adobestock_362316663_1545px.jpg';
import collaborationSystemImg from '../assets/images/Live-Streaning.jpg';
import arrowIcon from '../assets/images/icons8-right-arrow-48.png';
import chevron from '../assets/images/right-arrow-6405.png';

const serviceData = {
  itservices: {
    image: itServicesImg,
    title: "IT Services",
    points: ["Software Application Development", "Software Installation", "Web Design and Development"],
    buttonText: "EXPLORE MORE",
  },
  networkservices: {
    image: networkServicesImg,
    title: "Network Services",
    points: ["Fiber-to-the-home", "Routing and Switching", "VOIP", "ISP"],
    buttonText: "EXPLORE MORE",
  },
  technicalsecurity: {
    image: technicalSecurityImg,
    title: "Technical Security",
    points: ["CCTV", "Intrusion Prevention", "Fire Detection", "Alarms"],
    buttonText: "EXPLORE MORE",
  },
  digitalmarketing: {
    image: digitalMarketingImg,
    title: "Digital Marketing",
    points: ["Social Media Marketing", "SEO", "Media Planning"],
    buttonText: "EXPLORE MORE",
  },
  collaborationsystem: {
    image: collaborationSystemImg,
    title: "Collaboration System",
    points: ["Team Communication", "Project Management", "File Sharing"],
    buttonText: "EXPLORE MORE",
  },
  cloudservices: {
    image: cloudServicesImg,
    title: "Cloud Services",
    points: ["Storage Infrastructure", "Cloud Hosting", "ERP/CRM"],
    buttonText: "EXPLORE MORE",
  },
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("itservices");

  return (
    <section className="services">
      <div className="ser-txt">
        <h2>Our Services</h2>
        <p>Explore our range of internet and digital solutions.</p>
      </div>
      <div className="ser-content">
        <div className="ser-list">
          <ul>
            {Object.keys(serviceData).map((service) => (
              <li
                key={service}
                onMouseEnter={() => setActiveService(service)}
                className={activeService === service ? "active" : ""}
              >
                <a href="#">{serviceData[service].title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="ser-images">
          {Object.entries(serviceData).map(([service, { image, title, points, buttonText }]) => (
            <div
              key={service}
              className={`ser-image ${activeService === service ? "visible" : ""}`}
              style={{
                backgroundImage: `linear-gradient(47deg, rgba(242, 57, 57, 0.7) 15%, rgba(3, 45, 171, 0.7) 57%), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
              }}
            >
              <div className="overlay">
                <h3>{title}</h3>
                <ul>
                  {points.map((point, index) => (
                    <li key={index}>
                      <img src={chevron} className="chevron"/> {point}
                    </li>
                  ))}
                </ul>
                <button>{buttonText}<img src={arrowIcon} className='arrow'/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
