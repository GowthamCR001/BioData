import React from 'react';
import './TemplatesSection.css';

const row1Templates = [
  { name: 'Kesar', color: '#1d4ed8' },
  { name: 'Bandhani', color: '#eab308' },
  { name: 'Ivory', color: '#475569' },
  { name: 'Slate', color: '#0f172a' },
  { name: 'Mogra', color: '#64748b' },
  { name: 'Kumkum', color: '#b91c1c' },
  { name: 'Chandan', color: '#b45309' },
  { name: 'Marigold', color: '#f59e0b' },
  { name: 'Sindoor', color: '#991b1b' },
  { name: 'Mayur', color: '#064e3b' },
];

const row2Templates = [
  { name: 'Neelam', color: '#eab308' },
  { name: 'Toran', color: '#ea580c' },
  { name: 'Aangan', color: '#d97706' },
  { name: 'Filigree', color: '#0369a1' },
  { name: 'Gulaab', color: '#be123c' },
  { name: 'Mandap', color: '#065f46' },
  { name: 'Jasmine', color: '#4b5563' },
  { name: 'Suhag', color: '#dc2626' },
  { name: 'Lotus', color: '#db2777' },
  { name: 'Mehendi', color: '#166534' },
  { name: 'Kundan', color: '#854d0e' },
];

const TemplateCard = ({ template }) => (
  <div className="template-card">
    <div className="template-mockup" style={{ borderColor: template.color }}>
      <div className="mockup-header" style={{ backgroundColor: template.color, opacity: 0.1 }}></div>
      <div className="mockup-body">
        <div className="mockup-col">
          <div className="mockup-line title"></div>
          <div className="mockup-line"></div>
          <div className="mockup-line"></div>
          <div className="mockup-line"></div>
          <div className="mockup-line title" style={{ marginTop: '10px' }}></div>
          <div className="mockup-line"></div>
          <div className="mockup-line"></div>
        </div>
        <div className="mockup-photo"></div>
      </div>
    </div>
    <div className="template-name" style={{ color: template.color }}>{template.name}</div>
  </div>
);

function TemplatesSection() {
  return (
    <section className="templates-section" id="templates">
      <div className="templates-header">
        <div className="templates-eyebrow">the collection</div>
        <h2 className="templates-title">21 Marriage Biodata Templates, Each With a Character of Its Own</h2>
        <p className="templates-desc">
          Some families want the horoscope front and centre. Some want clean lines and no fuss.
          Some want a border that looks like it came off a wedding card. You will find all of them here,
          with sample marriage biodata formats for girls and boys, with photo and without. Preview
          your own details on every design for free, and pay ₹49 only for the one you keep.
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {/* Double the list for infinite scroll effect */}
          {[...row1Templates, ...row1Templates].map((template, index) => (
            <TemplateCard key={`row1-${index}`} template={template} />
          ))}
        </div>
      </div>

      <div className="marquee-container reverse">
        <div className="marquee-track reverse-track">
          {[...row2Templates, ...row2Templates].map((template, index) => (
            <TemplateCard key={`row2-${index}`} template={template} />
          ))}
        </div>
      </div>

      <div className="templates-footer">
        <p>Hover to pause - click any design to start with your own details - <a href="#templates" className="see-all-link">See all 21 templates</a></p>
      </div>
    </section>
  );
}

export default TemplatesSection;
