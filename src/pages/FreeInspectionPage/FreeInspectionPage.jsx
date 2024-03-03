import "./FreeInspectionPage.css";
import { Link } from "react-router-dom";
import houseBg from "../../assets/img/financing-banner.jpg";
import houseBgMobile from "../../assets/img/bg-mobile-financing.jpg";
import arrowRight from "../../assets/icons/arrow.svg";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";

import Menu from "../../components/Menu/Menu";
import MenuResponsive from "../../components/Menu/MenuResponsive";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import OurStory from "../../components/OurStory/OurStory";
import Certificates from "../../components/Certificates/Certificates";
import FreeInspectionIntro from "../../components/FreeInspectionIntro/FreeInspectionIntro";
import FreeInspectionBenefits from "../../components/FreeInspectionBenefits/FreeInspectionBenefits";
import AdsBanner from "../../components/AdsBanner/AdsBanner";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function FreeInspectionPage() {
  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <section className="header-container">
          <div className="header-title-container">
            <div className="info-home-title">
              <h1>
              CALL AS TODAY FOR A <br /> free inspection
              </h1>
              <h3>ONE CALL DOES IT ALL</h3>
            </div>
            <div className="home-btns">
              <div className="header-contact-btn-cont">
                <Link className="contact-button" to={"/contact"}>
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
          <MenuResponsive/>
        </div>
        <div></div>
        <div className="bottom-benefits-container">
          <Benefits />
          <ResponsiveBenefits/>
        </div>
      </section>
      <Certificates /> 
      <FreeInspectionIntro/>
      <FreeInspectionBenefits/>
      <OurStory />
      <AdsBanner/>
      <ServicesArea />
      <ContactForm />
      <Footer />
    </main>
  );
}