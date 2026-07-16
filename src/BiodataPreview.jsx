import React, { useState, useEffect } from 'react';
import './BiodataPreview.css';

function BiodataPreview({ template, personalFields, familyFields, contactFields, photoUrl, title, selectedLogo, innerRef }) {
  const themeColor = template.color;
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    if (selectedLogo) {
      const url = `/src/assets/logos/${selectedLogo}`;
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => {
            setLogoSrc(reader.result);
          };
          reader.readAsDataURL(blob);
        })
        .catch(err => {
          console.error("Error loading logo:", err);
          setLogoSrc(url);
        });
    } else {
      setLogoSrc(null);
    }
  }, [selectedLogo]);

  const renderFieldValue = (field) => {
    if (field.value) return field.value;
    const isPlaceholder = field.placeholder.startsWith('Enter ');
    return isPlaceholder ? field.placeholder.replace('Enter ', '') : (field.placeholder || '-');
  };

  return (
    <div className="biodata-preview-wrapper">
      <div 
        className="biodata-a4-page"
        ref={innerRef}
        style={{
          backgroundImage: `url('/src/assets/template/frame/${template.file}')`,
          color: themeColor
        }}
      >
        <div className="biodata-content-area">
          <div className="biodata-header-section">
            {logoSrc && (
              <img 
                src={logoSrc} 
                alt="Religious Logo" 
                className="biodata-religious-logo" 
                width="60"
                height="60"
              />
            )}
            {title && (
              <h1 className="biodata-main-title" style={{ color: themeColor }}>
                {title}
              </h1>
            )}
          </div>

          {/* Photo Section */}
          {photoUrl && (
            <div className="biodata-photo-container">
              <img src={photoUrl} alt="Profile" className="biodata-photo" />
            </div>
          )}

          {/* Personal Details */}
          <div className="biodata-section">
            <h2 className="biodata-section-title" style={{ color: themeColor }}>PERSONAL DETAILS</h2>
            <div className="biodata-fields-grid">
              {personalFields.map(field => (
                <div className="biodata-field-row" key={field.id}>
                  <div className="biodata-field-label" style={{ color: themeColor }}>{field.label}</div>
                  <div className="biodata-field-separator">:</div>
                  <div className="biodata-field-value">{renderFieldValue(field)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Family Details */}
          <div className="biodata-section">
            <h2 className="biodata-section-title" style={{ color: themeColor }}>FAMILY DETAILS</h2>
            <div className="biodata-fields-grid">
              {familyFields.map(field => (
                <div className="biodata-field-row" key={field.id}>
                  <div className="biodata-field-label" style={{ color: themeColor }}>{field.label}</div>
                  <div className="biodata-field-separator">:</div>
                  <div className="biodata-field-value">{renderFieldValue(field)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="biodata-section">
            <h2 className="biodata-section-title" style={{ color: themeColor }}>CONTACT DETAILS</h2>
            <div className="biodata-fields-grid">
              {contactFields.map(field => (
                <div className="biodata-field-row" key={field.id}>
                  <div className="biodata-field-label" style={{ color: themeColor }}>{field.label}</div>
                  <div className="biodata-field-separator">:</div>
                  <div className="biodata-field-value">{renderFieldValue(field)}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BiodataPreview;
