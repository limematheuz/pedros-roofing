import "./HomePage.css";
import { Link } from "react-router-dom";
import houseBg from "../../assets/img/main-house-bg.jpg";
import houseBgMobile from "../../assets/img/house-bg-mobile.png";
import arrowRight from "../../assets/icons/arrow.svg";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";
import Menu from "../../components/Menu/Menu";
import MenuResponsive from "../../components/Menu/MenuResponsive";
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
            <h1>
              pedro's remodeling & home improvements
            </h1>
            <h3>North Carolina, USA</h3>
          </div>
          <div className="home-btns">
            <Link to={"/contact"} className="header-contact-btn-cont">
              <p className="contact-button">contact us</p>
              <div className="cont-btn-arrow-home">
                <img src={arrowRight} alt="" />
              </div>
            </Link>
            <div className="home-social-links">
              <a href="">
                <img src={insta} alt="icon-insta" />
              </a>
              <a href="">
                <img src={fb} alt="icon-fb" />
              </a>
            </div>
          </div>
        </div>
        <div className="aisde-menu-container">
          <Menu />
          <MenuResponsive />
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
      <Recomendations/>
      <ContactForm />
      <Footer />
    </main>
  );
}
