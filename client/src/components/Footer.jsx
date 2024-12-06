import React from "react";
import { Link } from "react-router-dom"; 
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Busitron Technology</h2>
          <p>&copy; 2024 Busitron Technology. All Rights Reserved.</p>
        </div>

        <div className="footer-middle">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
