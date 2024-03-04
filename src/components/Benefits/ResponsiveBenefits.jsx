import "./Benefits.css";
import tool from "../../assets/icons/blue-tool.svg";
import smile from "../../assets/icons/smile-figma.svg";
import worker from "../../assets/icons/worker-figma.svg";

export default function ResponsiveBenefits() {
  return (
    <section className="benefits-responsive-container">
      <div className="responsive-benefits-items">
        <div className="cont-icon-responsive-benefits">
          <img src={tool} alt="icon-benefits" />
        </div>
        <h3>120+</h3>
        <p>
          Services
          <br />
          Realized
        </p>
      </div>
      <hr />
      <div className="responsive-benefits-items">
        <div className="cont-icon-responsive-benefits">
          <img src={smile} alt="" />
        </div>
        <h3>99%</h3>
        <p>
          Happy
          <br />
          Clients
        </p>
      </div>
      <hr />
      <div className="responsive-benefits-items">
        <div className="cont-icon-responsive-benefits">
          <img src={worker} alt="" />
        </div>
        <h3>40+</h3>
        <p>
          Team
          <br />
          Work
        </p>
      </div>
    </section>
  );
}
