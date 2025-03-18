import React, { useState, useEffect, useRef } from 'react';
import './ClientSection.css';

const ClientSection = () => {
  const uniqueImages = [
    'https://speedlinkng.com/wp-content/uploads/2022/09/FAST-LOGO.png',
    'https://speedlinkng.com/wp-content/uploads/2022/09/primerose-highschool.png',
    'https://speedlinkng.com/wp-content/uploads/2022/09/redeemers-high-school.png',
    'https://speedlinkng.com/wp-content/uploads/2022/09/SPH-LOGO.png',
    'https://speedlinkng.com/wp-content/uploads/2022/09/cefor-logo.png',
    'https://speedlinkng.com/wp-content/uploads/2022/09/cgrp-logo.png',
    'https://speedlinkng.com/wp-content/uploads/2022/09/laser-engineering-2.png'
  ];
  const extendedImages = uniqueImages.concat(uniqueImages);
  const imageWidth = 100; // 50px image + 20px margin-right
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === uniqueImages.length) {
      carouselRef.current.style.transition = 'none';
      setCurrentIndex(0);
      carouselRef.current.getBoundingClientRect(); // force reflow
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease';
      }, 0);
    }
  };

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
        <div
          className="client-img-inner"
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentIndex * imageWidth}px)`,
            transition: 'transform 0.5s ease'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((src, index) => (
            <img key={index} src={src} alt={`Client ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
