import React, { useEffect } from 'react';
import './StaticPage.css';

function RefundPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="static-page">
      <div className="static-header">
        <div className="container">
          <h1 className="static-title">Refund Policy</h1>
        </div>
      </div>
      <div className="container">
        <div className="static-content">
          <p>Last updated: July 1, 2026</p>
          <p>
            Thank you for choosing Biodata for Marriage. We strive to provide the best possible experience for our users.
          </p>
          
          <h2>1. Digital Products</h2>
          <p>
            Biodata for Marriage provides a digital service where you can generate PDF documents. If we offer premium templates or one-time premium PDF downloads in the future, these are considered digital goods.
          </p>

          <h2>2. Refund Eligibility</h2>
          <p>
            Due to the immediate, digital nature of the generated PDFs, we generally do not offer refunds once a premium PDF has been successfully generated and downloaded. 
          </p>
          <p>
            However, we may offer a refund in the following exceptional circumstances:
          </p>
          <ul>
            <li>The generated PDF file is technically defective or corrupted.</li>
            <li>You were charged multiple times for a single transaction due to a technical error on our end.</li>
          </ul>

          <h2>3. Requesting a Refund</h2>
          <p>
            If you believe you are eligible for a refund, please contact us within 7 days of the purchase date. You can reach out to our support team at <a href="mailto:support@biodataformarriage.net">support@biodataformarriage.net</a> with your transaction details and a description of the issue.
          </p>

          <h2>4. Processing Time</h2>
          <p>
            Once your refund request is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment, within 5-10 business days depending on your bank or payment provider.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicyPage;
