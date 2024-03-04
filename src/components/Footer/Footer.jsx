import "./Footer.css";
import footerRoof from "../../assets/img/red-roof-with-clouds.jpg";
import whiteLogo from "../../assets/img/white-logo.svg";

import wpp from "../../assets/icons/whatsapp.svg";
import phone from "../../assets/icons/phone-solid.svg";
import email from "../../assets/icons/envelope-regular.svg";
import insta from "../../assets/icons/white-instagram.svg";
import fb from "../../assets/icons/white-fb.svg";
import linkedin from "../../assets/icons/linkedin-figma.svg";

export default function Footer() {
  return (
    <footer className="footer-container">
      <section className="cont-info-footer">
        <section className="footer-logo">
          <img src={whiteLogo} alt="logo-pedros-remodeling" />
          <p className="direction-footer">
            North Carolina & Surrounding Areas United States.
          </p>
          <div className="footer-social-info">
            <a href="https://" className="footer-social-items">
              <img src={insta} alt="" />
            </a>
            <a  href="https://" className="footer-social-items">
              <img src={fb} alt="" />
            </a>
            <a  href="https://" className="footer-social-items">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </section>
        <section className="info-footer-container">
          <div className="footer-services-info">
            <h4>
              Services
            </h4>
            <div className="footer-services-column">
              <div className="footer-first-column">
                <p>Commercial Roofing</p>
                <p>Residencial Roofing</p>
                <p>Emergency Roofing</p>
                <p>Roof Installation</p>
                <p>Roof Inspection</p>
              </div>
              <div className="footer-first-column">
                <p>Flooring</p>
                <p>Roof Repairs</p>
                <p>Remodeling</p>
                <p>Siding</p>
              </div>
            </div>
          </div>
          <div className="footer-contact-info">
            <h4>
              Contact
            </h4>
            <div className="footer-contact-items">
              <img src={wpp} alt="" />
              <p>+1 (919) 279-1958</p>
            </div>
            <div className="footer-contact-items">
              <img src={phone} alt="" />
              <p>+1 (919) 279-1958</p>
            </div>
            <div className="footer-contact-items">
              <img src={email} alt="" />
              <p>contact@pedrosremodeling.com</p>
            </div>
          </div>
        </section>
      </section>
      <section className="line-info-bottom">
        <p>2024 All Rights Reserved - Pedro’s Roofing</p>
      </section>
      <img className="footer-img" src={footerRoof} alt="bg-footer" />
    </footer>
  );
}
