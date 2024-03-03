import "./HomePage.css";
import { Link } from "react-router-dom";
import houseBg from "../../assets/img/main-house-bg.jpg";
import houseBgMobile from "../../assets/img/house-bg-mobile.png";
import arrowRight from "../../assets/icons/arrow.svg";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";
import Menu from "../../components/Menu/Menu";
import Benefits from "../../components/Benefits/Benefits";
import OurStory from "../../components/OurStory/OurStory";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import Certificates from "../../components/Certificates/Certificates";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <section className="header-container">
          <div className="header-title-container">
            <div className="info-home-title">
              <h1>
                 pedro's remodeling & <br /> home improvements
              </h1>
              <h3>North Carolina, USA</h3>
            </div>
            <div className="home-btns">
              <div className="header-contact-btn-cont">
                <Link className="contact-button" to={"/service"}>
                  contact us
                </Link>
                <img src={arrowRight} alt="" />
              </div>
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
          <img className="header-house-bg" src={houseBg} alt="" />
          <img className="header-mobile-bg" src={houseBgMobile} alt="" />
        </section>
        <div className="aisde-menu-container">
          <Menu />
        </div>
        <div className="bottom-benefits-container">
          <Benefits />
        </div>
      </section>
      <OurStory />
      <ServicesArea />
      <Certificates />
      <ContactForm />
      <Footer />
    </main>
  );
}
