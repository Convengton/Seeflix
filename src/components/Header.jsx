import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Streaming is no longer a luxury, it's a Lifestyle</h1>
          <Link to="/media">
            <button className="hero__cta">Get started</button>
          </Link>
        </div>
        <div className="hero__visual" aria-hidden="true"></div>
      </div>
    </header>
  );
}
