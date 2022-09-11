import React from "react";
import footer from "../../images/footer.png";
const Footer = () => {
  return (
    <div>
      <footer
        style={{
          background: `url(${footer})`,
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="footer p-10  text-success"
      >
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </footer>
      <div className="text-center mb-4">
        <small>Copyright 2022 All Rights Reserved</small>
      </div>
    </div>
  );
};

export default Footer;
