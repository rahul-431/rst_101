import { HiMiniArrowLongRight } from "react-icons/hi2";

export type slidePropTypes = {
  city: string;
  country: string;
  price: string;
  image: string;
};

function Slides({ image, city, country, price }: slidePropTypes) {
  return (
    <div className="ease-in-out duration-700 flex-shrink-0 w-full h-full relative">
      <img
        src={image}
        alt="Property image/video"
        className="h-64 w-full md:h-full md:w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-900 bg-opacity-60 p-4 w-full text-white lg:px-12">
        <div className="flex flex-col absolute top-8 lg:top-16 lg:gap-2">
          <h1 className="text-lg lg:text-4xl md:text-xl">{city}</h1>
          <p className="flex space-x-4 lg:space-x-8 text-sm lg:text-xl md:text-lg">
            <span>{country}</span>
            <span>NPR {price}</span>
          </p>
          <button
            type="button"
            className="flex space-x-2 text-sm justify-self-center items-center cursor-pointer lg:text-xl md:text-lg"
          >
            <span>See Details</span>
            <span>
              <HiMiniArrowLongRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slides;
