import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

function AboutPage() {
  // Scroll to top when loading the About page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="eyebrow">
              <span>•</span>
              <span>Our Story</span>
            </div>
            <h1 className="about-title">
              We believe finding your life partner shouldn't mean <i>compromising</i> your privacy.
            </h1>
            <p className="about-description">
              Creating a marriage biodata shouldn't require you to upload your most personal details, photos, and family information to a random server. We built Biodata for Marriage to give you a beautiful, professional biodata builder that keeps your data exactly where it belongs—on your device.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
