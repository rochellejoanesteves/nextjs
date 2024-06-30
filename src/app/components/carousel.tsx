import React, { useState, useEffect } from "react";
import slide1 from "../../images/carousel/slide1.png";
import slide2 from "../../images/carousel/slide2.png";
import slide3 from "../../images/carousel/slide3.png";
import Image from "next/image";

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [slide1, slide2, slide3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="relative w-full"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
              index === activeIndex ? "block" : "hidden"
            }`}
            data-twe-carousel-item
            data-twe-carousel-active={
              index === activeIndex ? "true" : undefined
            }
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className="block w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
