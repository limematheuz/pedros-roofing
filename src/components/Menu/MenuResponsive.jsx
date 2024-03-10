import "./Menu.css";
import { Link } from "react-router-dom";
import house from "../../assets/icons/house-figma.svg";
import tool from "../../assets/icons/white-tool.svg";
import phone from "../../assets/icons/phone-solid.svg";

export default function MenuResponsive() {
  return (
    <section className="responsive-menu-container">
      <Link to={"/"} className="first-responsive-items">
        <img src={house} alt="icon-menu-responsive" />
        <p className="menu-responsive-btns">
          Home
        </p>
      </Link>
      <Link  to={"/services"} className="first-responsive-items">
        <img src={tool} alt="" />
        <p className="menu-responsive-btns">
          Services
        </p>
      </Link>
      <Link to={"/contact"} className="first-responsive-items">
        <img src={phone} alt="" />
        <p  className="menu-responsive-btns">
          Contact
        </p>
      </Link>
    </section>
  );
}
