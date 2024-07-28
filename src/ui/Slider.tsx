import { ReactNode, useEffect, useState } from "react";
import { slidePropTypes } from "./Slides";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

type slideDataType = {
  slideData: slidePropTypes[];
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

const Slider = ({
  slideData,
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}: slideDataType) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slideData.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slideData.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => {
      clearInterval(slideInterval);
    };
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative md:h-screen md:w-full overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-700 h-full w-full whitespace-nowrap"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-end justify-between bottom-8 px-4 lg:px-12">
        <button
          onClick={prev}
          className="cursor-pointer md:w-16 md:p-2 md:text-xl w-10 p-1  bg-yellow-500 hover:bg-yellow-500 bg-opacity-60 text-gray-800 rounded-lg  flex align-middle justify-center"
        >
          <HiMiniArrowLongLeft />
        </button>
        <button
          onClick={next}
          className=" cursor-pointer w-10 p-1 md:w-16 md:p-2 md:text-xl  bg-opacity-60 text-gray-800 rounded-lg bg-yellow-500 hover:bg-yellow-500 flex align-middle justify-center"
        >
          <HiMiniArrowLongRight />
        </button>
      </div>
      <div className="absolute bottom-10 right-0 left-0 lg:px-12">
        <div className="flex items-center justify-center gap-2">
          {slideData.map((_, i) => (
            <div
              key={i}
              className={`transition-all md:w-12 md:h-1 w-2 h-2 bg-yellow-500 rounded-full ${
                curr === i ? "p-1" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
