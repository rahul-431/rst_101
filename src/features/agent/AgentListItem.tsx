import { HiMiniArrowLongRight } from "react-icons/hi2";

interface AgentListType {
  image: string;
  name: string;
  role: string;
  address: {
    country: string;
    province: string;
    city: string;
    municipality: string;
    ward: number;
    area: string;
  };
  contact: string;
}
const AgentListItem: React.FC<AgentListType> = ({
  image,
  name,
  role,
  address,
  contact,
}) => {
  return (
    <div className="flex md:flex-row flex-col justify-between gap-4">
      <div className="flex md:flex-row flex-col justify-between gap-4">
        <img
          src={image}
          alt="Agent Image"
          className="md:w-40 md:h-48 h-72 w-full object-cover cursor-pointer rounded-md"
        />
        <div className="flex flex-col justify-around gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl md:text-2xl cursor-pointer text-yellow-500 hover:text-yellow-600">
              {name}
            </h1>
            <h2 className="uppercase text-gray-700">{role}</h2>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg md:text-xl">HomeLand Realestate solution</h1>
            <p className=" text-gray-700 flex flex-wrap gap-1">
              <span>{address.country},</span>
              <span>{address.province},</span>
              <span>{address.city},</span>
              <span>{address.municipality},</span>
              <span>
                {address.area}-{address.ward}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:flex-col md:justify-around items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-700">CONTACT</h1>
          <h2 className="md:text-lg">{contact}</h2>
        </div>

        <button className="flex space-x-2 items-center justify-center  py-1 px-2 bg-yellow-300 hover:bg-yellow-400 rounded-sm">
          <span>Send Message</span>
          <span>
            <HiMiniArrowLongRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AgentListItem;
