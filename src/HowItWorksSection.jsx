import React from 'react';
import './HowItWorksSection.css';

function HowItWorksSection() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="hiw-header">
          <div className="hiw-eyebrow">THE RITUAL, SIMPLIFIED</div>
          <h2 className="hiw-title">How to Make a Biodata for Marriage, in Three Steps</h2>
          <p className="hiw-desc">
            From blank page to a share ready matrimonial biodata in about 2 minutes. No design
            skills, no sign up, nothing to install. It works the same way on your mobile phone, with
            no app needed.
          </p>
        </div>

        <div className="hiw-steps">
          <div className="hiw-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Tell us about yourself</h3>
            <p className="step-desc">
              The form already knows what an Indian biodata needs, down
              to Rashi and Gotra dropdowns. Fill in your name, birth
              details, education and family. Rename any field, add your
              own, move them into the order your family prefers, and crop
              your photo right in the browser.
            </p>
          </div>

          <div className="hiw-step">
            <div className="step-number">02</div>
            <h3 className="step-title">Choose the design</h3>
            <p className="step-desc">
              Your details appear live on every template, so you can switch
              between them like trying on outfits. Traditional borders,
              modern minimal layouts, designs that work without a photo.
              Keep switching until one feels right.
            </p>
          </div>

          <div className="hiw-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Download and send</h3>
            <p className="step-desc">
              One click gives you a crisp A4 PDF that prints clean and
              reads well on a phone. That matters, because most biodatas
              are read on WhatsApp, usually by an aunt, usually at
              midnight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
