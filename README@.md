import React, { useState } from "react";
import './ServicesSection.css';

const serviceData = {
  "Enterprise Internet": {
    image: "https://speedlinkng.com/wp-content/uploads/2022/09/enterprise.png",
    title: "Enterprise Internet",
    points: [
      "Reliable high-speed internet",
      "24/7 customer support",
      "Scalable bandwidth options",
    ],
  },
  "SME & Retail": {
    image: "https://speedlinkng.com/wp-content/uploads/2022/09/sme.png",
    title: "SME & Retail",
    points: [
      "Affordable internet for small businesses",
      "Flexible data plans",
      "Easy installation",
    ],
  },
  "Digital Solutions": {
    image: "https://speedlinkng.com/wp-content/uploads/2022/09/digital.png",
    title: "Digital Solutions",
    points: [
      "Innovative IT solutions",
      "Custom software development",
      "Cloud-based services",
    ],
  },
  "Infrastructure as a Service": {
    image: "https://speedlinkng.com/wp-content/uploads/2022/09/infrastructure.png",
    title: "Infrastructure as a Service",
    points: [
      "Virtualized computing resources",
      "Pay-as-you-go pricing",
      "Secure and scalable",
    ],
  },
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("Enterprise Internet");

  return (
    <section className="services">
      {/* Services Header */}
      <div className="ser-txt">
        <h2>Our Services</h2>
        <p>Explore our range of internet and digital solutions.</p>
      </div>

      {/* Services Content */}
      <div className="ser-content">
        {/* Service List */}
        <div className="ser-list">
          <ul>
            {Object.keys(serviceData).map((service) => (
              <li
                key={service}
                onMouseEnter={() => setActiveService(service)}
                className={activeService === service ? "active" : ""}
              >
                <a href="#">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Image Section */}
        <div className="ser-images">
          {Object.entries(serviceData).map(([service, { image, title, points }]) => (
            <div
              key={service}
              className={`ser-image ${activeService === service ? "visible" : ""}`}
              style={{
                backgroundImage: `linear-gradient(47deg, rgba(242, 57, 57, 0.7) 15%, rgba(3, 45, 171, 0.7) 57%), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay">
                <h3>{title}</h3>
                <ul>
                  {points.map((point, index) => (
                    <li key={index}>
                      <span className="chevron">›</span> {point}
                    </li>
                  ))}
                </ul>
                <button>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
