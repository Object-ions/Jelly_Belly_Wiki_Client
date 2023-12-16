import React, { useState } from "react";

const Carousel = ({ facts }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? facts.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === facts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {facts.map((fact, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? "" : "hidden"
            }`}
            data-carousel-item
          >
            <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Add controls and indicators here if needed */}
    </div>
  );
};

export default Carousel;
