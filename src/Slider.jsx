import { useState } from "react";
import { Data } from "./Data";
import "./index.css";

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const slideLeft = () => {
    slide > 0 ? setSlide(slide - 200) : null;
  };
  const slideRight = () => {
    slide < 5000 ? setSlide(slide + 200) : null;
  };

  return (
    <div className="main-container">
      <button onClick={slideLeft}>previous</button>
      <div className="card-container">
        {Data.map((item, idx) => (
          <div
            key={idx}
            className="card"
            style={{ transform: `translateX(${-slide}px)`, transition: "1s" }}
          >
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
      <button onClick={slideRight}>next</button>
    </div>
  );
};

export default Slider;
