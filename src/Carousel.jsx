import React, { useState, useEffect } from "react";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Adjust slidesPerView dynamically based on screen width
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth > 768 ? 2 : 1);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create chunks of data based on slidesPerView
  const chunkedData = [];
  for (let i = 0; i < data.length; i += slidesPerView) {
    chunkedData.push(data.slice(i, i + slidesPerView));
  }

  // Handlers for navigation
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === chunkedData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? chunkedData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <div className="carousel__track">
        {chunkedData[activeIndex].map((item) => (
          <div key={item.id} className="carousel__slide">
            <img src={item.image} alt={item.name} className="carousel__img" />
            <div className="carousel__content">
              <h3>{item.name}</h3>
              <p>ID: {item.id}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
