import "./Menu.css";
import { Link } from "react-router-dom";
import whiteLogo from "../../assets/img/white-logo.svg";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";

export default function Menu() {
  return (
    <nav className="menu-container">
      {/* <section className="menu-items"> */}
        <Link to={"/"} className="menu-logo">
          <img src={whiteLogo} alt="" />
        </Link>
        <div className="menu-links">
          <Link to={"/"} className="menu-link-item">home</Link>
          <Link to={"/services"} className="menu-link-item">services</Link>
          <Link to={"/contact"} className="menu-link-item">contact</Link>
        </div>
        <div className="menu-icons">
          <a href=""><img src={phone} alt="" /></a>
          <a href=""><img src={mail} alt="" /></a>
          <a href=""><img src={wpp} alt="" /></a>
        </div>
      {/* </section> */}
    </nav>
  );
}
