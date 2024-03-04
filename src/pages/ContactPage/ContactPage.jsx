import "./ContactPage.css";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow.svg";
import Menu from "../../components/Menu/Menu";
import MenuResponsive from "../../components/Menu/MenuResponsive";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import bannerContact from "../../assets/img/bg-contact.jpg";

export default function ContactPage() {
  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <section className="header-container">
          <div className="header-title-container">
            <div className="info-home-title">
              <h1>
                why wait?
                <br />
                call us today for
                <br />a free inspection
              </h1>
              <h3>Professional service</h3>
            </div>
            <div className="home-btns">
              <Link to={"/service"} className="header-contact-btn-cont">
                <div className="contact-button">
                  reserve
                </div>
                <div className="cont-btn-arrow-home">
                  <img src={arrowRight} alt="" />
                </div>
              </Link>
              <div className="home-social-links">
                <a href="">
                  <img src={insta} alt="" />
                </a>
                <a href="">
                  <img src={fb} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="aisde-menu-container">
          <Menu />
          <MenuResponsive />
        </div>
        <Benefits />
        <ResponsiveBenefits />
        <img className="header-house-bg" src={bannerContact} alt="" />
        <img className="header-mobile-bg" src={bannerContact} alt="" />
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
            <div className="channel-info">
              <div className="box-icon">
                <img src={phone} alt="icon-cel" />
              </div>
              <div className="text-channel">
                <h5>Call us</h5>
                <p>407-610-8157</p>
              </div>
            </div>
            <div className="channel-info">
              <div className="box-icon">
                <img src={mail} alt="icon-cel" />
              </div>
              <div className="text-channel">
                <h5>Email us</h5>
                <p>contact@pedrosremodeling.com</p>
              </div>
            </div>
            <div className="channel-info">
              <div className="box-icon">
                <img src={phone} alt="icon-cel" />
              </div>
              <div className="text-channel">
                <h5>Our location</h5>
                <p>North Caroline, USA 9049</p>
              </div>
            </div>
          </section>
          <section className="contact-form"></section>
        </section>
        <section className="maps-container">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6688147.48739467!2d-85.15449346741865!3d35.06431343291765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sCarolina%20del%20Norte%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1709491925930!5m2!1ses!2ses"
            loading="lazy"
          ></iframe>
        </section>
      </section>
    </main>
  );
}
