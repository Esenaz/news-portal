import "./style.css"
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="social-icons">
        <Link to="/"> {/* Перенаправление на главную страницу */}
          <div className="newshub-ft">
        <div className="news">News</div>
        <div className="hub">hub</div>
        </div>

      </Link>
          <a href="https://twitter.com/"><FaTwitter /></a>
          <a href="https://www.facebook.com/"><FaFacebook /></a>
          <a href="https://www.instagram.com/"><FaInstagram /></a>
          <a href="https://www.youtube.com/"><FaYoutube /></a>
          <p className="rights">(c) 2023 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;