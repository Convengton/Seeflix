
import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__overlay" />
        <div className="contact-hero__copy">
          <h1>Contact</h1>
          <p>Need help? Send us a message and our streaming team will reply quickly.</p>
        </div>
      </section>

      <section className="contact-body container">
        <div className="contact-card contact-card--form">
          <h2>Get in touch</h2>
          <p>Have a question about TidesStreaming? Fill out the form below and we'll get back to you soon.</p>
          <ContactForm />
        </div>

        <div className="contact-card contact-card--info">
          <h2>Contact Details</h2>
          <div className="info-item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
            <div>
              <strong>Phone</strong>
              <p>(+509) 3890-3997</p>
            </div>
          </div>
          <div className="info-item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" fill="none" strokeWidth="2" />
              <path d="M2 6l10 8 10-8" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <strong>Email</strong>
              <p>tidesstreaming@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" fill="none" strokeWidth="2" />
              <circle cx="12" cy="10" r="3" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
            <div>
              <strong>Address</strong>
              <p>rue Costa,  Delmas #33</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
