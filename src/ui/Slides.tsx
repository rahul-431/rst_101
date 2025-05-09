import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export type slidePropTypes = {
  _id: string;
  city: string;
  country: string;
  price: number;
  image: string;
  category: string;
  type: string;
};

function Slides({
  _id,
  category,
  type,
  image,
  city,
  country,
  price,
}: slidePropTypes) {
  const navigate = useNavigate();
  return (
    <div className="ease-in-out duration-700 flex-shrink-0 w-full h-full relative">
      <div className="absolute inset-0 bg-slate-900 bg-opacity-60 p-4 w-full text-white lg:px-12">
        <div className="flex flex-col absolute top-8 lg:top-16 lg:gap-2 z-30">
          <h1 className="text-xl lg:text-4xl md:text-xl">{city}</h1>
          <p className="flex gap-2 text-lg md:text-xl text-yellow-500">
            <span>{category}</span>
            <span>On</span>
            <span>{type}</span>
          </p>
          <p className="flex space-x-4 lg:space-x-8 text-lg lg:text-xl md:text-lg">
            <span>{country}</span>
            <span>NPR {price}</span>
          </p>
          <button
            onClick={() => navigate(`/property/${_id}`)}
            className=" flex space-x-2 text-lg justify-self-center items-center cursor-pointer lg:text-xl md:text-lg"
          >
            <span>See Details</span>
            <span>
              <HiMiniArrowLongRight />
            </span>
          </button>
        </div>
      </div>
      <img
        src={image}
        alt="Property image/video"
        className="h-64 w-full md:h-full md:w-full object-cover"
      />
    </div>
  );
}

export default Slides;
