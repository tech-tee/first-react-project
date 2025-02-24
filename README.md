ervices {
    color: #4B4F58;
    padding-left: 100px;
    padding-right: 150px;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 20px;
}

.services::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;   
    background: url('https://speedlinkng.com/wp-content/uploads/2022/09/background-1.png');
    background-size: cover;
    background-position: center;
    opacity: 0.3; 
    border-radius: 8px;
    z-index: 0; 
}

.services::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;   
    border-radius: 8px;
    background-color: rgba(211, 211, 211, 0.5); 
    z-index: 0; 
}

.services > * {
    position: relative;
    z-index: 1;
}

.ser-txt h2 {
    color: #020d39;
    font-family: 'Roboto', sans-serif;
}

.ser-txt p {
    color: #000;
}

.ser-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.ser-list {
    flex: 1;
}

.ser-list ul {
    list-style: none;
    padding: 0;
    color: #222121;
    text-decoration: none;
    list-style-type: none;
}

.ser-list ul li {
    padding: 15px 30px;
    border: 2px solid #f1bcd9;
    background-color: white;
    border-radius: 0 30px 30px 0;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 250px;
    width: 100%;
    height: 20px;
}

.ser-list ul li:hover {
    background-color: #be1219;
    color: white;
    border: none;
}

.ser-list ul li a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    display: block;
    width: 100%;
    text-align: center;
    line-height: 30px;
    transition: color 0.3s ease;
}

.ser-list ul li:hover a {
    color: white;
}

.ser-images {
    position: relative;
    max-width: 60%; 
    width: 100%;
    height: 100%;
}

.ser-image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://speedlinkng.com/wp-content/uploads/2022/09/pexels-nemuel-sereti-6424583.jpg') center/cover no-repeat;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
}

.ser-image .overlay {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, red, purple, blue);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
}

.ser-image h3 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    text-transform: uppercase;
}

.ser-image ul {
    list-style: none;
    padding: 0;
}

.ser-image ul li {
    margin: 10px 0;
    font-size: 18px;
    display: flex;
    align-items: center;
}

.ser-image ul li .chevron {
    margin-right: 10px;
    color: white;
    font-weight: bold;
    font-size: 20px;
}

.hover-item[data-service="itservices"]:hover ~ .ser-images #itservices {
    opacity: 1;
    visibility: visible;
}





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
