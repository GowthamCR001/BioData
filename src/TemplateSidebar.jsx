import React from 'react';
import './TemplateSidebar.css';

function TemplateSidebar({ 
  templates, selectedTemplateId, onSelect, onClose, 
  title, setTitle, titleColor, setTitleColor, selectedLogo, setSelectedLogo 
}) {
  return (
    <div className="template-sidebar-wrapper">
      <div className="template-sidebar-content">
        <div className="template-sidebar-header">
          <h2>Customise</h2>
          <button className="btn-close-modal" onClick={onClose}>✕</button>
        </div>

        <div className="template-customisation-section">
          <div className="customisation-field">
            <label>Biodata Title</label>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter title"
                className="customisation-input"
                style={{ flex: 1 }}
              />
              <input 
                type="color"
                value={titleColor || "#800000"}
                onChange={(e) => setTitleColor(e.target.value)}
                style={{ width: '38px', height: '38px', padding: '0', border: '1px solid #ccc', cursor: 'pointer', borderRadius: '4px' }}
                title="Choose Title Color"
              />
            </div>
          </div>
          
          <div className="customisation-field">
            <label>Religious / Cultural Symbol</label>
            <div className="religious-symbol-selector">
              {selectedLogo ? (
                <div className="selected-symbol-preview">
                  <span className="selected-symbol-label">Selected Symbol</span>
                  <div className="selected-symbol-img-container">
                  <img 
                    src={`/src/assets/logos/${selectedLogo}`} 
                    alt="Selected" 
                    className="selected-symbol-img" 
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><text x="50%" y="50%" font-size="20" text-anchor="middle" alignment-baseline="middle">?</text></svg>' 
                    }}
                  />
                </div>
                  <button className="btn-remove-symbol" onClick={() => setSelectedLogo("")}>
                    ✕ Remove
                  </button>
                </div>
              ) : null}

              <p className="symbol-instruction">Click on a symbol to select:</p>
              <div className="symbol-grid">
                {[
                  'ganesha1.svg', 'om1.svg', 'swastika1.svg', 'khanda1.svg', 
                  'cross1.svg', 'allah1.svg', 'chakra1.svg',
                  ...Array.from({ length: 11 }, (_, i) => `sym (${i + 1}).png`)
                ].map(logo => (
                  <div 
                    key={logo}
                    className={`symbol-item ${selectedLogo === logo ? 'active' : ''}`}
                    onClick={() => setSelectedLogo(logo)}
                  >
                    <img 
                      src={`/src/assets/logos/${logo}`} 
                      alt="symbol" 
                      onError={(e) => { 
                        e.target.onerror = null; 
                        e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><text x="50%" y="50%" font-size="16" text-anchor="middle" alignment-baseline="middle">?</text></svg>' 
                      }}
                    />
                    {selectedLogo === logo && <div className="symbol-check">✔</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="template-sidebar-header" style={{ borderTop: '1px solid #e5e7eb' }}>
          <h2>Select Frame</h2>
        </div>
        
        <div className="template-grid">
          {templates.map(template => (
            <div 
              key={template.id} 
              className={`template-thumbnail-card ${selectedTemplateId === template.id ? 'selected' : ''}`}
              onClick={() => onSelect(template.id)}
            >
              <div className="template-thumbnail-image-container">
                <img 
                  src={`/src/assets/template/frame/${template.file}`} 
                  alt={template.name} 
                  className="template-thumbnail-image" 
                />
                {selectedTemplateId === template.id && (
                  <div className="template-selected-badge">
                    <span className="checkmark">✔</span>
                  </div>
                )}
              </div>
              <div className="template-thumbnail-name" style={{ color: template.color }}>
                {template.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="template-sidebar-footer">
        <button className="btn-solid-dark btn-download">Proceed & Download</button>
      </div>
    </div>
  );
}

export default TemplateSidebar;
