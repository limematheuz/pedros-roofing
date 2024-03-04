import "./FinancyPage.css";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow.svg";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";
import houseBg from "../../assets/img/bg-service.jpg";
import houseBgMobile from "../../assets/img/bg-service.jpg";
import Menu from "../../components/Menu/Menu";
import MenuResponsive from "../../components/Menu/MenuResponsive";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import Certificates from "../../components/Certificates/Certificates";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";
import check from "../../assets/icons/circle-check-regular.svg";
import financingOne from "../../assets/img/financing-item-one.jpg";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import OurStory from "../../components/OurStory/OurStory";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";


export default function FinancyPage() {
  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <section className="header-container">
          <div className="header-title-container">
            <div className="info-home-title">
              <h1>Finance your roof plan starting $99</h1>
              <h3>solutions for your home</h3>
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
        </section>
        <div className="aisde-menu-container">
          <Menu />
          <MenuResponsive />
        </div>
        <Benefits />
        <ResponsiveBenefits />
        <img className="header-house-bg" src={houseBg} alt="bg-page" />
        <img className="header-mobile-bg" src={houseBgMobile} alt="bg-page" />
      </section>
      <section className="container-general">
        <Certificates />
        <section className="title-page-general">
          <h3>services</h3>
          <h2>
            <span>solutions</span> for your home
          </h2>
          <p>
            The leading local roofing company. We provide a complete range of
            services defined by quality, innovation, and expertise. With years
            of experience, we’ve developed a strong reputation for our masterful
            craftsmanship and committed customer service, always going above and
            beyond to meet our clients’ needs. For quality roofing from trusted
            professionals, we are the team for the job.
          </p>
          <div className="container-butons-general">
            <button>Reserve Financing</button>
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
        <section className="benefits-financing">
          <div className="item-financing">
            <section className="info-item-financing">
              <h2><span>Flexible</span> financing options</h2>
              <p>
                we offer tailored financing solutions to suit your needs,
                whether it's roofing, siding, gutters, painting, or other
                projects.
              </p>
            </section>
            <section className="info-img-financing">
              <img src={check} className="icon-check" alt="icon-check" />
              <img src={financingOne} className="banner-check" alt="img-financing" />
            </section>
          </div>
          <div className="item-financing">
            <section className="info-item-financing">
              <h2><span>Costumized</span> plans</h2>
              <p>
                we offer tailored financing solutions to suit your needs,
                whether it's roofing, siding, gutters, painting, or other
                projects.
              </p>
            </section>
            <section className="info-img-financing">
              <img src={check} className="icon-check" alt="icon-check" />
              <img src={financingOne} className="banner-check" alt="img-financing" />
            </section>
          </div>
          <div className="item-financing">
            <section className="info-item-financing">
              <h2><span>Convenient</span> paiment options</h2>
              <p>
                we offer tailored financing solutions to suit your needs,
                whether it's roofing, siding, gutters, painting, or other
                projects.
              </p>
            </section>
            <section className="info-img-financing">
              <img src={check} className="icon-check" alt="icon-check" />
              <img src={financingOne} className="banner-check" alt="img-financing" />
            </section>
          </div>
        </section>
        <ServicesArea/>
        <OurStory/>
        <ContactForm/>
        <Footer/>
      </section>
    </main>
  );
}
