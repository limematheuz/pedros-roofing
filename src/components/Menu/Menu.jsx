import "./Menu.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import whiteLogo from "../../assets/img/white-logo.svg";
import insta from "../../assets/icons/instagram.svg";
import fb from "../../assets/icons/facebook.svg";

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
          className={`menu-link-item ${
            currentPage === "/services" ? "active" : ""
          }`}
          onClick={() => handleSetActivePage("/services")}
        >
          services
        </Link>
        <Link
          to={"/contact"}
          className={`menu-link-item ${
            currentPage === "/contact" ? "active" : ""
          }`}
          onClick={() => handleSetActivePage("/contact")}
        >
          contact
        </Link>
      </div>
      <div className="menu-icons">
        <a
          href="https://www.instagram.com/pedros.remodelingg/?hl=es%2F"
          target="_blank"
        >
          <img src={insta} alt="" />
        </a>
        <a
          href="https://www.facebook.com/PedrosRemodeling/?paipv=0&eav=AfZ1RsWjEH6ThIYotpfu167BFL22ZTASzRQeu8oKSBovLbTFr2ZJXyMIZ11hvPA9Hjo&_rdr"
          target="_blank"
        >
          <img src={fb} alt="" />
        </a>
      </div>
    </nav>
  );
}
