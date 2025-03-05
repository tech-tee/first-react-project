import React from 'react';
import './ConSection.css';
import CaretIcon from '../../assets/images/caret.png';
import PhoneIcon from '../../assets/images/phone-331.png';
import EmailIcon from '../../assets/images/message-324.png';
import FacebookIcon from '../../assets/images/facebook-5222.png';
import TwitterIcon from '../../assets/images/twitter-logo-2429.png';
import YoutubeIcon from '../../assets/images/youtube-123.png';
import InstagramIcon from '../../assets/images/black-instagram-logo-3497.png';
import LinkedInIcon from '../../assets/images/black-linkedin-logo-15915.png';

const ConSection = () => {
  return (
    <section className="con-sec">
      <div className="web-info">
        <div>
          <img
            src="https://speedlinkng.com/wp-content/uploads/2022/09/speedlink-logo-footer-300x125.png"
            alt="Speedlink Logo"
          />
        </div>
        <p>
          Providing ICT solutions that make businesses stand out. We can provide you with the highest levels of technical
          expertise, strategic thinking, and hands-on skills.
        </p>
      </div>

      <div className="c-ser">
        <h2>Services</h2>
        {['Digital Services', 'Cloud Services', 'Networking Services', 'Certified Training'].map((service, index) => (
          <React.Fragment key={index}>
            <div>
              <img src={CaretIcon} alt="caret" />
              <a href="#" target="_blank" rel="noopener noreferrer">
                {service}
              </a>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>

      <div className="quick-links">
        <h2>Quick Links</h2>
        {['Our Products', 'Case Studies', 'Who we are', 'Why choose us', 'What we do', 'Meet our teams'].map(
          (link, index) => (
            <div key={index}>
              <img src={CaretIcon} alt="caret" />
              <span>{link}</span>
            </div>
          )
        )}
      </div>

      <div className="locate-us">
        <h2>Locate us</h2>
        <p>
          Road 6 Extension, Okey<br />
          Wali Estate, Rumualogu,<br />
          Port Harcourt, Rivers State
        </p>
        <div className="loc-det">
          <div className="loc-num">
            <img src={PhoneIcon} alt="Phone" />
            <span>tel: +2349167716220</span>
          </div>
          <span className="space"></span>
          <div className="loc-em">
            <img src={EmailIcon} alt="Email" />
            <span>admin@speedlinkng.com</span>
          </div>
        </div>
        <br />
        <br />
        <div className="loc-soci">
          {[FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon].map((icon, index) => (
            <div key={index}>
              <img src={icon} alt="Social Icon" />
            </div>
          ))}
        </div>
        <div className="linkedin">
          <img src={LinkedInIcon} alt="LinkedIn" />
        </div>
      </div>
    </section>
  );
};

export default ConSection;
