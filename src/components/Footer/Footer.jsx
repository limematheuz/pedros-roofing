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
            <a
              href="https://www.instagram.com/pedros.remodelingg/?hl=es%2F"
              target="_blank"
              className="footer-social-items"
            >
              <img src={insta} alt="insta-logo" />
            </a>
            <a
              href="https://www.facebook.com/PedrosRemodeling/?paipv=0&eav=AfZ1RsWjEH6ThIYotpfu167BFL22ZTASzRQeu8oKSBovLbTFr2ZJXyMIZ11hvPA9Hjo&_rdr"
              target="_blank"
              className="footer-social-items"
            >
              <img src={fb} alt="facebook-logo" />
            </a>
            <a href="https://" className="footer-social-items">
              <img src={linkedin} alt="linkedin-logo" />
            </a>
          </div>
        </section>
        <section className="info-footer-container">
          <div className="footer-services-info">
            <h4>Services</h4>
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
            <h4>Contact</h4>
            <a  href="https://wa.me/19192791958?text=Hello,%20i%20need%20more%20information"
                target="_blank" className="footer-contact-items">
              <img src={wpp} alt="" />
              <p>+1 (919) 279-1958</p>
            </a>
            <a href="tel:9192791958" target="_blank" className="footer-contact-items">
              <img src={phone} alt="" />
              <p>919-279-1958</p>
            </a>
            <a  href="mailto:pedrovieyra@yahoo.com"
                target="_blank" className="footer-contact-items">
              <img src={email} alt="" />
              <p>pedrovieyra@yahoo.com</p>
            </a>
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
