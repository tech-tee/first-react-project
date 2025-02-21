import React, { useState } from 'react';
import './ServicesSection.css';
import itServicesImg from '../assets/images/pexels-nemuel-sereti-6424583.jpg';
import networkServicesImg from '../assets/images/pexels-brett-sayles-2881229.jpg';
import technicalSecurityImg from '../assets/images/Technical-Security-1.jpg';
import digitalMarketingImg from '../assets/images/digotal-marketing.jpg';
import cloudServicesImg from '../assets/images/cloud-internetdienste_blue_planet_studio_adobestock_362316663_1545px.jpg';
import collaborationSystemImg from '../assets/images/Live-Streaning.jpg';

const serviceData = {
  itservices: {
    image: itServicesImg,
    title: 'IT Services',
    list: ['Software Application Development', 'Software Installation', 'Web Design and Development'],
    buttonText: 'Learn More',
  },
  networkservices: {
    image: networkServicesImg,
    title: 'Network Services',
    list: ['Fiber-to-the-home', 'Routing and Switching', 'VOIP', 'ISP'],
    buttonText: 'Explore',
  },
  technicalsecurity: {
    image: technicalSecurityImg,
    title: 'Technical Security',
    list: ['CCTV', 'Intrusion Prevention', 'Fire Detection', 'Alarms'],
    buttonText: 'Discover',
  },
  digitalmarketing: {
    image: digitalMarketingImg,
    title: 'Digital Marketing',
    list: ['Social Media Marketing', 'SEO', 'Media Planning'],
    buttonText: 'Get Started',
  },
  collaborationsystem: {
    image: collaborationSystemImg,
    title: 'Collaboration System',
    list: ['Team Communication', 'Project Management', 'File Sharing'],
    buttonText: 'Join Now',
  },
  cloudservices: {
    image: cloudServicesImg,
    title: 'Cloud Services',
    list: ['Storage Infrastructure', 'Cloud Hosting', 'ERP/CRM'],
    buttonText: 'See More',
  },
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('itservices');

  return (
    <section className="services">
      <div className="ser-txt">
        <h2>Services we offer</h2>
        <p>We offer a wide range of specialized services designed to meet your goals</p>
      </div>
      <div className="ser-content">
        <div className="ser-list">
          <ul>
            {Object.keys(serviceData).map((service) => (
              <li
                key={service}
                className="hover-item"
                onMouseEnter={() => setActiveService(service)}
              >
                <a href={`#${service}`}>{serviceData[service].title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="ser-images">
          <div className="ser-image" style={{
            backgroundImage: `linear-gradient(47deg, rgb(242, 57, 57) 15%, rgb(3, 45, 171) 57%), url(${serviceData[activeService].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="overlay" style={{ paddingLeft: '10px', textAlign: 'left' }}>
              <h3>{serviceData[activeService].title}</h3>
              <ul>
                {serviceData[activeService].list.map((item, index) => (
                  <li key={index}>
                    <span className="chevron">&gt;</span> {item}
                  </li>
                ))}
              </ul>
              <button>{serviceData[activeService].buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
