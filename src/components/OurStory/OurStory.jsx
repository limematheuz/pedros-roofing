import "./OurStory.css";
import React, { useRef } from "react";
import cocheSlider from "../../assets/img/coche-slider.jpg";
import arrow from "../../assets/icons/arrow.svg";

export default function OurStory() {
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="our-story-container">
      <section className="cont-our-story-items">
        <div className="our-story-info">
          <h3>our story</h3>
          <h2>
            <span>experts</span> in roofing & restoration
          </h2>
          <p>
            The leading local roofing company. We provide a complete range of
            services defined by quality, innovation, and expertise. With years
            of experience, we’ve developed a strong reputation for our masterful
            craftsmanship and committed customer service, always going above and
            beyond to meet our clients’ needs. For quality roofing from trusted
            professionals, we are the team for the job.
          </p>
        </div>
        <div className="our-story-slider-container" ref={sliderRef}>
          <div className="img-slider-container">
            <img className="ourStory-slider-img" src={cocheSlider} alt="" />
            <img className="ourStory-slider-img" src={cocheSlider} alt="" />
            <img className="ourStory-slider-img" src={cocheSlider} alt="" />
            <img className="ourStory-slider-img" src={cocheSlider} alt="" />
          </div>
        </div>

        <div className="our-story-second-info">
          <div className="our-story-btns">
            <button onClick={() => scroll(-1600)}>
              <img src={arrow} alt="" />
            </button>
            <hr />
            <button onClick={() => scroll(1600)}>
              <img className="arrow-right" src={arrow} alt="" />
            </button>
          </div>
          <div className="parraf-bottom">
            <p>
              The leading local roofing company. We provide a complete range of
              services defined by quality, innovation, and expertise. With years
              of experience, we’ve developed a strong reputation for our
              masterful craftsmanship and committed customer service, always
              going above and beyond to meet our clients’ needs. For quality
              roofing from trusted professionals, we are the team for the job.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
