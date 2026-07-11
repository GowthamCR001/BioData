import React, { useState } from 'react';
import './FaqSection.css';

const faqs = [
  {
    id: '01',
    question: 'What is a biodata for marriage?',
    answer: 'A marriage biodata is a one page profile used when families look for a match. It lists your personal details like name, date of birth, height, religion, education and job, your horoscope details such as Rashi, Nakshatra and Gotra, your family background, and a contact number, usually with a photo. Families share it as a first introduction before taking things forward.'
  },
  {
    id: '02',
    question: 'How do I make a biodata for marriage online?',
    answer: 'To make a biodata for marriage: 1) fill in your personal, family and contact details in the form, 2) upload and crop your photo, 3) choose from 21 designer templates, and 4) download your A4 PDF. It takes about 2 minutes and you do not need to sign up.'
  },
  {
    id: '03',
    question: 'How do I make a biodata for marriage on my mobile phone?',
    answer: 'Open this page in any mobile browser like Chrome or Safari. The form, the photo crop and the PDF download all work on your phone. There is no app to install. The finished PDF saves to your phone and you can share it on WhatsApp right away.'
  },
  {
    id: '04',
    question: 'Where is the best place to make a biodata for marriage?',
    answer: 'Right here. Word and Canva make you start from a blank page, and most online makers save your details on their servers. This maker has every Indian biodata field built in, including Rashi, Nakshatra and Gotra. It gives you a print ready A4 PDF, and your information stays on your own device.'
  },
  {
    id: '05',
    question: 'What should be included in a marriage biodata?',
    answer: "Add your full name, date and place of birth, height, complexion, religion and caste, education, job and income, horoscope details (Rashi, Nakshatra, Gotra), languages you speak, your parents' names and occupations, details of your siblings, and a contact person with phone number and address. A clear, recent photo helps a lot."
  },
  {
    id: '06',
    question: 'Is this marriage biodata maker free?',
    answer: 'Yes, this is a free marriage biodata maker. Creating, editing and previewing your biodata on every template costs nothing. You only pay ₹49 one time when you download a premium template. No subscriptions, no hidden charges, no watermarks.'
  },
  {
    id: '07',
    question: 'Is my personal information safe?',
    answer: 'Yes, safer than on most biodata sites. Everything happens inside your browser. Your details and photo are never uploaded to our servers. They stay on your own device, so they cannot leak from a database, because there is no database.'
  },
  {
    id: '08',
    question: 'Which biodata format is best for a girl or a boy?',
    answer: "The structure is the same for both. Personal details first, then family, then contact. In a girl's biodata, families often highlight education, hobbies and horoscope details. In a boy's biodata, job and income usually come first. You can rename, reorder or remove every field, so one format works for both."
  },
  {
    id: '09',
    question: 'Can I make a biodata with or without a photo?',
    answer: 'Yes, both work. Add a photo with the built in 3:4 crop tool for a traditional photo biodata, or skip it if your family prefers a no photo format. Every template looks complete either way.'
  },
  {
    id: '10',
    question: 'Can I customise the fields, like adding Gotra or removing Caste?',
    answer: 'Yes. You can rename any label, add new fields like assets, partner expectations or visa status, delete fields you do not need, and move fields up or down. Horoscope fields like Rashi, Nakshatra and Gotra are already there.'
  },
  {
    id: '11',
    question: 'What file format do I get, and will it print correctly?',
    answer: 'You get a high resolution A4 PDF. That is the format matrimonial sites, WhatsApp and print shops all accept. The layout is fixed, so it looks the same on every phone, computer and printout.'
  },
  {
    id: '12',
    question: 'Can I download my marriage biodata in Word format?',
    answer: 'We give you an A4 PDF instead of a Word file. A PDF looks the same on every device, while Word files often break their layout. Most people want Word so they can edit later, and you can do that here anyway. Your details stay saved in your browser, so you can change a field and download a fresh PDF any time, free.'
  },
  {
    id: '13',
    question: 'Is this better than a Canva marriage biodata template?',
    answer: 'Canva is a good design tool, but it is not made for biodatas. You start from a blank canvas, type fields like Rashi and Gotra into text boxes yourself, and line everything up by hand. Here the fields, fonts and A4 layout are already done. You just add your details, pick a design and download. If you have been searching for a Canva marriage biodata template, this is the faster way.'
  },
  {
    id: '14',
    question: 'Can I share my biodata on WhatsApp and matrimony sites?',
    answer: 'Yes. The PDF is easy to share on WhatsApp and is accepted on all major matrimonial sites, including Shaadi.com, BharatMatrimony and Jeevansathi. You can also print it for in person meetings.'
  },
  {
    id: '15',
    question: 'Can I edit my biodata after downloading it?',
    answer: 'Yes. Your details stay saved in your browser. Come back any time, change what you need, switch templates if you like, and download again.'
  },
  {
    id: '16',
    question: 'Do you have templates for Hindu, Muslim, and other communities?',
    answer: "Yes. There are traditional Hindu designs with horoscope sections, clean minimal layouts that suit Muslim and Christian biodatas, and modern formats for inter community matches. Every field can be changed, so any template can be adjusted to your community's customs."
  }
];

const FaqSection = () => {
  const [openId, setOpenId] = useState('01');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <p className="faq-eyebrow">QUESTIONS, ANSWERED STRAIGHT</p>
          <h2 className="faq-title">Marriage Biodata FAQs</h2>
          <p className="faq-subtitle">
            These are the questions every family asks before they trust a biodata maker.<br/>
            Straight answers, no fine print.
          </p>
        </div>

        <div className="faq-container-wrapper">
          <div className="faq-container">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                  <span className="faq-id">{faq.id}</span>
                  <span className="faq-text">{faq.question}</span>
                  <span className="faq-icon">{openId === faq.id ? '-' : '+'}</span>
                </button>
                
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-inner">
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
