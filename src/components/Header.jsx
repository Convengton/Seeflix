import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Découvrez des films et séries sélectionnés pour vous</h1>
          <p className="hero__subtitle">Parcourez les tendances et retrouvez vos prochains coups de cœur.</p>
          <Link to="/media">
            <button className="hero__cta">Get Started</button>
          </Link>
        </div>
        <div className="hero__visual" aria-hidden="true"></div>
      </div>
    </header>
  );
}
