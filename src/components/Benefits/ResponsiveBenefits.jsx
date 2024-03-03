import "./Benefits.css";
import tool from "../../assets/icons/blue-tool.svg"
import smile from "../../assets/icons/smile-figma.svg"
import worker from "../../assets/icons/worker-figma.svg"


export default function ResponsiveBenefits() {
  return (
    <section className="benefits-responsive-container">
      <div className="responsive-benefits-items">
        <img src={tool} alt="" />
        <h3>120 +</h3>
        <p>Services Realized</p>
      </div>
      <hr />
      <div className="responsive-benefits-items">
        <img src={smile} alt="" />
        <h3>99 %</h3>
        <p>Happy Clients</p>
      </div>
      <hr />
      <div className="responsive-benefits-items">
        <img src={worker} alt="" />
        <h3>40 +</h3>
        <p>Team Work</p>
      </div>
    </section>
  );
}
