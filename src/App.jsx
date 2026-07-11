import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsOfServicePage from './TermsOfServicePage';
import RefundPolicyPage from './RefundPolicyPage';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/refund" element={<RefundPolicyPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
