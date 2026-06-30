import { useState } from 'react'
import './App.css'
import BiodataForm from './BiodataForm'

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="navbar">
          <div className="logo">
            <span className="logo-icon">■</span> Biodata for Marriage
          </div>

          <nav className="nav-links">
            <a href="#templates" className="nav-link">Templates</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#guide" className="nav-link">Biodata guide</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <button className="btn-primary">Create My Biodata</button>
          </nav>
        </header>

        <main className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <div className="eyebrow">
                <span>•</span>
                <span>India's Privacy-First Marriage Biodata Maker</span>
              </div>

              <h1 className="hero-title">
                A <i>beautiful</i><br />
                biodata for marriage,<br />
                in two minutes
              </h1>

              <p className="hero-description">
                Your biodata is the first thing the other family sees about you, so make it a good one. Fill in your details, pick a design you like, and download your print ready PDF. There is no account to create, and your details stay on your own device.
              </p>

              <div className="hero-cta">
                <button className="btn-primary btn-large">Create My Biodata Free</button>
                <button className="btn-outline">See the 21 designs</button>
              </div>
            </div>

            <div className="hero-image">
              <img src="/biodata-mockup.png" alt="Stacked marriage biodata templates" />
              <div className="badge-private">
                100%
                <span>PRIVATE</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      <BiodataForm />
    </div>
  )
}

export default App
