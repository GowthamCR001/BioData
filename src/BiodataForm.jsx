import React from 'react';
import './BiodataForm.css';

function BiodataForm() {
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
                
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" placeholder="Enter Name" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Date of Birth</label>
                  <div className="input-with-icon">
                    <input type="text" className="form-input" placeholder="dd-mm-yyyy" />
                    <span className="input-icon">📅</span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Place of Birth</label>
                  <input type="text" className="form-input" placeholder="Enter Place of Birth" />
                </div>

                <div className="form-group">
                  <label className="form-label">Rashi</label>
                  <select className="form-input">
                    <option value="" disabled selected>Select Rashi</option>
                    <option value="aries">Aries (Mesha)</option>
                    <option value="taurus">Taurus (Vrishabha)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Time of Birth</label>
                  <div className="input-with-icon">
                    <input type="text" className="form-input" placeholder="--:--" />
                    <span className="input-icon">🕒</span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Nakshatra</label>
                  <input type="text" className="form-input" placeholder="Enter Nakshatra" />
                </div>

                <div className="form-group">
                  <label className="form-label">Religion/Caste</label>
                  <input type="text" className="form-input" placeholder="Enter Religion/Caste" />
                </div>

                <div className="form-group">
                  <label className="form-label">Complexion</label>
                  <select className="form-input">
                    <option value="" disabled selected>Select Complexion</option>
                    <option value="fair">Fair</option>
                    <option value="wheatish">Wheatish</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Height</label>
                  <select className="form-input">
                    <option value="" disabled selected>Select Height</option>
                    <option value="5-0">5' 0"</option>
                    <option value="5-5">5' 5"</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Gotra</label>
                  <input type="text" className="form-input" placeholder="Enter Gotra" />
                </div>

                <div className="form-group">
                  <label className="form-label">Languages Known</label>
                  <input type="text" className="form-input" placeholder="Enter Languages Known" />
                </div>

                <div className="form-group">
                  <label className="form-label">Qualification</label>
                  <input type="text" className="form-input" placeholder="Enter Qualification" />
                </div>

                <div className="form-group">
                  <label className="form-label">Occupation</label>
                  <input type="text" className="form-input" placeholder="Enter Occupation" />
                </div>

                <div className="form-group">
                  <label className="form-label">Income</label>
                  <input type="text" className="form-input" placeholder="Enter Income" />
                </div>

                <button className="btn-add-field">+ Add another field</button>
              </div>

              {/* Family Details */}
              <div className="form-section">
                <h3 className="section-title">Family Details</h3>
                
                <div className="form-group">
                  <label className="form-label">Fathers Name</label>
                  <input type="text" className="form-input" placeholder="Enter Fathers Name" />
                </div>

                <div className="form-group">
                  <label className="form-label">Fathers Occupation</label>
                  <input type="text" className="form-input" placeholder="Enter Fathers Occupation" />
                </div>

                <div className="form-group">
                  <label className="form-label">Mothers Name</label>
                  <input type="text" className="form-input" placeholder="Enter Mothers Name" />
                </div>

                <div className="form-group">
                  <label className="form-label">Mothers Occupation</label>
                  <input type="text" className="form-input" placeholder="Enter Mothers Occupation" />
                </div>

                <div className="form-group">
                  <label className="form-label">Siblings count</label>
                  <input type="text" className="form-input" placeholder="Enter Siblings count" />
                </div>

                <div className="form-group">
                  <label className="form-label">Sibling Name (Occupation)</label>
                  <input type="text" className="form-input" placeholder="Enter Sibling Name (Occupation)" />
                </div>

                <button className="btn-add-field">+ Add another field</button>
              </div>

              {/* Contact Details */}
              <div className="form-section">
                <h3 className="section-title">Contact Details</h3>
                
                <div className="form-group">
                  <label className="form-label">Contact Person</label>
                  <input type="text" className="form-input" placeholder="Enter Contact Person" />
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Number</label>
                  <input type="text" className="form-input" placeholder="Enter Contact Number" />
                </div>

                <div className="form-group">
                  <label className="form-label">Email ID</label>
                  <input type="text" className="form-input" placeholder="Enter Email ID" />
                </div>

                <div className="form-group">
                  <label className="form-label">Residential Address</label>
                  <input type="text" className="form-input" placeholder="Enter Residential Address" />
                </div>

                <button className="btn-add-field">+ Add another field</button>
              </div>

            </div>

            {/* Photo Upload Sidebar */}
            <div className="photo-upload-container">
              <div className="photo-upload-box">
                <div className="upload-icon">📎</div>
                <div className="upload-text">Add Your Photo</div>
                <div className="upload-hint">3:4 portrait, up to 3MB</div>
              </div>
            </div>

          </div>

          <div className="form-actions">
            <button className="btn-outline-dark">Reset Form</button>
            <button className="btn-solid-dark">Choose a Template</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BiodataForm;
