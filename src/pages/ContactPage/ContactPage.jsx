import "./ContactPage.css";
import React, { useRef } from 'react';
import arrowRight from "../../assets/icons/arrow.svg";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import phone from "../../assets/icons/phone-solid.svg";
import location from "../../assets/icons/location.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";
import bannerContact from "../../assets/img/bg-contact.jpg";
import bannerContactMobile from "../../assets/img/main-contact-bg-mobile.jpg";
import Footer from "../../components/Footer/Footer";
import user from "../../assets/icons/user-regular.svg";
import envelope from "../../assets/icons/envelope-regular.svg";

export default function ContactPage() {
  const myDivRef = useRef(null);

  const scrollToDiv = () => {
    // Scroll to the div
    myDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <section className="header-container">
          <div className="header-title-container">
            <div className="info-home-title">
              <h2>why wait? call us today for a free inspection</h2>
              <h3>Professional service</h3>
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
        </section>
        <Benefits />
        <ResponsiveBenefits />
        <img className="header-house-bg" src={bannerContact} alt="" />
        <img className="header-mobile-bg" src={bannerContactMobile} alt="" />
      </section>
      <section className="cont-general-contact">
        <section className="title-page-general">
          <h3>services</h3>
          <h2>
            <span>solutions</span> for your home
          </h2>
          <p>
            Contact us any time. We are available 24/7 via email or telephone.
          </p>
        </section>
        <section className="contact-area">
          <section className="channels-contact">
            <a  href="tel:9192791958" className="channel-info">
              <div className="box-icon">
                <img src={phone} alt="icon-cel" />
              </div>
              <div className="text-channel">
                <h5>Call us</h5>
                <p>919-279-1958</p>
              </div>
            </a>
            <a  href="mailto:pedrovieyra@yahoo.com"
                target="_blank" className="channel-info">
              <div className="box-icon">
                <img src={mail} alt="icon-mail" />
              </div>
              <div className="text-channel">
                <h5>Email us</h5>
                <p>pedrovieyra@yahoo.com</p>
              </div>
            </a>
            <div  onClick={scrollToDiv} className="channel-info">
              <div className="box-icon">
                <img src={location} alt="icon-location" />
              </div>
              <div className="text-channel">
                <h5>Our location</h5>
                <p>North Caroline, USA 9049</p>
              </div>
            </div>
          </section>
          <section className="contact-form">
            <form className="form-container">
              <label htmlFor="name">
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                <div className="box-icon-form">
                  <img src={user} alt="" />
                </div>
              </label>
              <label htmlFor="number">
                <input
                  type="number"
                  placeholder="Phone"
                  id="number"
                  name="number"
                  autoComplete="tel"
                />
                <div className="box-icon-form">
                  <img src={phone} alt="" />
                </div>
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  autoComplete="email"
                />
                <div className="box-icon-form">
                  <img src={envelope} alt="" />
                </div>
              </label>
              <button type="submit">Reserve</button>
            </form>
          </section>
        </section>
        <section  ref={myDivRef} className="maps-container">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6688147.48739467!2d-85.15449346741865!3d35.06431343291765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sCarolina%20del%20Norte%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1709491925930!5m2!1ses!2ses"
            loading="lazy"
          ></iframe>
        </section>
      </section>
      <Footer />
    </main>
  );
}
