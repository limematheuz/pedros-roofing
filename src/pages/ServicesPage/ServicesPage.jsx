import "./ServicesPage.css";
import React, { useRef, useState, useEffect } from "react";
import useFirestoreCollection from "../../useFirestoreCollection";
import arrowRight from "../../assets/icons/arrow.svg";
import arrow from "../../assets/icons/arrow.svg";
import exteriorHouse from "../../assets/icons/exterior-house.svg";
import interiorHouse from "../../assets/icons/interior-house.svg";
import itemService from "../../assets/img/form-bg.jpg";
import houseBg from "../../assets/img/bg-service.jpg";
import houseBgMobile from "../../assets/img/main-service-bg-mobile.jpg";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";
import zoom from "../../assets/icons/zoom.svg";
import Benefits from "../../components/Benefits/Benefits";
import ResponsiveBenefits from "../../components/Benefits/ResponsiveBenefits";
import ContactForm from "../../components/ContactForm/ContactForm";
import Certificates from "../../components/Certificates/Certificates";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

export default function ServicesPage() {
  let container = useRef(null);
  const { data, loading, error } = useFirestoreCollection("categories");
  const defaultSelectedItem = data.find((item) => item.order === 2);
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);
  const [filterActive, setFilterActive] = useState(false);
  const myDivRef = useRef(null);

  const scrollToDiv = () => {
    myDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
    return <Loading />;
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

  const filterInterior = () => {
    setFilterActive(true);
  };

  const resetFilter = () => {
    setFilterActive(false);
  };

  return (
    <main className="body-app-container">
      <section className="header-menu-container">
        <section className="header-container">
          <div className="header-title-container">
            <div className="info-home-title">
              <h2>certified roof contractor</h2>
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
              <button
                className={
                  filterActive
                    ? "section-categorie-button"
                    : "active-filter-button"
                }
                onClick={resetFilter}
              >
                <img src={exteriorHouse} alt="icon-house" />
                exteriors
              </button>
              <button
                className={
                  filterActive
                    ? "active-filter-button-two"
                    : "section-categorie-button-two"
                }
                onClick={filterInterior}
              >
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
            {data.map((item) =>
              (filterActive && item.sector === "interior") || !filterActive ? (
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
              ) : null
            )}
          </section>
        </section>
        {selectedItem && (
          <section className="info-section-service">
            <div className="banner-service">
              <h4>{selectedItem?.name}</h4>
              <div className="section-butons">
                <button  onClick={scrollToDiv}>
                  Free inspection
                  <div className="cont-btn">
                    <img src={arrow} alt="icon-buton" />
                  </div>
                </button>
                <div className="btns-contact">
                  <a href="tel:9192791958" target="_blank">
                    <img src={phone} alt="icon-contact" />
                  </a>
                  <a
                    href="mailto:pedrovieyra@yahoo.com"
                    target="_blank"
                  >
                    <img src={mail} alt="icon-contact" />
                  </a>
                  <a
                    href="https://wa.me/19192791958?text=Hello,%20i%20need%20more%20information"
                    target="_blank"
                  >
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
                <p>{selectedItem?.parrafOne}</p>
                <h5>{selectedItem?.subtitle}</h5>
                <p>{selectedItem?.parrafTwo}</p>
                {Array.isArray(selectedItem?.parrafTre) ? (
                  <ul className="service-parraf-three">
                    {selectedItem.parrafTre.map((instruccion, index) => (
                      <li key={index}>{instruccion}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{selectedItem?.parrafTre}</p>
                )}
              </div>
              <div className="info-img">
                <section className="img-item">
                  <div className="cont-zoom">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    src={selectedItem?.servicesOne}
                    alt="img-service"
                    className="img-bg-service"
                  />
                </section>
                <section className="img-item">
                  <div className="cont-zoom">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    src={selectedItem?.servicesTwo}
                    alt="img-service"
                    className="img-bg-service"
                  />
                </section>
                <section className="img-item">
                  <div className="cont-zoom">
                    <img src={zoom} alt="icon-zoom" />
                  </div>
                  <img
                    src={selectedItem?.servicesTre}
                    alt="img-service"
                    className="img-bg-service"
                  />
                </section>
              </div>
            </section>
            <section className="article-responsive">
              <p>{selectedItem?.parrafOne}</p>
              <h5>{selectedItem?.subtitle}</h5>
              <section className="img-item">
                <div className="cont-zoom">
                  <img src={zoom} alt="icon-zoom" />
                </div>
                <img
                  src={selectedItem?.servicesOne}
                  alt="img-service"
                  className="img-bg-service"
                />
              </section>
              <p>{selectedItem?.parrafTwo}</p>
              <section className="img-item">
                <div className="cont-zoom">
                  <img src={zoom} alt="icon-zoom" />
                </div>
                <img
                  src={selectedItem?.servicesTwo}
                  alt="img-service"
                  className="img-bg-service"
                />
              </section>
              {Array.isArray(selectedItem?.parrafTre) ? (
                <ul className="box-lista-service">
                  {selectedItem.parrafTre.map((instruccion, index) => (
                    <li key={index}>{instruccion}</li>
                  ))}
                </ul>
              ) : (
                <p>{selectedItem?.parrafTre}</p>
              )}
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
        <Certificates />
        <ContactForm  divRef={myDivRef}/>
        <Footer />
      </section>
    </main>
  );
}
