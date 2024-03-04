import "./FreeInspectionIntro.css"
import { Link } from "react-router-dom";

export default function FreeInspectionIntro() {
  return (
    <section className="free-inspection-intro-container">
      <section className="container-free-intro">
        <div className="info-free-intro">
          <h3>FREE INSPECTION</h3>
          <h2>
            DID YOU KNOW THAT YOUR ROOFING CAN BE REPLACED UNDER INSURANCE?
          </h2>
          <p>
            The leading local roofing company. We provide a complete range of
            services defined by quality, innovation, and expertise. With years
            of experience, we’ve developed a strong reputation for our masterful
            craftsmanship and committed customer service, always going above and
            beyond to meet our clients’ needs. For quality roofing from trusted
            professionals, we are the team for the job.
          </p>
        </div>
        <div className="free-intro-btns">
          <div className="intro-contact-free-btn">
            <Link> free inspection</Link>
          </div>
          <div className="social-links-intro">
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
          </div>
        </div>
        <section className="cards-free-intro">
          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>
          <div>
            <img src="" alt="" />
            <h3></h3>
          </div>
        </section>
      </section>
    </section>
  );
}
