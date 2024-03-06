import React, { useRef } from "react";
import "./Recomendations.css";

import user1 from "../../assets/img/user1.jpg";
import user2 from "../../assets/img/user2.jpg";
import user3 from "../../assets/img/user3.jpg";
import user4 from "../../assets/img/user4.jpg";
import user5 from "../../assets/img/user5.jpg";

import arrow from "../../assets/icons/arrow.svg";
import insta from "../../assets/icons/white-instagram.svg";
import fb from "../../assets/icons/white-fb.svg";
import google from "../../assets/icons/google.svg";


import comillas from "../../assets/icons/comillas.svg";

export default function Recomendations() {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="recomendations-container">
      <section className="cont-reco-items">
        <div className="recomendations-info">
          <h3>recomendations</h3>
          <h2>
            what clients say <span>about us</span>
          </h2>
          <p>
            The leading local roofing company. We provide a complete range of
            services defined by quality, innovation, and expertise. With years
            of experience.
          </p>
        </div>

        <section className="recomendations-slider-container" ref={sliderRef}>
          <div className="card-recomendations-container">
            <div className="user-recomendations-info-container">
              <div className="blue-box-reco-container">
                <img className="recomendations-slider-img" src={user1} alt="" />
                <div className="info-recomendation-item">
                  <h6>Micheal Smith</h6>
                  <p>Instagram</p>
                </div>
              </div>
              <div className="social-icon-recomendations">
                <img src={insta} alt="facebook-logo" />
              </div>
            </div>

            <div className="comment-recomendation-area">
              <p>
                Thrilled with the top-notch service! This roofing company's
                attention to detail and professionalism set them apart. My
                project turned out fantastic!
              </p>
              <img src={comillas} alt="comillas" />
            </div>
          </div>

          <div className="card-recomendations-container">
            <div className="user-recomendations-info-container">
              <div className="blue-box-reco-container">
                <img className="recomendations-slider-img" src={user2} alt="" />
                <div className="info-recomendation-item">
                  <h6>John Wellington</h6>
                  <p>Facebook</p>
                </div>
              </div>
              <div className="social-icon-recomendations">
                <img src={fb} alt="facebook-logo" />
              </div>
            </div>

            <div className="comment-recomendation-area">
              <p>
                Smooth sailing from start to finish! This roofing company's
                expertise and commitment to quality were evident throughout.
                Highly recommended!
              </p>
              <img src={comillas} alt="comillas" />
            </div>
          </div>

          <div className="card-recomendations-container">
            <div className="user-recomendations-info-container">
              <div className="blue-box-reco-container">
                <img className="recomendations-slider-img" src={user3} alt="" />
                <div className="info-recomendation-item">
                  <h6>Sandra Olivares</h6>
                  <p>Google</p>
                </div>
              </div>
              <div className="social-icon-recomendations">
                <img src={google} alt="facebook-logo" />
              </div>
            </div>

            <div className="comment-recomendation-area">
              <p>
                Impressed beyond words! This roofing company's impeccable
                craftsmanship and customer focus exceeded all expectations. A
                rare find indeed!
              </p>
              <img src={comillas} alt="comillas" />
            </div>
          </div>

          <div className="card-recomendations-container">
            <div className="user-recomendations-info-container">
              <div className="blue-box-reco-container">
                <img className="recomendations-slider-img" src={user4} alt="" />
                <div className="info-recomendation-item">
                  <h6>Pedro Parker</h6>
                  <p>Google</p>
                </div>
              </div>
              <div className="social-icon-recomendations">
                <img src={google} alt="facebook-logo" />
              </div>
            </div>

            <div className="comment-recomendation-area">
              <p>
                Simply the best! This roofing company's professionalism and
                dedication to excellence are unmatched. I'd choose them again in
                a heartbeat!
              </p>
              <img src={comillas} alt="comillas" />
            </div>
          </div>

          <div className="card-recomendations-container">
            <div className="user-recomendations-info-container">
              <div className="blue-box-reco-container">
                <img className="recomendations-slider-img" src={user5} alt="" />
                <div className="info-recomendation-item">
                  <h6>Steve Corner</h6>
                  <p>Facebook</p>
                </div>
              </div>
              <div className="social-icon-recomendations">
                <img src={fb} alt="facebook-logo" />
              </div>
            </div>

            <div className="comment-recomendation-area">
              <p>
                The leading local roofing company. We provide a complete range
                of services defined by quality, innovation, and expertise. With
                years of experience
              </p>
              <img src={comillas} alt="comillas" />
            </div>
          </div>
        </section>

        <div className="btns-container-recomendations">
          <div className="recomandations-btns">
            <button onClick={() => scroll(-900)}>
              <img src={arrow} alt="" />
            </button>
            <hr />
            <button onClick={() => scroll(900)}>
              <img className="arrow-right" src={arrow} alt="" />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
