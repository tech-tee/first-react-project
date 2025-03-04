import React, { useState } from 'react';
import './ServicesSection.css';
import itServicesImg from '../../assets/images/pexels-nemuel-sereti-6424583.jpg';
import networkServicesImg from '../../assets/images/pexels-brett-sayles-2881229.jpg';
import technicalSecurityImg from '../../assets/images/Technical-Security-1.jpg';
import digitalMarketingImg from '../../assets/images/digotal-marketing.jpg';
import cloudServicesImg from '../../assets/images/cloud-internetdienste_blue_planet_studio_adobestock_362316663_1545px.jpg';
import collaborationSystemImg from '../../assets/images/Live-Streaning.jpg';
import certifiedTrainingImg from '../../assets/images/lecture.jpg';
import arrowIcon from '../../assets/images/right-arrow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
    points: ["Routing and Switchin", "VOIP - Voice over Internet Protocol", "Fibre to the home", "ISP - Internet Service Provider"],
    buttonText: "EXPLORE MORE",
  },
  technicalsecurity: {
    image: technicalSecurityImg,
    title: "Technical Security",
    points: ["Video surveillance", "Intrusion prevention systems", "GPS tracking system", "Access control and time-attendance solutions"],
    buttonText: "EXPLORE MORE",
  },
  digitalmarketing: {
    image: digitalMarketingImg,
    title: "Digital Marketing",
    points: ["Social Media Marketing", "Digital Advertising", "Media planning and buying", "Search Engine Optimization", "Email marketing"],
    buttonText: "EXPLORE MORE",
  },
  cloudservices: {
    image: cloudServicesImg,
    title: "Cloud Services",
    points: ["Storage Infrastructure", "Cloud Hosting", "Cloud Based ERP/CRM"],
    buttonText: "EXPLORE MORE",
  },
  collaborationsystem: {
    image: collaborationSystemImg,
    title: "Collaboration System",
    points: ["Team Communication", "Project Management", "File Sharing"],
    buttonText: "EXPLORE MORE",
  },
  certifiedtraining: {
    image: certifiedTrainingImg,
    title: "Certified Training",
    points: ["Mikrotik Certification", "CCTV Installation", "Web app development", "Web design and Devopment"],
    buttonText: "EXPLORE MORE"
  }
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("itservices");

  return (
    <section className="services">
      <div className="ser-txt">
        <h2>Services we offer</h2>
        <div className='ser-txt1'>
        <p>We offer a wide range of specialized services Designed to meet your<br/> goals</p>
        <button><span>Who we do</span><FontAwesomeIcon icon={faPaperPlane} className="paper-plane-icon" style={{ color: "#ffffff"}} />
        </button>
        </div>
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
                backgroundImage: `linear-gradient(180deg, #D2060FD6 0%, #062CD1D1 100%), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay">
                <h3>{title}</h3>
                <ul>
                  {points.map((point, index) => (
                    <li key={index}>
                      <FontAwesomeIcon icon={faChevronRight} className='chevron' style={{color: "#ffffff",}} />{point}
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
