import React, { useState } from "react";
import "./ServicesArea.css";
import interior from "../../assets/icons/interior-house.svg";
import exterior from "../../assets/icons/exterior-house.svg";
import arrow from "../../assets/icons/arrow.svg";
import serviceimg from "../../assets/img/casa-slider.jpg";

export default function ServicesArea() {
  const [interiorActive, setInteriorActive] = useState(false);
  const [exteriorActive, setExteriorActive] = useState(false);

  const handleInteriorClick = () => {
    setInteriorActive(!interiorActive);
    setExteriorActive(false); // Desactivar exterior si se activa interior
  };

  const handleExteriorClick = () => {
    setExteriorActive(!exteriorActive);
    setInteriorActive(false); // Desactivar interior si se activa exterior
  };

  return (
    <section className="services-area-container">
      <div className="services-info">
        <h3>Services</h3>
        <h2>
          <span>solutions</span> for your home
        </h2>
      </div>
      <div className="services-area-items">
        <div className="services-area-btns">
          <div className="sevices-first-btns">
            <button
              className={interiorActive ? "active" : ""}
              onClick={handleInteriorClick}
            >
              <img src={interior} alt="" />
              Interiors
            </button>
            <hr />
            <button
              className={exteriorActive ? "active" : ""}
              onClick={handleExteriorClick}
            >
              <img src={exterior} alt="" />
              Exteriors
            </button>
          </div>
          <div className="services-second-btns">
            <button>
              <img src={arrow} alt="" />
            </button>
            <hr />
            <button>
              <img className="arrow-right" src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="services-area-slider-container">
          <div className="service-area-card-container">
            <p>residencial</p>
            <img src="" alt="" />
            <img src={serviceimg} alt="" />
          </div>
          <div className="service-area-card-container">
            <p></p>
            <img src="" alt="" />
            <img src={serviceimg} alt="" />
          </div>
          <div className="service-area-card-container">
            <p></p>
            <img src="" alt="" />
            <img src={serviceimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
