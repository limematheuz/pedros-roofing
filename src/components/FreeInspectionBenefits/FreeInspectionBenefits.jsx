import "./FreeInspectionBenefits.css";

import truck from "../../assets/icons/truck.svg";
import worker from "../../assets/icons/worker.svg";
import shield from "../../assets/icons/shield.svg";
import money from "../../assets/icons/money.svg";

export default function FreeInspectionBenefits() {
  return (
    <section className="free-inspection-intro-container">
      <section className="cards-free-intro">
        <section className="first-benefit-info">
          <div className="first-card-info">
            <img src={truck} alt="" />
            <h3>fast attention</h3>
          </div>
          <div className="second-card-info">
            <img src={worker} alt="" />
            <h3>advice from a specialist</h3>
          </div>
        </section>
        <section className="second-benefit-info">
          <div className="second-card-info">
            <img src={shield} alt="" />
            <h3>certified experience</h3>
          </div>
          <div className="first-card-info">
            <img src={money} alt="" />
            <h3>INSURANCE CLAIM SPECIALISTS</h3>
          </div>
        </section>
      </section>
    </section>
  );
}
