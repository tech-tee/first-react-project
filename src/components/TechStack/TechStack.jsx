import React, { useState, useEffect, useRef } from 'react';
import './TechStack.css';

const TechStack = () => {
  const originalImages = [
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/c-sharp-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png",
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/android-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png",
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/postgre-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png",
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Node-Js-Logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png",
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Gulp-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png",
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/React-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png",
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/css-3-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png",
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/python-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png",
    "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/php-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png"
  ];
  const uniqueImages = originalImages;
  const extendedImages = uniqueImages.concat(uniqueImages);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const imageWidth = 100;
  const totalWidth = uniqueImages.length * imageWidth;
  const [offset, setOffset] = useState(0);
  const requestRef = useRef();
  const previousTimeRef = useRef();

const animate = (time) => {
  if (previousTimeRef.current !== undefined) {
    const deltaTime = time - previousTimeRef.current;
    const speed = 30; 
    let newOffset = offset + (speed * deltaTime) / 1000;
    if (newOffset >= totalWidth) {
      newOffset -= totalWidth;
    }
    setOffset(newOffset);
  }
  previousTimeRef.current = time;
  requestRef.current = requestAnimationFrame(animate);
};
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const handleTransitionEnd = () => {
    if (currentIndex === uniqueImages.length) {
      carouselRef.current.style.transition = 'none';
      setCurrentIndex(0);
      carouselRef.current.getBoundingClientRect(); 
      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease';
      }, 0);
    }
  };
  
  return (
    <section className="tech-stack">
      <div className="tech-text">Tech Stack</div>
      <div className="custom-divider">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className='dot'></div>
        <div className="rectangle"></div>
      </div>
      <div className="tech-img">
        <div 
          className="tech-img-inner" 
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentIndex * imageWidth}px)`,
            transition: 'transform 0.5s ease'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((src, index) => (
            <img key={index} src={src} alt={`Tech ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
