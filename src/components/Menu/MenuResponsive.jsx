import "./Menu.css";
import { Link } from "react-router-dom";

import house from "../../assets/icons/house-figma.svg"
import tool from "../../assets/icons/white-tool.svg"
import phone from "../../assets/icons/phone-solid.svg"

export default function MenuResponsive() {
  return (
    <section className="responsive-menu-container">
      <div className="first-responsive-items">
        <img src={house} alt="" />
        <Link className="menu-responsive-btns">Home</Link>
      </div>
      <div className="second-responsive-items">
        <img src={tool} alt="" />
        <Link className="menu-responsive-btns">Services</Link>
      </div>
      <div className="third-responsive-items">
        <img src={phone} alt="" />
        <Link className="menu-responsive-btns">Contact</Link>
      </div>
    </section>
  );
}
