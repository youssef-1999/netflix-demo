import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

function CarouselCards({ children, title }) {
  return (
    <div className="carousel-section">
<h2>{title}</h2>
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      arrows={false}
      showDots={false}
      swipeable
      draggable
      containerClass="carousel-container"
      
    >
      {children}
    </Carousel>
    </div>
  );
}

export default CarouselCards;
