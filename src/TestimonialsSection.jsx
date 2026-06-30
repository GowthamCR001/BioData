import React from 'react';
import './TestimonialsSection.css';

function TestimonialsSection() {
  const testimonials = [
    {
      text: "Made my sister's biodata in ten minutes flat. The horoscope fields were already there. No other site had Gotra built in.",
      name: "Priya S.",
      location: "Hyderabad",
      rotation: "-2deg"
    },
    {
      text: "I liked that nothing gets uploaded. My parents were worried about putting family details on matrimony sites; this stays on our own phone.",
      name: "Arjun M.",
      location: "Pune",
      rotation: "1deg"
    },
    {
      text: "The traditional template with the gold border looked like a wedding card. Relatives kept asking which designer we used.",
      name: "Kavitha R.",
      location: "Chennai",
      rotation: "-1deg"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-eyebrow">with love, from</div>
          <h2 className="testimonials-title">Families Who Sent Theirs First</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card-wrapper" 
              style={{ '--card-rotation': testimonial.rotation }}
            >
              <div className="testimonial-card">
                <div className="masking-tape"></div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-dot"></div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-location">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
