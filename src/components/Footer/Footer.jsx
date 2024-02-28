import "./Footer.css";
import footerRoof from "../../assets/img/red-roof-with-clouds.jpg";

export default function Footer() {
  return (
    <footer className="footer-container">
      <section className="info-footer">
        <div>
          <h4>Services</h4>
          <p>Commercial Roofing</p>
          <p>Residencial Roofing</p>
          <p>Emergency Roofing</p>
          <p>Roof Installation</p>
          <p>Roof Inspection</p>
          <p>Flooring</p>
          <p>Roof Repairs</p>
          <p>Remodeling</p>
          <p>Siding</p>
        </div>

        <div>
          <h4>Contact</h4>
          <div>
            <img src="" alt="" />
            <p>+1 (919) 279-1958</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>+1 (919) 279-1958</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>contact@rrjconstruction.com</p>
          </div>
        </div>

        <div>
          <h4>Social Media</h4>
          <div>
            <img src="" alt="" />
            <p>@pedrosroofing</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>@pedrosroofing</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Pedro’s Roofing</p>
          </div>
        </div>

        <section className="footer-logo">
        <img src="" alt="" />
        aqui va el logo
      </section>
      
      </section>

      
      <div className="line-info-bottom">
        <hr />
        <p>2024 All Rights Reserved -Pedro’s Roofing</p>
      </div>

      {/* <img className="footer-img" src={footerRoof} alt="" /> */}
    </footer>
  );
}
