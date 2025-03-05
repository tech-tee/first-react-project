import React from 'react';
import './PrdSection.css';
import Icon1 from '../../assets/images/icons8-graduation-cap-64.png';
import Icon2 from '../../assets/images/bank.png';
import Icon3 from '../../assets/images/search.png';
import Icon4 from '../../assets/images/icons8-paper-60.png';

const PrdSection = () => {
  return (
    <section className="products">
      <div className="product-text">
        <h6>Our Products</h6>
        <span>
          Comprehensive IT SOLUTIONS<br />
          that sets your business apart
        </span>
        <p>Bringing Speed to your business</p>
      </div>
      <div className="prd-images">
        <div className="prd1">
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-qlr0q7d82s1a0jmzxozozufvp8cxd3sbadz8bxwby8.jpg"
            className="img-1"
            alt="DigiSchool"
          />
          <div>
            <h5>
              <img src={Icon1} alt="Icon" />
              <a href="digishool" target="_blank" rel="noopener noreferrer">DIGISCHOOL</a>
            </h5>
          </div>
        </div>
        <div className="prd2">
          <img
            src="https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-2-qlr0q7d81go7a3ppqeq4sdjtvq6pcbuksft0eos2bk.jpg"
            className="img-1"
            alt="Speedducation"
          />
          <div>
            <h5>
              <img src={Icon2} alt="Icon" />
              <a href="speedducation" target="_blank" rel="noopener noreferrer">SPEEDDUCATION</a>
            </h5>
          </div>
        </div>
        <div className="prd3">
          <div className="prd3-img">
            <img
              src="https://speedlinkng.com/wp-content/uploads/2022/08/erp.jpg"
              className="img-1"
              alt="Speed ERP Solution"
            />
          </div>
          <div className="prd3-text">
            <h5>
              <img src={Icon3} alt="Icon" />
              <a href="speederpsolution" target="_blank" rel="noopener noreferrer">SPEED ERP SOLUTION</a>
            </h5>
          </div>
        </div>
      </div>
      <div className="prd-button">
        <button className="buttonprd">
          <span className="button-txt">View all our products</span>
          <img src={Icon4} alt="Icon" />
        </button>
      </div>
    </section>
  );
};

export default PrdSection;
