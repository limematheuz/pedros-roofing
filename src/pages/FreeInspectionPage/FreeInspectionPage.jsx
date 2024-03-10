import "./FreeInspectionPage.css";
import { Link } from "react-router-dom";
import houseBg from "../../assets/img/banner-inspection.jpg";
import arrowRight from "../../assets/icons/arrow.svg";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";
import Menu from "../../components/Menu/Menu";
import MenuResponsive from "../../components/Menu/MenuResponsive";
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
  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <div className="header-title-container">
          <div className="info-home-title">
            <h2>CALL AS TODAY FOR a free inspection</h2>
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
              <a
                href="https://www.instagram.com/pedros.remodelingg/?hl=es%2F"
                target="_blank"
              >
                <img src={insta} alt="icon-insta" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555623552424&locale=es_ES"
                target="_blank"
              >
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
        <img className="header-mobile-bg" src={houseBg} alt="bg-page" />
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
            The leading local roofing company. We provide a complete range of
            services defined by quality, innovation, and expertise. With years
            of experience, we’ve developed a strong reputation for our masterful
            craftsmanship and committed customer service, always going above and
            beyond to meet our clients’ needs. For quality roofing from trusted
            professionals, we are the team for the job.
          </p>
          <section className="container-butons-general">
            <button>Free inspection</button>
            <div className="btns-financing-flex">
              <a href="">
                <img src={phone} alt="icon-phone" />
              </a>
              <a href="">
                <img src={mail} alt="icon-phone" />
              </a>
              <a href="">
                <img src={wpp} alt="icon-phone" />
              </a>
            </div>
          </section>
        </section>
        <FreeInspectionBenefits />
        <ServicesArea />
        <OurStory />
        <ContactForm />
        <Footer />
      </section>
    </main>
  );
}
