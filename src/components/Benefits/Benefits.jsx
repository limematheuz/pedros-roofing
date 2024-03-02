import "./Benefits.css";

import toolIcon from "../../assets/icons/tool-figma.svg";
import smileIcon from "../../assets/icons/smile-figma.svg";
import workerIcon from "../../assets/icons/worker-figma.svg";

export default function Benefits() {
  return (
    <section className="benefits-container">
      <div className="benefits-items-container">
        <div className="benefitss-items">
          <div className="first-item-column">
            <img src={toolIcon} alt="" />
            <h4>120</h4>
            <p>+</p>
          </div>
          <div>
            <p>Services Realized</p>
          </div>
        </div>
        <hr />
        <div className="benefitss-items">
          <div className="first-item-column">
            <img src={smileIcon} alt="" />
            <h4>99</h4>
            <p>%</p>
          </div>
          <div>
            <p>Happy Clients</p>
          </div>
        </div>
        <hr />
        <div className="benefitss-items">
          <div className="first-item-column">
            <img src={workerIcon} alt="" />
            <h4>40</h4>
            <p>+</p>
          </div>
          <div>
            <p>Team Work</p>
          </div>
        </div>
      </div>
    </section>
  );
}
