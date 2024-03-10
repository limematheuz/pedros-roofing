import "./OurStory.css";
import React, { useRef } from "react";
import cocheSlider from "../../assets/img/coche-slider.jpg";
import houseSlider1 from "../../assets/img/slider-house.jpg";
import houseSlider2 from "../../assets/img/slider-house-two.jpg";
import houseSlider3 from "../../assets/img/casa-slider.jpg";
import zoom from "../../assets/icons/zoom.svg";
import arrow from "../../assets/icons/arrow.svg";

export default function OurStory() {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="cont-our-story-items">
      <div className="our-story-info">
        <h3>our story</h3>
        <h2>
          <span>experts</span> in roofing & restoration
        </h2>
        <p>
          The leading local roofing company. We provide a complete range of
          services defined by quality, innovation, and expertise. With years of
          experience, we’ve developed a strong reputation for our masterful
          craftsmanship and committed customer service, always going above and
          beyond to meet our clients’ needs. For quality roofing from trusted
          professionals, we are the team for the job.
        </p>
      </div>
      <div className="img-slider-container" ref={sliderRef}>
        <section className="ourStory-slider-img">
          <div className="cont-zoom">
            <img src={zoom} alt="icon-zoom" />
          </div>
          <img className="ourStory-slider-img-bg" src={cocheSlider} alt="img-benefits" />
        </section>
        <section className="ourStory-slider-img" >
          <div className="cont-zoom">
            <img src={zoom} alt="icon-zoom" />
          </div>
          <img  className="ourStory-slider-img-bg" src={houseSlider2} alt="img-benefits"/>
        </section>
        <section  className="ourStory-slider-img" >
          <div className="cont-zoom">
            <img src={zoom} alt="icon-zoom" />
          </div>
          <img className="ourStory-slider-img-bg" src={houseSlider1} alt="img-benefits" />
        </section>
        <section  className="ourStory-slider-img" >
          <div className="cont-zoom">
            <img src={zoom} alt="icon-zoom" />
          </div>
          <img className="ourStory-slider-img-bg" src={houseSlider3} alt="img-benefits" />
        </section>
      </div>
      <div className="our-story-second-info">
        <div className="our-story-btns">
          <button onClick={() => scroll(-400)}>
            <img src={arrow} alt="" />
          </button>
          <hr />
          <button onClick={() => scroll(400)}>
            <img className="arrow-right" src={arrow} alt="" />
          </button>
        </div>
        <div className="parraf-bottom">
          <p>
            The leading local roofing company. We provide a complete range of
            services defined by quality, innovation, and expertise. With years
            of experience, we’ve developed a strong reputation for our masterful
            craftsmanship and committed customer service, always going above and
            beyond to meet our clients’ needs. For quality roofing from trusted
            professionals, we are the team for the job.
          </p>
        </div>
      </div>
    </section>
  );
}
