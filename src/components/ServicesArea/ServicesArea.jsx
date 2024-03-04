import React, { useRef, useState, useEffect } from "react";
import useFirestoreCollection from "../../useFirestoreCollection";
import "./ServicesArea.css";
import arrow from "../../assets/icons/arrow.svg";
import exteriorHouse from "../../assets/icons/exterior-house.svg";
import interiorHouse from "../../assets/icons/interior-house.svg";
import houseBg from "../../assets/img/bg-service-slider.jpg"

export default function ServicesArea() {

  let container = useRef(null);
  const { data, loading, error } = useFirestoreCollection("categories");
  const defaultSelectedItem = data.find((item) => item.order === 2);
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  const handleItemClick = (clickedItem) => {
    if (clickedItem !== selectedItem) {
      setSelectedItem(clickedItem);
    }
  };

  useEffect(() => {
    const defaultSelectedItem = data.find((item) => item.order === 1);
    setSelectedItem(defaultSelectedItem);
  }, [data]);

  if (loading) {
    return <p>ready</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const left = () => {
    if (container.current) {
      container.current.scrollLeft -= 200;
    }
  };

  const right = () => {
    if (container.current) {
      container.current.scrollLeft += 200;
    }
  };

  return (
    <section className="services-slider-container">
      <section className="slider-title-general">
          <h3>services</h3>
          <h2>
            <span>solutions</span> for your home
          </h2>
        </section>
      <section className="section-slider-container">
          <section className="left-side">
            <div className="service-slider-categorie">
              <button>
                <img src={exteriorHouse} alt="icon-house" />
                exteriors
              </button>
              <button>
                <img src={interiorHouse} alt="icon-house" />
                interiors
              </button>
            </div>
            <div className="buttons-slider-section">
              <button onClick={left}>
                <img src={arrow} alt="icon arrow" />
              </button>
              <span></span>
              <button onClick={right}>
                <img src={arrow} alt="icon arrow" />
              </button>
            </div>
          </section>
          <section ref={container} className="right-side">
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`slider-item ${
                  selectedItem === item ? "active" : ""
                }`}
              >
                <div className="info-name-service">
                  <h4>{item?.name}</h4>
                  <img src={arrow} alt="icon-arrow-img" />
                </div>
                <img
                  src={item?.banner}
                  alt="img-service"
                  className="service-slider-img"
                />
              </div>
            ))}
          </section>
        </section>
        <img className="bg-service-slider" src={houseBg} alt="" />
    </section>
  );
}
