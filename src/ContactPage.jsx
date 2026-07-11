import React, { useEffect } from 'react';
import './StaticPage.css';

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="static-page">
      <div className="static-header">
        <div className="container">
          <h1 className="static-title">Contact Us</h1>
        </div>
      </div>
      <div className="container">
        <div className="static-content">
          <p>
            We're here to help you with any questions, issues, or feedback you might have about Biodata for Marriage. 
          </p>
          <h2>Get in Touch</h2>
          <div className="contact-info">
            <p><strong>Email Support:</strong> <br/>
            You can reach our support team at <a href="mailto:support@biodataformarriage.net">support@biodataformarriage.net</a>.</p>
            <p><strong>Business Inquiries:</strong> <br/>
            For partnerships and business related queries, email us at <a href="mailto:business@biodataformarriage.net">business@biodataformarriage.net</a>.</p>
          </div>
          <p style={{ marginTop: '2rem' }}>
            We typically respond to all emails within 24-48 hours during regular business days.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
