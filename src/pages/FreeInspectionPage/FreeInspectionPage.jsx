import "./FreeInspectionPage.css";
import React, { useRef } from "react";
import houseBg from "../../assets/img/banner-inspection.jpg";
import houseBgMobile from "../../assets/img/banner-inspection-responsive.jpg";
import arrowRight from "../../assets/icons/arrow.svg";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import Certificates from "../../components/Certificates/Certificates";
import FreeInspectionBenefits from "../../components/FreeInspectionBenefits/FreeInspectionBenefits";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import OurStory from "../../components/OurStory/OurStory";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";

export default function HomePage() {
  const myDivRef = useRef(null);

  const scrollToDiv = () => {
    myDivRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <div className="header-title-container">
          <div className="info-home-title">
            <h2>CALL AS TODAY FOR a free inspection</h2>
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
              <a href="mailto:pedrovieyra@yahoo.com" target="_blank">
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
      <section className="container-general">
        <Certificates />
        <section className="title-page-general">
          <h3>FREE INSPECTION</h3>
          <h2>
            <span>DID YOU KNOW THAT </span>YOUR ROOFING CAN BE REPLACED UNDER
            INSURANCE?
          </h2>
          <p>
            We are experts working with claims insurance. Contact us to book a
            visit to inspect the damage. one call is everything!
          </p>
          <section className="container-butons-general">
            <button onClick={scrollToDiv}>Free inspection</button>
            <div className="btns-financing-flex">
              <a href="tel:9192791958" target="_blank">
                <img src={phone} alt="icon-phone" />
              </a>
              <a href="mailto:pedrovieyra@yahoo.com" target="_blank">
                <img src={mail} alt="icon-phone" />
              </a>
              <a
                href="https://wa.me/19192791958?text=Hello,%20i%20need%20more%20information"
                target="_blank"
              >
                <img src={wpp} alt="icon-phone" />
              </a>
            </div>
          </section>
        </section>
        <FreeInspectionBenefits />
        <ServicesArea />
        <OurStory />
        <ContactForm divRef={myDivRef} />
        <Footer />
      </section>
    </main>
  );
}
