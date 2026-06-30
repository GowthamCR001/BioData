import React from 'react';
import './ComparisonSection.css';

function ComparisonSection() {
  const tableData = [
    {
      feature: 'Price',
      us: '₹49 one time, preview free',
      canva: 'Free, but hours of work',
      others: '₹39 to ₹59, plus upsells',
    },
    {
      feature: 'Sign-up required',
      us: 'Never',
      canva: 'Yes (Canva account)',
      others: 'Often',
    },
    {
      feature: 'Where your data lives',
      us: 'Only on your device',
      canva: 'Their cloud / your computer',
      others: 'Their servers',
    },
    {
      feature: 'Custom fields (add / rename / reorder)',
      us: 'Yes, unlimited',
      canva: 'Manual text boxes',
      others: 'Usually fixed fields',
    },
    {
      feature: 'Photo cropping',
      us: 'Built-in 3:4 crop',
      canva: 'Manual',
      others: 'Varies',
    },
    {
      feature: 'Horoscope fields (Rashi, Nakshatra, Gotra)',
      us: 'Built in',
      canva: 'Type them yourself',
      others: 'Sometimes',
    },
    {
      feature: 'Output',
      us: 'Print-ready A4 PDF',
      canva: 'Export settings on you',
      others: 'PDF/PNG, watermarks on free tier',
    },
    {
      feature: 'Edit after download',
      us: 'Yes, free',
      canva: 'Yes',
      others: 'Often re-charged',
    },
    {
      feature: 'Works on mobile',
      us: 'Fully, no app',
      canva: 'App download needed',
      others: 'Varies',
    },
  ];

  return (
    <section className="comparison-section" id="comparison">
      <div className="container">
        <div className="comparison-header">
          <div className="comparison-eyebrow">compare fairly</div>
          <h2 className="comparison-title">Why Families Choose This Biodata Maker</h2>
          <p className="comparison-desc">
            You could build a marriage biodata in Canva, wrestle a Word template into shape,
            or trust a site that keeps your details on its servers. Here's the same decision, laid
            out plainly.
          </p>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>What matters</th>
                <th>BiodataForMarriage.net</th>
                <th>Canva / Word templates</th>
                <th>Other online makers</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="col-feature">{row.feature}</td>
                  <td className="col-us">{row.us}</td>
                  <td className="col-canva">{row.canva}</td>
                  <td className="col-others">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comparison-footer">
          <p>Comparison reflects typical Canva/Word workflows and common features of online biodata makers as of June 2026.</p>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
