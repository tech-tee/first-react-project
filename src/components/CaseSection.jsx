import React from 'react';
import './CaseSection.css';
import ArrowIcon from '../assets/images/greater-than-sign-10087.png';
import Icon1 from '../assets/images/icons8-paper-60.png';
import ArrowIcon1 from '../assets/images/greater-than-sign-10087.png';

const CaseSection = () => {
  return (
    <section className="case-studies">
      <div className="cst-txt">
        <div className="casestd-text">
          <h1>Case Studies</h1>
          <p>
            We’re proud to have helped build innovative solutions solving
            complex problems across varying industries. Check out what we’ve been up to.
          </p>
        </div>
        <div className="btn">
          <button className="btn1">
            <span>See more of our work</span>
            <img src={Icon1} alt="Icon" />
          </button>
        </div>
      </div>

      <div className="first-grp">
        <div className="grp1-txt">
          <h2>Integration of a secured and reliable examination platform</h2>
          <p>
            We built a hitch-free proctoring software for the School of Public Health, University of Port Harcourt 
            that offers students and test takers the freedom to take a proctored exam at any time in any given location…
          </p>
          <div className="grp1-btn">
            <button className="btn2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>View case study</span>
                <img src={ArrowIcon1} alt="Arrow Icon" />
              </a>
            </button>
          </div>
        </div>
        <div className="grp1-img">
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/pexels-christina-morillo-1181244-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.jpg"
            alt="Case study 1"
          />
        </div>
      </div>

      <div className="snd-grp">
        <div className="grp2-img">
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/training-comressesd-scaled-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.webp"
            alt="Case study 2"
          />
        </div>
        <div className="grp2-txt">
          <h2>Hybrid Learning Facility</h2>
          <p>
            We developed a platform that can accommodate students who are unable to attend classes in person 
            while also allowing students to attend classes in person or remotely with real-time audio and visual communication….
          </p>
          <div className="grp2-btn">
            <button className="btn3">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span>View case study</span>
                <img src={ArrowIcon} alt="Arrow Icon" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
