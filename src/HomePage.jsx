import React from 'react';
import BiodataForm from './BiodataForm'
import TemplatesSection from './TemplatesSection'
import HowItWorksSection from './HowItWorksSection'
import AnatomySection from './AnatomySection'
import PrivacySection from './PrivacySection'
import GuideSection from './GuideSection'
import ComparisonSection from './ComparisonSection'
import TestimonialsSection from './TestimonialsSection'
import FaqSection from './FaqSection'
import CtaSection from './CtaSection'

function HomePage() {
  return (
    <>
      <div className="container">
        <main className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <div className="eyebrow">
                <span>•</span>
                <span>India's Privacy-First Marriage Biodata Maker</span>
              </div>

              <h1 className="hero-title">
                A <i>beautiful</i><br />
                biodata for marriage,<br />
                in two minutes
              </h1>

              <p className="hero-description">
                Your biodata is the first thing the other family sees about you, so make it a good one. Fill in your details, pick a design you like, and download your print ready PDF. There is no account to create, and your details stay on your own device.
              </p>

              <div className="hero-cta">
                <button className="btn-primary btn-large">Create My Biodata Free</button>
                <button className="btn-outline">See the 21 designs</button>
              </div>
            </div>

            <div className="hero-image">
              <img src="/biodata-mockup.png" alt="Stacked marriage biodata templates" />
              <div className="badge-private">
                100%
                <span>PRIVATE</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <BiodataForm />
      <TemplatesSection />
      <HowItWorksSection />
      <AnatomySection />
      <PrivacySection />
      <GuideSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}

export default HomePage;
