import "./ContactForm.css";
import React, { useRef, useState } from "react";
import user from "../../assets/icons/user-regular.svg";
import phone from "../../assets/icons/phone-solid.svg";
import envelope from "../../assets/icons/envelope-regular.svg";
import formBg from "../../assets/img/form-bg.jpg";
import wpp from "../../assets/icons/whatsapp.svg";
import check from "../../assets/icons/circle-check-regular.svg";

function ContactForm({ divRef }) {
  const formRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const email = event.target.elements.email.value;
    const service = event.target.elements.service.value;

    if (!name || !number || !email || !service) {
      alert("Please complete all required fields.");
      return;
    }

    const formData = new FormData(event.target);

    formData.append("access_key", "28dce925-b047-4d85-b759-317f2eed5e46");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setIsSuccess(true);
      setTimeout(() => {
        formRef.current.reset();
        setIsSuccess(false);
      }, 3000);
    }
  };

  return (
    <section className="contact-form-container" ref={divRef}>
      <div className="info-form-container">
        <div className="contact-form-info">
          <div className="info-box-form">
            <h3>contact</h3>
            <h2>schedule a meeting</h2>
            <p>
              Contact us any time. We are available 24/7 via email or telephone.
            </p>
          </div>
          <div className="form-social-icons">
            <a href="tel:9192791958" target="_blank">
              <img src={phone} alt="icon-cel" />
            </a>
            <a href="mailto:pedrovieyra@yahoo.com" target="_blank">
              <img src={envelope} alt="icon-mail" />
            </a>
            <a
              href="https://wa.me/19192791958?text=Hello,%20i%20need%20more%20information"
              target="_blank"
            >
              <img src={wpp} alt="icon-wss" />
            </a>
          </div>
        </div>
        <div className="second-contact-form-info">
          <form ref={formRef} onSubmit={onSubmit} className="form-container">
            <label htmlFor="service">
              <select name="service" id="service">
                <option value="">Select a service</option>
                <option value="commercialroofing">Commercial Roofing</option>
                <option value="residencialroofing">Residencial Roofing</option>
                <option value="emergencyroofing">Emergency Roofing</option>
                <option value="roofinstallation">Roof Installation</option>
                <option value="roofrepairs">Roof Repairs</option>
                <option value="roofinspections">Roof Inspections</option>
                <option value="siding">Siding</option>
                <option value="remodeling">Remodeling</option>
                <option value="painting">Painting</option>
              </select>
            </label>
            <label htmlFor="name">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                autoComplete="name"
              />
              <div className="box-icon-form">
                <img src={user} alt="icon-form" />
              </div>
            </label>
            <label htmlFor="number">
              <input
                type="number"
                placeholder="Phone"
                id="number"
                name="number"
                autoComplete="tel"
              />
              <div className="box-icon-form">
                <img src={phone} alt="" />
              </div>
            </label>
            <label htmlFor="email">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                autoComplete="email"
              />
              <div className="box-icon-form">
                <img src={envelope} alt="" />
              </div>
            </label>
            <button type="submit">Reserve</button>
          </form>
          {isSuccess && (
            <div className="success-message">
              <img src={check} alt="" />
              Form submitted successfully!
            </div>
          )}
        </div>
      </div>
      <img className="home-form-bg" src={formBg} alt="" />
    </section>
  );
}

export default ContactForm;
