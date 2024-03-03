import React, { useState } from "react";
import { Link } from "react-router-dom";
import financingBanner from "../../assets/img/financing-banner.jpg";
import freeBanner from "../../assets/img/free-banner.jpg";
import "./AdsBanner.css";

import phone from "../../assets/icons/blue-phone.svg";
import wpp from "../../assets/icons/blue-whatsapp.svg";
import arrow from "../../assets/icons/arrow.svg";

export default function AdsBanner() {
  const [isFirstHovered, setIsFirstHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);

  const handleFirstHover = () => {
    setIsFirstHovered(!isFirstHovered);
    setIsSecondHovered(false);
  };

  const handleSecondHover = () => {
    setIsSecondHovered(!isSecondHovered);
    setIsFirstHovered(false);
  };

  return (
    <main className="ads-banner-container">
      <section className="cards-container">
        <section
          className="first-card-container"
          style={{
            width: isFirstHovered ? "60%" : "35%",
            transition: "width 0.5s"
          }}
          onMouseEnter={handleFirstHover}
          onMouseLeave={handleFirstHover}
        >
          <Link to={"/financing-page"} className="banner-items">
            <span className="span-banner"></span>
            <div className="banner-title">
              <h3>financing service</h3>
              <p>The leading local roofing company.</p>
            </div>
            <div className="links-banner-btns">
              <div className="main-button-banner">
                <Link className="see-more-btn" to={"/financing-page"}>see more               
                </Link>
                <img src={arrow} alt="" /> 
              </div>
              <div className="social-banner-btns">
                <a href="">
                  <img src={phone} alt="" />
                </a>
                <a href="">
                  <img src={wpp} alt="" />
                </a>
              </div>
            </div>
            <img className="banner-img" src={financingBanner} alt="" />
          </Link>
        </section>

        <section
          className="second-card-container"
          style={{
            width: isSecondHovered ? "60%" : "35%",
            transition: "width 0.5s"
          }}
          onMouseEnter={handleSecondHover}
          onMouseLeave={handleSecondHover}
        >
          <Link to={"free-inspection"} className="banner-items">
            <span className="span-banner"></span>
            <div className="banner-title">
              <h3>get a free inspection</h3>
              <p>The leading local roofing company.</p>
            </div>
            <div className="links-banner-btns">
              <div className="main-button-banner">
                <Link className="see-more-btn" to={"/financing-page"}>see more</Link>
                <img src={arrow} alt="" />
              </div>
              <div className="social-banner-btns">
              <a href="">
                  <img src={phone} alt="" />
                </a>
                <a href="">
                  <img src={wpp} alt="" />
                </a>
              </div>
            </div>
            <img className="banner-img" src={freeBanner} alt="" />
          </Link>
        </section>
      </section>
    </main>
  );
}
