import React from 'react';
import './PrivacySection.css';

function PrivacySection() {
  return (
    <section className="privacy-section" id="privacy">
      <div className="container">
        <div className="privacy-header">
          <div className="privacy-eyebrow">a quiet promise</div>
          <h2 className="privacy-title">Your Family's Details Stay in Your Family</h2>
          <p className="privacy-desc">
            A biodata holds a lot: birth details, home address, your father's name, your
            daughter's photograph. Most biodata websites collect all of it on their servers. This
            one was built so it can't.
          </p>
        </div>

        <div className="privacy-features">
          <div className="privacy-feature">
            <h3 className="feature-heading">Nothing uploads</h3>
            <p className="feature-text">
              The form, the photo crop and even the PDF are all
              made inside your browser. Your biodata is built on
              your device and goes straight to your downloads
              folder.
            </p>
          </div>

          <div className="privacy-feature">
            <h3 className="feature-heading">No account, no OTP</h3>
            <p className="feature-text">
              We never ask for your phone number or email to use
              the maker. There is no profile to create, which means
              there is no profile to hack, sell or spam.
            </p>
          </div>

          <div className="privacy-feature">
            <h3 className="feature-heading">Saved with you, not with us</h3>
            <p className="feature-text">
              Your draft stays in your own browser so you can come
              back and edit. Clear it whenever you like. We could
              not read it even if we wanted to.
            </p>
          </div>
        </div>

        <div className="privacy-footer">
          <p>If your details never reach us, they can never leak from us.</p>
        </div>
      </div>
    </section>
  );
}

export default PrivacySection;
