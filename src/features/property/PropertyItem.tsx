import { HiMiniArrowLongRight } from "react-icons/hi2";
import StarRating from "../../ui/RatingStar";
import { useNavigate } from "react-router-dom";

type propertyItemProp = {
  _id: string;
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
  _id,
  rating,
  address,
  category,
  type,
  price,
  mainImage,
}: propertyItemProp) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 rounded-lg w-full bg-gray-50 shadow-sm shadow-neutral-200">
      <div className="md:w-[302px] w-full">
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
        <div className="flex justify-between align-middle items-center">
          <h2>
            NPR {price} {type === "Rent" && " per Month"}
          </h2>
          <button
            className="px-2 bg-yellow-500 rounded-lg hover:bg-yellow-700 text-white flex items-center space-x-2"
            onClick={() => navigate(`/property/${_id}`)}
          >
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
