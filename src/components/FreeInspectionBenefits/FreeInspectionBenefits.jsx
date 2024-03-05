import "./FreeInspectionBenefits.css";

import truck from "../../assets/icons/truck.svg";
import worker from "../../assets/icons/worker.svg";
import shield from "../../assets/icons/shield.svg";
import money from "../../assets/icons/money.svg";
import card1 from "../../assets/img/coche-slider.jpg";
import card2 from "../../assets/img/second-card.png";
import card3 from "../../assets/img/casa-slider.jpg";
import card4 from "../../assets/img/form-bg.jpg";


export default function FreeInspectionBenefits() {
  return (
    <section className="free-inspection-intro-container">
      <section className="cards-free-intro">
        <section className="cont-first-benefit">
          <div className="first-card-info">
            <div className="limit-card-container">
              <img src={truck} alt="" />
              <h3>fast attention</h3>
            </div>
            <img className="benefits-card-img" src={card1} alt="" />
          </div>
          <div className="second-card-info">
            <div className="limit-card-container">
              <img src={worker} alt="" />
              <h3>advice from a specialist</h3>
            </div>
            <img className="benefits-card-img" src={card2} alt="" />
          </div>
        </section>
        <section className="cont-second-benefit">
          <div className="second-card-info">
            <div className="limit-card-container">
            <img src={shield} alt="" />
            <h3>certified experience</h3>
            </div>
            <img className="benefits-card-img" src={card3} alt="" />
          </div>
          <div className="first-card-info">
            <div className="limit-card-container">
            <img src={money} alt="" />
            <h3>INSURANCE CLAIM SPECIALISTS</h3>
            </div>
            <img className="benefits-card-img" src={card4} alt="" />
          </div>
        </section>
      </section>
    </section>
  );
}
