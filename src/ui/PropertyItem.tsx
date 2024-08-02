// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import StarRating from "./RatingStar";

type propertyItemProp = {
  rating: number;
  address: {
    country: string;
    province: string;
    municipality: string;
    ward: number;
    area: string;
  };
  category: string;
  type: string;
  price: number;
  mainImage: string;
};

const PropertyItem = ({
  rating,
  address,
  category,
  type,
  price,
  mainImage,
}: propertyItemProp) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg w-full bg-gray-50 shadow-sm shadow-neutral-200 hover:-translate-y-1">
      <div className="">
        <img
          src={mainImage}
          alt="Property Image"
          className="w-full h-[260px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col px-2 pb-2 ">
        <div className="flex justify-between align-middle">
          <h1 className="flex gap-2 align-middle text-lg text-yellow-500">
            <span>{category}</span>
            <span>On</span>
            <span>{type}</span>
          </h1>
          <h2 className="text-lg flex items-center gap-1">
            <StarRating rating={rating} />
          </h2>
        </div>
        <div className="flex gap-1 flex-wrap mb-4">
          <h3>{address.country},</h3>
          <h3>{address.province},</h3>
          <h3>
            {address.municipality}-{address.ward},
          </h3>
          <h3>{address.area}</h3>
        </div>
        <div className="flex justify-between align-middle">
          <h2>
            NPR {price} {type === "Rent" && " per Month"}
          </h2>
          <button className="px-2 bg-yellow-500 rounded-lg hover:bg-yellow-700 text-white flex items-center space-x-2">
            <span>Explore</span>
            <span>
              <HiMiniArrowLongRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
