import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section footer__brand-section">
        <div className="footer__brand">
          <img className="footer__logo" src="/image.png" alt="Seeflix logo" />
          <span>Seeflix</span>
        </div>
      </div>
      <div className="footer__section">
        <h4>Menu</h4>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/media">Media</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer__section">
        <h4>Contact</h4>
        <p>(+509) 3890-3997</p>
        <p>tidesstreaming@gmail.com</p>
        <p>rue Costa,  Delmas #33</p>
      </div>
      <div className="footer__copyright">
        <p>All rights reserved TidesStreaming 2025</p>
      </div>
    </footer>
  );
}
