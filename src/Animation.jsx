import React, { useState } from "react";
import "./index.css";
import my_img from "./assets/s1.png";

const Animation = () => {
  const [animate, setAnimate] = useState(0);
  return (
    <div>
      <img
        src={my_img}
        alt=""
        className="img"
        onClick={() => setAnimate(1)}
        onAnimationEnd={() => setAnimate(0)}
        animate={animate}
      />
    </div>
  );
};

export default Animation;
