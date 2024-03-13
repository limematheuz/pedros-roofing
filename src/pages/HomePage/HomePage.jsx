import "./HomePage.css";
import { Link } from "react-router-dom";
import houseBg from "../../assets/img/main-house-bg.jpg";
import houseBgMobile from "../../assets/img/main-house-bg-mobile.jpg";
import arrowRight from "../../assets/icons/arrow.svg";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import OurStory from "../../components/OurStory/OurStory";
import AdsBanner from "../../components/AdsBanner/AdsBanner";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import Recomendations from "../../components/Recomendations/Recomendations";
import Certificates from "../../components/Certificates/Certificates";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <div className="header-title-container">
          <div className="info-home-title">
            <h1>pedro's remodeling & home improvements</h1>
            <h3>North Carolina, USA</h3>
          </div>
          <div className="home-btns">
            <a href="tel:9192791958" className="header-contact-btn-cont">
              <p className="contact-button">contact us</p>
              <div className="cont-btn-arrow-home">
                <img src={arrowRight} alt="" />
              </div>
            </a>
            <div className="home-social-links">
              <a href="tel:9192791958" target="_blank">
                <img src={phone} alt="icon-insta" />
              </a>
              <a
                href="mailto:pedrovieyra@yahoo.com"
                target="_blank"
              >
                <img src={mail} alt="icon-fb" />
              </a>
              <a
                href="https://wa.me/19192791958?text=Hello,%20i%20need%20more%20information"
                target="_blank"
              >
                <img src={wpp} alt="icon-fb" />
              </a>
            </div>
          </div>
        </div>
        <Benefits />
        <ResponsiveBenefits />
        <img className="header-house-bg" src={houseBg} alt="bg-page" />
        <img className="header-mobile-bg" src={houseBgMobile} alt="bg-page" />
      </section>
      <Certificates />
      <OurStory />
      <AdsBanner />
      <ServicesArea />
      <Recomendations />
      <ContactForm />
      <Footer />
    </main>
  );
}
