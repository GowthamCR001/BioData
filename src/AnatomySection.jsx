import React from 'react';
import './AnatomySection.css';

function AnatomySection() {
  return (
    <section className="anatomy-section" id="anatomy">
      <div className="container">
        <div className="anatomy-header">
          <div className="anatomy-eyebrow">read closely</div>
          <h2 className="anatomy-title">The Anatomy of a Biodata That Gets a Reply</h2>
          <p className="anatomy-desc">
            A good marriage biodata is an introduction with an order to it. Here is what goes
            where, and why every template on this site follows it.
          </p>
        </div>

        <div className="anatomy-content">
          <div className="anatomy-features left-features">
            <div className="feature-item right-align">
              <h3 className="feature-title">A photograph, framed right <span className="feature-dot"></span></h3>
              <p className="feature-desc">
                The crop tool holds a 3:4 portrait ratio, which is the shape every matrimonial photo is expected in. No squashed faces, no awkward edges.
              </p>
            </div>
            <div className="feature-item right-align">
              <h3 className="feature-title">Birth details for the panditji <span className="feature-dot"></span></h3>
              <p className="feature-desc">
                Date, time and place of birth sit together near the top. These are the three things elders check first when they want to match horoscopes.
              </p>
            </div>
            <div className="feature-item right-align">
              <h3 className="feature-title">Rashi, Nakshatra and Gotra, built in <span className="feature-dot"></span></h3>
              <p className="feature-desc">
                The fields most makers forget are already here, with proper dropdowns. And if your family does not follow them, delete them just as easily.
              </p>
            </div>
          </div>

          <div className="anatomy-center">
            <div className="anatomy-mockup">
              <div className="mockup-header-icon">🕉️</div>
              <div className="mockup-divider"></div>
              
              <div className="mockup-section">
                <div className="mockup-section-title">PERSONAL DETAILS</div>
                <div className="mockup-details">
                  <div className="mockup-left">
                    <div className="mockup-row"><span className="mockup-label">Name</span><span className="mockup-value">: Your Name</span></div>
                    <div className="mockup-row"><span className="mockup-label">Date of Birth</span><span className="mockup-value">: 2000-11-10</span></div>
                    <div className="mockup-row"><span className="mockup-label">Place of Birth</span><span className="mockup-value">: Place of birth</span></div>
                    <div className="mockup-row"><span className="mockup-label">Rashi</span><span className="mockup-value">: Tula (Libra)</span></div>
                    <div className="mockup-row"><span className="mockup-label">Time of Birth</span><span className="mockup-value">: 15:30</span></div>
                    <div className="mockup-row"><span className="mockup-label">Nakshatra</span><span className="mockup-value">: Nakshatra</span></div>
                    <div className="mockup-row"><span className="mockup-label">Religion/Caste</span><span className="mockup-value">: Indian</span></div>
                    <div className="mockup-row"><span className="mockup-label">Complexion</span><span className="mockup-value">: Very Fair</span></div>
                  </div>
                  <div className="mockup-right">
                    <div className="mockup-photo-large"></div>
                  </div>
                </div>
              </div>

              <div className="mockup-section">
                <div className="mockup-section-title">FAMILY DETAILS</div>
                <div className="mockup-details">
                  <div className="mockup-left full-width">
                    <div className="mockup-row"><span className="mockup-label">Father's Name</span><span className="mockup-value">: Father Name</span></div>
                    <div className="mockup-row"><span className="mockup-label">Father's Occupation</span><span className="mockup-value">: Father's Occupation</span></div>
                    <div className="mockup-row"><span className="mockup-label">Mother's Name</span><span className="mockup-value">: Mothers Name</span></div>
                    <div className="mockup-row"><span className="mockup-label">Mother's Occupation</span><span className="mockup-value">: Mother's Occupation</span></div>
                    <div className="mockup-row"><span className="mockup-label">Siblings count</span><span className="mockup-value">: Siblings count</span></div>
                  </div>
                </div>
              </div>

              <div className="mockup-section">
                <div className="mockup-section-title">CONTACT DETAILS</div>
                <div className="mockup-details">
                  <div className="mockup-left full-width">
                    <div className="mockup-row"><span className="mockup-label">Contact Person</span><span className="mockup-value">: Contact Person</span></div>
                    <div className="mockup-row"><span className="mockup-label">Contact Number</span><span className="mockup-value">: Contact Number</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="anatomy-features right-features">
            <div className="feature-item left-align">
              <h3 className="feature-title"><span className="feature-dot"></span> Education and work, stated plainly</h3>
              <p className="feature-desc">
                Qualification, occupation and income are answered before anyone has to ask. These are the questions every family asks anyway, in the order they ask them.
              </p>
            </div>
            <div className="feature-item left-align">
              <h3 className="feature-title"><span className="feature-dot"></span> Family, with room to breathe</h3>
              <p className="feature-desc">
                Parents, their occupations, siblings and their marriages. Enough to give a picture of the home, but not so much that it reads like a census.
              </p>
            </div>
            <div className="feature-item left-align">
              <h3 className="feature-title"><span className="feature-dot"></span> One clear point of contact</h3>
              <p className="feature-desc">
                A name and a number at the bottom, so the right person gets the call. Usually an uncle. It's always an uncle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnatomySection;
