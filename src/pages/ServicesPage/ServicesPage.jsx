import "./ServicesPage.css";
import React, { useRef, useState, useEffect } from "react";
import useFirestoreCollection from "../../useFirestoreCollection";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow.svg";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";
import arrow from "../../assets/icons/arrow.svg";
import exteriorHouse from "../../assets/icons/exterior-house.svg";
import interiorHouse from "../../assets/icons/interior-house.svg";
import itemService from "../../assets/img/form-bg.jpg";
import houseBg from "../../assets/img/bg-service.jpg";
import houseBgMobile from "../../assets/img/bg-service.jpg";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";
import zoom from "../../assets/icons/zoom.svg";
import Menu from "../../components/Menu/Menu";
import MenuResponsive from "../../components/Menu/MenuResponsive";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import ContactForm from "../../components/ContactForm/ContactForm";
import Certificates from "../../components/Certificates/Certificates";
import Footer from "../../components/Footer/Footer";



export default function ServicesPage() {
  let container = useRef(null);
  const { data, loading, error } = useFirestoreCollection("categories");
  const defaultSelectedItem = data.find((item) => item.order === 2);
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleItemClick = (clickedItem) => {
    if (clickedItem !== selectedItem) {
      setSelectedItem(clickedItem);
    }
  };

  useEffect(() => {
    const defaultSelectedItem = data.find((item) => item.order === 1);
    setSelectedItem(defaultSelectedItem);
  }, [data]);

  if (loading) {
    return <p>ready</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const left = () => {
    if (container.current) {
      container.current.scrollLeft -= 200;
    }
  };

  const right = () => {
    if (container.current) {
      container.current.scrollLeft += 200;
    }
  };

  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <section className="header-container">
          <div className="header-title-container">
            <div className="info-home-title">
              <h1>certified roof contractor</h1>
              <h3>Professional service</h3>
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
        <section className="title-page-general">
          <h3>services</h3>
          <h2>
            <span>solutions</span> for your home
          </h2>
        </section>
        <section className="section-slider-action">
          <section className="part-left">
            <div className="section-categorie">
              <button>
                <img src={exteriorHouse} alt="icon-house" />
                exteriors
              </button>
              <button>
                <img src={interiorHouse} alt="icon-house" />
                interiors
              </button>
            </div>
            <div className="section-btns">
              <button onClick={left}>
                <img src={arrow} alt="icon arrow" />
              </button>
              <span></span>
              <button onClick={right}>
                <img src={arrow} alt="icon arrow" />
              </button>
            </div>
          </section>
          <section ref={container} className="part-right">
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`item-slider ${
                  selectedItem === item ? "active" : ""
                }`}
              >
                <div className="info-name-service">
                  <h4>{item?.name}</h4>
                  <img src={arrow} alt="icon-arrow-img" />
                </div>
                <img
                  src={item?.banner}
                  alt="img-service"
                  className="img-bg-service"
                />
              </div>
            ))}
          </section>
        </section>
        {selectedItem && (
          <section className="info-section-service">
            <div className="banner-service">
              <h4>{selectedItem?.name}</h4>
              <div className="section-butons">
                <button>
                  Free inspection
                  <div className="cont-btn">
                    <img src={arrow} alt="icon-buton" />
                  </div>
                </button>
                <div className="btns-contact">
                  <a href="/">
                    <img src={phone} alt="icon-contact" />
                  </a>
                  <a href="/">
                    <img src={mail} alt="icon-contact" />
                  </a>
                  <a href="/">
                    <img src={wpp} alt="icon-contact" />
                  </a>
                </div>
              </div>
              <img
                className="banner-img"
                src={selectedItem?.bannerSlider}
                alt="image-banner"
              />
            </div>
            <section className="all-content-service">
              <div className="info-text">
                <p>
                  The leading local roofing company. We provide a complete range
                  of services defined by quality, innovation, and expertise.
                  With years of experience, we’ve developed a strong reputation
                  for our masterful craftsmanship and committed customer
                  service, always going above and beyond to meet our clients’
                  needs. For quality roofing from trusted professionals, we are
                  the team for the job.
                </p>
                <h5>all types of residential roofing</h5>
                <p>
                  We are true roofing professionals with expertise in all types
                  of roofing systems, maintenance and repair. Whether you are
                  looking for built up roofing, low sloped roofing, modified
                  bitumen, single ply, EPDM, PVC or TPO, we stand behind every
                  job we do, making sure that our clients are completely
                  satisfied with the workmanship and quality that we provide.
                  Our goal is 100% satisfaction from the start of a job to its
                  finish.
                </p>
                <p>
                  Built Up: coal tar pitch or asphalt waterproofing between
                  plies of reinforcing felt. Low Sloped Roofing: We can help you
                  with the selection of roof deck type from the thousands of
                  available configurations and insulation for your application.
                  Modified Bitumen: Premanufactured membranes that come in
                  roles, these modified hybrid built up systems can be applied
                  in a variety of ways. Single Ply: Made from a variety of
                  polymer plastics and rubbers. EPDM: Large sheets of ethylene
                  propylene diene monomer available in black, used to insulate a
                  roof, this material can be held in place in a variety of ways.
                  PVC: Polyvinyl chloride sheets that are mechanically fastened
                  to the roof deck, available in white or tan. TPO:
                  Fleece-backed sheet membrane that can be reinforced.
                </p>
              </div>
              <div className="info-img">
                <section className="img-item">
                  <div className="cont-zoom">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    src={itemService}
                    alt="img-service"
                    className="img-bg-service"
                  />
                </section>
                <section className="img-item">
                  <div className="cont-zoom">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    src={itemService}
                    alt="img-service"
                    className="img-bg-service"
                  />
                </section>
                <section className="img-item">
                  <div className="cont-zoom">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    src={itemService}
                    alt="img-service"
                    className="img-bg-service"
                  />
                </section>
              </div>
            </section>
            <section className="article-responsive">
              <p>
                The leading local roofing company. We provide a complete range
                of services defined by quality, innovation, and expertise. With
                years of experience, we’ve developed a strong reputation for our
                masterful craftsmanship and committed customer service, always
                going above and beyond to meet our clients’ needs. For quality
                roofing from trusted professionals, we are the team for the job.
              </p>
              <h5>all types of residential roofing</h5>
              <section className="img-item">
                <div className="cont-zoom">
                  <img src={zoom} alt="icon-zoom" />
                </div>
                <img
                  src={itemService}
                  alt="img-service"
                  className="img-bg-service"
                />
              </section>
              <p>
                We are true roofing professionals with expertise in all types of
                roofing systems, maintenance and repair. Whether you are looking
                for built up roofing, low sloped roofing, modified bitumen,
                single ply, EPDM, PVC or TPO, we stand behind every job we do,
                making sure that our clients are completely satisfied with the
                workmanship and quality that we provide. Our goal is 100%
                satisfaction from the start of a job to its finish.
              </p>
              <section className="img-item">
                <div className="cont-zoom">
                  <img src={zoom} alt="icon-zoom" />
                </div>
                <img
                  src={itemService}
                  alt="img-service"
                  className="img-bg-service"
                />
              </section>
              <p>
                Built Up: coal tar pitch or asphalt waterproofing between plies
                of reinforcing felt. Low Sloped Roofing: We can help you with
                the selection of roof deck type from the thousands of available
                configurations and insulation for your application. Modified
                Bitumen: Premanufactured membranes that come in roles, these
                modified hybrid built up systems can be applied in a variety of
                ways. Single Ply: Made from a variety of polymer plastics and
                rubbers. EPDM: Large sheets of ethylene propylene diene monomer
                available in black, used to insulate a roof, this material can
                be held in place in a variety of ways. PVC: Polyvinyl chloride
                sheets that are mechanically fastened to the roof deck,
                available in white or tan. TPO: Fleece-backed sheet membrane
                that can be reinforced.
              </p>
              <section className="img-item">
                <div className="cont-zoom">
                  <img src={zoom} alt="icon-zoom" />
                </div>
                <img
                  src={itemService}
                  alt="img-service"
                  className="img-bg-service"
                />
              </section>
            </section>
          </section>
        )}
        <Certificates/>
        <ContactForm/>
        <Footer/>
      </section>
    </main>
  );
}
