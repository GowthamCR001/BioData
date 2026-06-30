import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cropper from 'react-easy-crop';
import CustomDropdown from './CustomDropdown';
import { getCroppedImg } from './cropImage';
import './BiodataForm.css';

const generateHeights = () => {
  const heights = [];
  for (let feet = 3; feet <= 7; feet++) {
    for (let inches = 0; inches <= 11; inches++) {
      heights.push(`${feet}' ${inches}"`);
    }
  }
  return heights;
};

const initialPersonalFields = [
  { id: 'p1', label: 'Name', type: 'text', placeholder: 'Enter Name' },
  { id: 'p2', label: 'Date of Birth', type: 'date', placeholder: 'dd-mm-yyyy' },
  { id: 'p3', label: 'Place of Birth', type: 'text', placeholder: 'Enter Place of Birth' },
  { id: 'p4', label: 'Rashi', type: 'select', options: ['Mesh (Aries)', 'Varishabha (Taurus)', 'Mithuna (Gemini)', 'Karka (Cancer)', 'Simha (Leo)', 'Kanya (Virgo)', 'Tula (Libra)', 'Vrishchika (Scorpio)', 'Dhanu (Sagittarius)', 'Makara (Capricorn)', 'Kumbha (Aquarius)', 'Meena (Pisces)'], placeholder: 'Select Rashi' },
  { id: 'p5', label: 'Time of Birth', type: 'time', placeholder: '--:--' },
  { id: 'p6', label: 'Nakshatra', type: 'text', placeholder: 'Enter Nakshatra' },
  { id: 'p7', label: 'Religion/Caste', type: 'text', placeholder: 'Enter Religion/Caste' },
  { id: 'p8', label: 'Complexion', type: 'select', options: ['Fair', 'Wheatish', 'Dark'], placeholder: 'Select Complexion' },
  { id: 'p9', label: 'Height', type: 'select', options: generateHeights(), placeholder: 'Select Height' },
  { id: 'p10', label: 'Gotra', type: 'text', placeholder: 'Enter Gotra' },
  { id: 'p11', label: 'Languages Known', type: 'text', placeholder: 'Enter Languages Known' },
  { id: 'p12', label: 'Qualification', type: 'text', placeholder: 'Enter Qualification' },
  { id: 'p13', label: 'Occupation', type: 'text', placeholder: 'Enter Occupation' },
  { id: 'p14', label: 'Income', type: 'text', placeholder: 'Enter Income' },
];

const initialFamilyFields = [
  { id: 'f1', label: 'Fathers Name', type: 'text', placeholder: 'Enter Fathers Name' },
  { id: 'f2', label: 'Fathers Occupation', type: 'text', placeholder: 'Enter Fathers Occupation' },
  { id: 'f3', label: 'Mothers Name', type: 'text', placeholder: 'Enter Mothers Name' },
  { id: 'f4', label: 'Mothers Occupation', type: 'text', placeholder: 'Enter Mothers Occupation' },
  { id: 'f5', label: 'Siblings count', type: 'text', placeholder: 'Enter Siblings count' },
  { id: 'f6', label: 'Sibling Name (Occupation)', type: 'text', placeholder: 'Enter Sibling Name (Occupation)' },
];

const initialContactFields = [
  { id: 'c1', label: 'Contact Person', type: 'text', placeholder: 'Enter Contact Person' },
  { id: 'c2', label: 'Contact Number', type: 'text', placeholder: 'Enter Contact Number' },
  { id: 'c3', label: 'Email ID', type: 'text', placeholder: 'Enter Email ID' },
  { id: 'c4', label: 'Residential Address', type: 'text', placeholder: 'Enter Residential Address' },
];

function BiodataForm() {
  const [personalFields, setPersonalFields] = useState(initialPersonalFields);
  const [familyFields, setFamilyFields] = useState(initialFamilyFields);
  const [contactFields, setContactFields] = useState(initialContactFields);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [rawPhotoUrl, setRawPhotoUrl] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setRawPhotoUrl(url);
      setShowCropper(true);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const saveCrop = async () => {
    try {
      const croppedImage = await getCroppedImg(rawPhotoUrl, croppedAreaPixels);
      setPhotoUrl(croppedImage);
      setShowCropper(false);
    } catch (e) {
      console.error(e);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current && !photoUrl) {
      fileInputRef.current.click();
    }
  };

  const removePhoto = (e) => {
    e.stopPropagation();
    setPhotoUrl(null);
    setRawPhotoUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const moveField = (fields, setFields, index, direction) => {
    if (direction === 'up' && index > 0) {
      const newFields = [...fields];
      [newFields[index - 1], newFields[index]] = [newFields[index], newFields[index - 1]];
      setFields(newFields);
    } else if (direction === 'down' && index < fields.length - 1) {
      const newFields = [...fields];
      [newFields[index + 1], newFields[index]] = [newFields[index], newFields[index + 1]];
      setFields(newFields);
    }
  };

  const removeField = (fields, setFields, id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const addField = (fields, setFields, prefix) => {
    const newId = `${prefix}${Date.now()}`;
    const newLabel = `FIELD ${fields.length + 1}`;
    setFields([...fields, { id: newId, label: newLabel, type: 'text', placeholder: `Enter ${newLabel}` }]);
  };

  const updateFieldLabel = (fields, setFields, id, newLabel) => {
    setFields(fields.map(f => f.id === id ? { ...f, label: newLabel } : f));
  };

  const renderField = (field, index, fields, setFields) => {
    return (
      <motion.div 
        key={field.id} 
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="form-group"
      >
        <div className="form-label-row">
          <input 
            type="text"
            className="form-label-input" 
            value={field.label} 
            onChange={(e) => updateFieldLabel(fields, setFields, field.id, e.target.value)}
          />
          <div className="form-field-actions">
            <button 
              type="button" 
              className="action-btn" 
              onClick={() => moveField(fields, setFields, index, 'up')}
              disabled={index === 0}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
            <button 
              type="button" 
              className="action-btn" 
              onClick={() => moveField(fields, setFields, index, 'down')}
              disabled={index === fields.length - 1}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <button 
              type="button" 
              className="action-btn action-remove" 
              onClick={() => removeField(fields, setFields, field.id)}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {field.type === 'select' ? (
          <CustomDropdown options={field.options} placeholder={field.placeholder} />
        ) : (
          <div className={field.icon ? "input-with-icon" : ""}>
            <input type={field.type || 'text'} className="form-input" placeholder={field.placeholder} />
            {field.icon && <span className="input-icon">{field.icon}</span>}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="form-section-wrapper" id="biodata-form">
      <div className="container">
        <div className="form-header">
          <div className="form-header-chapter">chapter one</div>
          <h2 className="form-header-title">Begin With Your Story</h2>
          <p className="form-header-subtitle">
            You can rename, reorder or remove every field below. Make it read the way your family speaks.
          </p>
        </div>

        <div className="form-card">
          <div className="form-layout">
            
            <div className="form-fields">
              {/* Personal Details */}
              <div className="form-section">
                <h3 className="section-title">Personal Details</h3>
                <AnimatePresence>
                  {personalFields.map((field, index) => renderField(field, index, personalFields, setPersonalFields))}
                </AnimatePresence>
                <button className="btn-add-field" type="button" onClick={() => addField(personalFields, setPersonalFields, 'p')}>+ Add another field</button>
              </div>

              {/* Family Details */}
              <div className="form-section">
                <h3 className="section-title">Family Details</h3>
                <AnimatePresence>
                  {familyFields.map((field, index) => renderField(field, index, familyFields, setFamilyFields))}
                </AnimatePresence>
                <button className="btn-add-field" type="button" onClick={() => addField(familyFields, setFamilyFields, 'f')}>+ Add another field</button>
              </div>

              {/* Contact Details */}
              <div className="form-section">
                <h3 className="section-title">Contact Details</h3>
                <AnimatePresence>
                  {contactFields.map((field, index) => renderField(field, index, contactFields, setContactFields))}
                </AnimatePresence>
                <button className="btn-add-field" type="button" onClick={() => addField(contactFields, setContactFields, 'c')}>+ Add another field</button>
              </div>

            </div>

            {/* Photo Upload Sidebar */}
            <div className="photo-upload-container">
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                style={{ display: 'none' }} 
                onChange={handlePhotoUpload} 
              />
              <div className="photo-upload-box" onClick={triggerFileInput}>
                {photoUrl ? (
                  <>
                    <img src={photoUrl} alt="Uploaded profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button className="btn-remove-photo" onClick={removePhoto} title="Remove Photo">✕</button>
                  </>
                ) : (
                  <>
                    <div className="upload-icon">📎</div>
                    <div className="upload-text">Add Your Photo</div>
                    <div className="upload-hint">3:4 portrait, up to 3MB</div>
                  </>
                )}
              </div>
            </div>

          </div>

          <div className="form-actions">
            <button className="btn-outline-dark" type="button">Reset Form</button>
            <button className="btn-solid-dark" type="button">Choose a Template</button>
          </div>

        </div>
      </div>

      {showCropper && (
        <div className="cropper-modal-overlay">
          <div className="cropper-modal">
            <div className="cropper-container">
              <Cropper
                image={rawPhotoUrl}
                crop={crop}
                zoom={zoom}
                aspect={3 / 4}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
            <div className="cropper-actions">
              <button className="btn-outline-dark" onClick={() => setShowCropper(false)}>Cancel</button>
              <button className="btn-solid-dark" onClick={saveCrop}>Save Crop</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default BiodataForm;
