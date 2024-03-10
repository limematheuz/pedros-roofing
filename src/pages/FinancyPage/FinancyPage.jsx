import "./FinancyPage.css";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow.svg";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";
import houseBgMobile from "../../assets/img/bg-mobile-financing.jpg";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import Certificates from "../../components/Certificates/Certificates";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";
import check from "../../assets/icons/circle-check-regular.svg";
import financingOne from "../../assets/img/financing-item-one.jpg";
import financingTwo from "../../assets/img/financing-item-two.jpg";
import financingTre from "../../assets/img/financing-item-tre.jpg";
import bgFinancyBanner from "../../assets/img/financing-banner.jpg";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import OurStory from "../../components/OurStory/OurStory";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function FinancyPage() {
  return (
    <section className="body-app-container">
      <section className="header-menu-container">
        <section className="header-container">
          <div className="header-title-container">
            <div className="info-home-title">
              <h2>Finance your roof plan starting $99</h2>
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
        </section>
        <Benefits />
        <ResponsiveBenefits />
        <img className="header-house-bg" src={bgFinancyBanner} alt="bg-page" />
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
          Don't let finances hold back your dreams. With Pedro´s Remodeling, you can confidently pursue your home or business improvements
          </p>
          <section className="container-butons-general">
            <button>Reserve Financing</button>
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
        <section className="benefits-financing">
          <div className="item-financing">
            <section className="info-item-financing">
              <h2>
                <span>Flexible</span> financing options
              </h2>
              <p>
                We offer tailored financing solutions to suit your needs,
                whether it's roofing, siding, gutters, painting, or other
                projects.
              </p>
            </section>
            <section className="info-img-financing">
              <img src={check} className="icon-check" alt="icon-check" />
              <img
                src={financingOne}
                className="banner-check"
                alt="img-financing"
              />
            </section>
          </div>
          <div className="item-financing">
            <section className="info-item-financing">
              <h2>
                <span>Costumized</span> plans
              </h2>
              <p>
                Our team is dedicated to finding the right financial plan for
                you, ensuring your project gets underway smoothly and fits your
                budget.
              </p>
            </section>
            <section className="info-img-financing">
              <img src={check} className="icon-check" alt="icon-check" />
              <img
                src={financingTwo}
                className="banner-check"
                alt="img-financing"
              />
            </section>
          </div>
          <div className="item-financing">
            <section className="info-item-financing">
              <h2>
                <span>Convenient</span> paiment options
              </h2>
              <p>
                Start your project today with our accessible financing options
                and pay in installments that match your lifestyle.
              </p>
            </section>
            <section className="info-img-financing">
              <img src={check} className="icon-check" alt="icon-check" />
              <img
                src={financingTre}
                className="banner-check"
                alt="img-financing"
              />
            </section>
          </div>
        </section>
        <ServicesArea />
        <OurStory />
        <ContactForm />
        <Footer />
      </section>
    </section>
  );
}
