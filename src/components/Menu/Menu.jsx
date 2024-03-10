import "./Menu.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import whiteLogo from "../../assets/img/white-logo.svg";
import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(""); // Estado para la página actual
  const location = useLocation(); // Hook de React Router para obtener la ubicación actual

  // Función para establecer la página actual
  const handleSetActivePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="menu-container">
      <Link to={"/"} className="menu-logo">
        <img src={whiteLogo} alt="logo-home" />
      </Link>
      <div className="menu-links">
      <Link
          to={"/"}
          className={`menu-link-item ${currentPage === "/" ? "active" : ""}`}
          onClick={() => handleSetActivePage("/")}
        >
          home
        </Link>
        <Link
          to={"/services"}
          className={`menu-link-item ${currentPage === "/services" ? "active" : ""}`}
          onClick={() => handleSetActivePage("/services")}
        >
          services
        </Link>
        <Link
          to={"/contact"}
          className={`menu-link-item ${currentPage === "/contact" ? "active" : ""}`}
          onClick={() => handleSetActivePage("/contact")}
        >
          contact
        </Link>
      </div>
      <div className="menu-icons">
        <a href="/">
          <img src={phone} alt="" />
        </a>
        <a href="/">
          <img src={mail} alt="" />
        </a>
        <a href="/">
          <img src={wpp} alt="" />
        </a>
      </div>
    </nav>
  );
}
