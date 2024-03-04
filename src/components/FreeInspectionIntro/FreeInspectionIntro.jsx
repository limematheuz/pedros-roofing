import "./FreeInspectionIntro.css";
import { Link } from "react-router-dom";

import phone from "../../assets/icons/phone-solid.svg";
import mail from "../../assets/icons/envelope-regular.svg";
import wpp from "../../assets/icons/whatsapp.svg";

export default function FreeInspectionIntro() {
  return (
    <section className="container-free-intro">
      <section className="left-free-container">
        <section className="info-free-intro">
          <h3>FREE INSPECTION</h3>
          <h2>
            <span>DID YOU KNOW THAT </span>YOUR ROOFING CAN BE REPLACED UNDER
            INSURANCE?
          </h2>
          <p>
            The leading local roofing company. We provide a complete range of
            services defined by quality, innovation, and expertise. With years
            of experience, we’ve developed a strong reputation for our masterful
            craftsmanship and committed customer service, always going above and
            beyond to meet our clients’ needs. For quality roofing from trusted
            professionals, we are the team for the job.
          </p>
        </section>
        <section className="free-intro-btns">
          <div className="intro-contact-free-btn">
            <Link className="cta-free-inspection"> free inspection!</Link>
          </div>
          <div className="social-links-intro">
            <a href="">
              <img src={phone} alt="" />
            </a>
            <a href="">
              <img src={mail} alt="" />
            </a>
            <a href="">
              <img src={wpp} alt="" />
            </a>
          </div>
        </section>
      </section>
    </section>
  );
}
