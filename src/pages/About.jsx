import React from "react";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__overlay" />
        <h1>About us</h1>
      </section>

      <section className="about-body container">
        <div className="mission-block">
          <div className="mission-visual">
            <img src="/image.png" alt="TidesStreaming logo" />
          </div>
          <div className="mission-copy">
            <h2>Our Mission</h2>
            <p>
              We are a next-generation streaming platform built to bring your favorite movies, shows and live events together in one place.
            </p>
            <p>
              Our mission is to connect creators and audiences through high-quality, ad-free entertainment — anytime, anywhere.
            </p>
          </div>
        </div>

        <div className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">✓</div>
              <div>
                <h3>Quality Content</h3>
                <p>Curated streaming picks with top-tier movies and series.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">🌍</div>
              <div>
                <h3>Global Access</h3>
                <p>Stream anywhere with a seamless multilingual experience.</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-icon">✨</div>
              <div>
                <h3>Community & Creativity</h3>
                <p>Build a vibrant viewing community around premium entertainment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
