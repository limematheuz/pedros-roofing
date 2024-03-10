import "./Menu.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import house from "../../assets/icons/house-figma.svg";
import tool from "../../assets/icons/white-tool.svg";
import phone from "../../assets/icons/phone-solid.svg";

export default function MenuResponsive() {
  const [currentMobilePage, setCurrentMobilePage] = useState(""); // Estado para la página actual
  const location = useLocation(); // Hook de React Router para obtener la ubicación actual

  // Función para establecer la página actual
  const handleSetActiveMobilePage = (page) => {
    setCurrentMobilePage(page);
  };

  useEffect(() => {
    setCurrentMobilePage(location.pathname);
  }, [location.pathname]);

  return (
    <section className="responsive-menu-container">
      <Link
        to={"/"}
        className={`first-responsive-items ${
          currentMobilePage === "/" ? "active" : ""
        }`}
        onClick={() => handleSetActiveMobilePage("/")}
      >
        <img src={house} alt="icon-menu-responsive" />
        <p className="menu-responsive-btns">Home</p>
      </Link>
      <Link
        to={"/services"}
        className={`first-responsive-items ${
          currentMobilePage === "/services" ? "active" : ""
        }`}
        onClick={() => handleSetActiveMobilePage("/services")}
      >
        <img src={tool} alt="" />
        <p className="menu-responsive-btns">Services</p>
      </Link>
      <Link
        to={"/contact"}
        className={`first-responsive-items ${
          currentMobilePage === "/contact" ? "active" : ""
        }`}
        onClick={() => handleSetActiveMobilePage("/contact")}
      >
        <img src={phone} alt="" />
        <p className="menu-responsive-btns">Contact</p>
      </Link>
    </section>
  );
}
