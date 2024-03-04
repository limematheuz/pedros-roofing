import "./Benefits.css";
import toolIcon from "../../assets/icons/blue-tool.svg";
import smileIcon from "../../assets/icons/smile-figma.svg";
import workerIcon from "../../assets/icons/worker-figma.svg";

export default function Benefits() {
  return (
    <section className="benefits-container">
      <section className="benefitss-items">
        <div className="first-item-column">
          <div className="box-benefits-home">
            <img src={toolIcon} alt="" />
          </div>
          <h4>120+</h4>
        </div>
        <p className="item-name">
          Services
          <br />
          Realized
        </p>
      </section>
      <hr />
      <section className="benefitss-items">
        <div className="first-item-column">
          <div className="box-benefits-home">
            <img src={smileIcon} alt="" />
          </div>
          <h4>99%</h4>
        </div>
        <p className="item-name">
          Happy
          <br />
          Clients
        </p>
      </section>
      <hr />
      <section className="benefitss-items">
        <div className="first-item-column">
          <div className="box-benefits-home">
            <img src={workerIcon} alt="" />
          </div>
          <h4>40+</h4>
        </div>
        <p className="item-name">
          Team
          <br />
          Work
        </p>
      </section>
    </section>
  );
}
