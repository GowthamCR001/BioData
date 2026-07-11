import React from 'react';
import './CtaSection.css';

// A simple elegant flourish SVG
const Flourish = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,2C10.5,5.5 8,8 4.5,9.5C6,9.5 8.5,10 11.5,12C11.5,12 10.5,15 11.5,19C12.5,23 16.5,21 16.5,21C16.5,21 14,19.5 13.5,17C13,14.5 15,12 18.5,10.5C21.5,9 20,6 20,6C20,6 18.5,8 15.5,8C12.5,8 12,2 12,2Z"/>
  </svg>
);

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box-wrapper">
          <div className="cta-box">
            <Flourish className="cta-flourish top-left" />
            <Flourish className="cta-flourish top-right" />
            
            <div className="cta-content">
              <p className="cta-eyebrow">you are invited</p>
              <h2 className="cta-title">The Right Match Starts With<br/>the Right Introduction</h2>
              <p className="cta-desc">
                In the next two minutes you can have a biodata you are<br/>
                happy to send. It is free to make, and it stays yours.
              </p>
              <button className="cta-button">Create My Biodata</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
