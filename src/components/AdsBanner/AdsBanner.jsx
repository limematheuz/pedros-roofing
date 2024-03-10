import React, { useState } from "react";
import { Link } from "react-router-dom";
import financingBanner from "../../assets/img/financing-banner.jpg";
import freeBanner from "../../assets/img/free-banner.jpg";
import "./AdsBanner.css";

import phone from "../../assets/icons/blue-phone.svg";
import wpp from "../../assets/icons/blue-whatsapp.svg";
import arrow from "../../assets/icons/arrow.svg";

export default function AdsBanner() {

  return (
    <section  className="cards-container">
      <section className="cont-ad-animation">
        <Link
          to={"/financing-service"}
          className="banner-items-left"
        >
          <div className="banner-title">
            <h3>financing service</h3>
            <p>Remodel any part of your house with a financing plan.</p>
          </div>
          <div className="links-banner-btns">
            <Link to={"/financing-service"} className="main-button-banner">
              <p className="see-more-btn">see more</p>
              <div className="icon-btn-banner-ad">
                <img src={arrow} alt="icon-btn" />
              </div>
            </Link>
            <div className="social-banner-btns-left">
              <a href="tel:9192791958">
                <img src={phone} alt="" />
              </a>
              <a href="https://wa.me/9192791958?text=Hello,%20I%20need%20more%20information">
                <img src={wpp} alt="" />
              </a>
            </div>
          </div>
          <span className="span-banner-left"></span>
          <img
            className="banner-img-home"
            src={financingBanner}
            alt="image-ad"
          />
        </Link>
        <Link
          to={"/free-inspection"}
          className="banner-items-right"
        >
          <div className="banner-title">
            <h3>free inspection</h3>
            <p>Complete the inspection form and book it instantly.</p>
          </div>
          <div className="links-banner-btns">
            <Link to={"/free-inspection"} className="main-button-banner">
              <p className="see-more-btn">see more</p>
              <div className="icon-btn-banner-ad">
                <img src={arrow} alt="icon-btn" />
              </div>
            </Link>
            <div className="social-banner-btns">
              <a href="tel:9192791958">
                <img src={phone} alt="" />
              </a>
              <a href="https://wa.me/9192791958?text=Hello,%20I%20need%20more%20information">
                <img src={wpp} alt="" />
              </a>
            </div>
          </div>
          <span className="span-banner"></span>
          <img className="banner-img-home" src={freeBanner} alt="" />
        </Link>
      </section>
    </section>
  );
}
