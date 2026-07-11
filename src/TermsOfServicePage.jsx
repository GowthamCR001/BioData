import React, { useEffect } from 'react';
import './StaticPage.css';

function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="static-page">
      <div className="static-header">
        <div className="container">
          <h1 className="static-title">Terms of Service</h1>
        </div>
      </div>
      <div className="container">
        <div className="static-content">
          <p>Last updated: July 1, 2026</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Biodata for Marriage website operated by Craftful Technologies LLP.
          </p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2>2. Use of the Service</h2>
          <p>
            Our Service allows you to create marriage biodata profiles and generate PDFs. You are solely responsible for the information you input into the tool. We do not verify the accuracy or truthfulness of the content you create using our templates.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Craftful Technologies LLP and its licensors. Our templates and designs are copyrighted and may not be extracted or reproduced for commercial purposes without our express permission.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>
            You agree not to use the Service to generate content that is illegal, offensive, discriminatory, or violates the rights of any third party.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall Craftful Technologies LLP, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2>6. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfServicePage;
