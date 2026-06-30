import React from 'react';
import './GuideSection.css';

function GuideSection() {
  return (
    <section className="guide-section" id="guide">
      <div className="container">
        <div className="guide-header">
          <div className="guide-eyebrow">for the curious</div>
          <h2 className="guide-title">A Short, Honest Guide to the Marriage Biodata</h2>
        </div>

        <div className="guide-highlight-box">
          <h3 className="highlight-title">What is a biodata for marriage?</h3>
          <p className="highlight-text">
            A <strong>biodata for marriage</strong> is a one page profile that families exchange when they look for a match. It carries your personal details
            (name, date of birth, height, religion, education, occupation), horoscope details (Rashi, Nakshatra, Gotra), family background
            and a contact, usually with a photograph. Think of it as a resume for marriage. Before anyone meets you, parents, aunts and
            well wishers will read this page. That is why it deserves more care than a Word file put together the night before.
          </p>
          <p className="highlight-text muted">
            People call it many things: bio data for marriage, marriage biodata, wedding biodata, shadi ka biodata (शादी का बायोडाटा), matrimonial biodata,
            even a marriage resume or marriage CV. Different names, same page, same purpose.
          </p>
        </div>

        <div className="guide-content">
          <h3 className="section-subtitle">What should a marriage biodata include?</h3>
          
          <div className="guide-cards">
            <div className="guide-card">
              <h4 className="card-heading">PERSONAL DETAILS</h4>
              <ul className="card-list">
                <li>Full name & photo</li>
                <li>Date, time & place of birth</li>
                <li>Height & complexion</li>
                <li>Religion, caste & Gotra</li>
                <li>Rashi & Nakshatra</li>
                <li>Education, occupation & income</li>
                <li>Languages known</li>
              </ul>
            </div>

            <div className="guide-card">
              <h4 className="card-heading">FAMILY DETAILS</h4>
              <ul className="card-list">
                <li>Father's name & occupation</li>
                <li>Mother's name & occupation</li>
                <li>Siblings & their marriages</li>
                <li>Native place & family values</li>
              </ul>
            </div>

            <div className="guide-card">
              <h4 className="card-heading">CONTACT DETAILS</h4>
              <ul className="card-list">
                <li>Contact person</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Residential address</li>
              </ul>
            </div>
          </div>

          <div className="guide-grid-2">
            <div className="guide-text-block">
              <h3 className="block-title">Marriage biodata format for a girl</h3>
              <p className="block-text">
                A girl's biodata traditionally opens with personal and horoscope details,
                then education, then family. That order is changing, and many families
                now lead with her degree and designation. On this maker the order is
                yours to set. Move the fields until the page reads the way your family
                wants. There is no single correct format, only the one that sounds like her.
                See our full <a href="#" className="guide-link">marriage biodata format for girl</a> guide, with a sample.
              </p>
            </div>

            <div className="guide-text-block">
              <h3 className="block-title">Marriage biodata format for a boy</h3>
              <p className="block-text">
                For a boy's biodata, the first questions are nearly always qualification,
                occupation and income, so answer them early and plainly. Name the
                company or business and the city. If you are settled abroad, say so, along
                with your visa status. Then family, then expectations. A biodata that
                answers the obvious questions upfront gets a phone call. One that makes
                people dig usually does not. See our full <a href="#" className="guide-link">marriage biodata format for boy</a> guide, with a sample.
              </p>
            </div>

            <div className="guide-text-block">
              <h3 className="block-title">With a photo, or without?</h3>
              <p className="block-text">
                With a photo, if you can. A biodata with a clear 3:4 portrait gets warmer
                and faster replies, and the crop tool frames it properly. Go without if your
                family or community prefers it that way. Several designs here look
                complete and elegant with no photo at all. Both are normal, so choose
                what you are comfortable with.
              </p>
            </div>

            <div className="guide-text-block">
              <h3 className="block-title">Traditional, modern, or religious design?</h3>
              <p className="block-text">
                Traditional designs carry ornate borders and give the horoscope pride of
                place. Modern ones are quieter, with clean lines and personality first.
                Religious formats add community symbols and the fields your tradition
                expects. Every field on every template can be renamed, added or removed,
                so any design here adapts easily to Hindu, Muslim, Sikh, Jain or Christian
                customs. We have detailed guides for the <a href="#" className="guide-link">Hindu marriage biodata</a> and the <a href="#" className="guide-link">Muslim marriage biodata</a>.
              </p>
            </div>
          </div>

          <div className="guide-text-block full-width">
            <h3 className="block-title">Looking for a Canva marriage biodata template?</h3>
            <p className="block-text">
              Many people land here after trying a Canva marriage biodata template, and Canva is genuinely good at what it does. But it is a blank canvas design tool.
              You type "Rashi" and "Gotra" into text boxes yourself, line everything up by hand, and hope the export comes out A4. A maker built only for marriage
              biodatas skips all of that. The fields are already there, the fonts are already set, and the layout is already print ready. You bring the details, choose a design
              and download. What takes an evening in Canva takes two minutes here, and your information never leaves your device.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GuideSection;
