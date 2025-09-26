import React from "react";
import "./FloatingDots.css";

export const FloatingDots = () => {
  const dots = Array.from({ length: 100 }); // more dots

  return (
    <div className="dots-container">
      {dots.map((_, i) => (
        <div
          key={i}
          className="dot"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            opacity: 0.5 + Math.random() * 0.5, // brighter
            backgroundColor: `rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`, // brighter
          }}
        ></div>
      ))}
    </div>
  );
};
