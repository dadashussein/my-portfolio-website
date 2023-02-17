import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Huseynzada</h1>

        <div className="footer__social">
          <a
            href="https://codepen.io/dadashussein"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bx bxl-codepen"></i>
          </a>
          <a
            href="https://instagram.com/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/dadashussein"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">Huseynzada. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
