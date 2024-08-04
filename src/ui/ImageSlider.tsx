import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ImageSliderProps = {
  images: string[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute md:inset-x-3 md:inset-y-3 inset-3 flex items-end justify-between z-10">
        <button
          onClick={prevSlide}
          className="md:px-5 md:py-2 px-2 py-1 bg-black bg-opacity-50 text-yellow-500 rounded-lg hover:bg-opacity-75 transition duration-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="md:px-5 md:py-2 px-2 py-1 bg-black bg-opacity-50 text-yellow-500 rounded-lg hover:bg-opacity-75 transition duration-300"
        >
          <FaArrowRight />
        </button>
        <div className="absolute inset-x-3 inset-y-3 flex items-end justify-center z-10">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`transition-all md:w-12 md:h-1 w-2 h-2 bg-yellow-500 rounded-full ${
                  currentIndex === i ? "p-1" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="flex transition-transform duration-700 ease-in-out items-center align-middle rounded-lg"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ minWidth: "100%" }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[420px] object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
