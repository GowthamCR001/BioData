import React, { useEffect } from 'react';
import './StaticPage.css';

function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="static-page">
      <div className="static-header">
        <div className="container">
          <h1 className="static-title">Privacy Policy</h1>
        </div>
      </div>
      <div className="container">
        <div className="static-content">
          <p>Last updated: July 1, 2026</p>
          <p>
            At Biodata for Marriage ("we", "us", or "our"), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
          </p>
          
          <h2>1. Local Data Processing</h2>
          <p>
            Our core philosophy is privacy-first. <strong>Your biodata details and photos are processed locally in your web browser.</strong> We do not upload, store, or transmit the personal information you enter into the biodata form to our servers or any third-party servers. The PDF generation happens entirely on your device.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            While your biodata information remains on your device, we may collect standard analytical information to help us improve the service:
          </p>
          <ul>
            <li><strong>Log Data:</strong> Browser type, IP address, device type, pages visited, and time spent on the website.</li>
            <li><strong>Cookies:</strong> We use essential cookies to ensure the website functions properly.</li>
          </ul>

          <h2>3. Third-Party Analytics</h2>
          <p>
            We may use third-party analytics tools (like Google Analytics) to measure traffic and usage trends for the service. These tools collect information sent by your device or our service, including the web pages you visit, add-ons, and other information that assists us in improving the Service. This data does not include the personal information entered into your biodata.
          </p>

          <h2>4. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at privacy@biodataformarriage.net.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
