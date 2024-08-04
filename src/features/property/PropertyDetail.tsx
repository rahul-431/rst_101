import {
  FaBath,
  FaBed,
  FaRegImages,
  FaRegShareSquare,
  FaVideo,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { propertyList } from "../../data/propertyItemData";
import {
  HiBookmark,
  HiMiniArrowLongLeft,
  HiMiniArrowLongRight,
} from "react-icons/hi2";
import { BiArea } from "react-icons/bi";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import GetInTouch from "../../ui/GetInTouch";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import Map from "../../ui/Map";
import { Link } from "react-scroll";
import Modal from "../../ui/Modal";
import ImageSlider from "../../ui/ImageSlider";
// type propertyDetailProp = {
//   rating: number;
//   address: {
//     country: string;
//     province: string;
//     municipality: string;
//     ward: number;
//     area: string;
//   };
//   category: string;
//   type: string;
//   price: number;
//   mainImage: string;
//   otherImages: string[];
//   features: {
//     hasCarParking: boolean;
//     hasBikeParking: boolean;
//     hasElevator: boolean;
//     hasGymCenter: boolean;
//     hasSwimmingPool: boolean;
//     bedRoom: number;
//     bathRoom: number;
//     area: number;
//     kitchen: number;
//   };
//   description: string;
// };
const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    return <h1>Property Not found</h1>;
  }
  //   const newId = id.toString();
  const propertyData = propertyList[0];
  const {
    mainImage,
    address,
    price,
    features,
    description,
    type,
    category,
    otherImage,
  } = propertyData;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const position: LatLngExpression = [27.426757868421678, 85.04038092835826];
  return (
    <main className="px-4 md:px-8 lg:px-12 py-8 flex flex-col gap-4">
      <h1 className="text-lg md:text-xl">Property Details</h1>

      {/* first section */}
      <section className="flex w-full relative ">
        {/* mainImage */}
        <div
          className={`w-full h-72 md:h-[420px] md:bg-fixed rounded-sm bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${mainImage})` }}
        ></div>

        {/* for other images */}
        <div className="absolute right-2 bottom-2 py-2 px-4 hidden md:flex gap-2 text-white">
          <Modal>
            <Modal.Open opens="images">
              <button className="flex space-x-2 items-center rounded-lg border-2 border-yellow-500 px-2 bg-yellow-500 hover:bg-transparent">
                <span>
                  <FaRegImages />
                </span>
                <span>20</span>
              </button>
            </Modal.Open>
            <Modal.Open opens="video">
              <button className="flex space-x-2 items-center rounded-lg border-2 border-yellow-500 px-2 bg-yellow-500 hover:bg-transparent">
                <span>
                  <FaVideo />
                </span>
              </button>
            </Modal.Open>
            <Modal.Window name="images">
              <ImageSlider images={otherImage ? otherImage : []} />
            </Modal.Window>
          </Modal>
        </div>
      </section>

      {/* second section */}
      <section className="flex py-1 justify-between w-full text-lg sticky top-0 bg-yellow-200 px-2 z-50">
        <button
          className="md:w-1/5 flex space-x-2 items-center"
          onClick={() => navigate(-1)}
        >
          <span>
            <HiMiniArrowLongLeft />
          </span>
          <span>Back</span>
        </button>
        <div className="flex justify-between items-center w-1/2 md:w-4/5">
          <h1 className="italic">
            {category} on {type}
          </h1>
          <div className="flex justify-between gap-2 md:gap-6">
            <button className="flex space-x-1 items-center">
              <span>
                <FaRegShareSquare />
              </span>
              <span className="hidden md:inline-block">Share</span>
            </button>
            <button className="flex space-x-1 items-center">
              <span>
                <HiBookmark />
              </span>
              <span className="hidden md:inline-block">Save</span>
            </button>
          </div>
        </div>
      </section>

      {/* third section */}
      <hr />
      <section className="flex flex-col md:flex-row-reverse md:justify-between gap-4 my-2">
        <div>
          <div className="flex w-full gap-2 my-2">
            <Modal>
              <Modal.Open opens="images">
                <button className="flex space-x-2 items-center justify-center rounded-sm border-2 border-yellow-300 p-2 hover:bg-yellow-300 w-48">
                  <span>
                    <FaRegImages />
                  </span>
                  <span>20 Photos</span>
                </button>
              </Modal.Open>
              <Modal.Open opens="video">
                <button className="flex space-x-2 items-center justify-center rounded-sm border-2 border-yellow-300 px-2  hover:bg-yellow-300 w-48">
                  <span>
                    <FaVideo />
                  </span>
                  <span>Video</span>
                </button>
              </Modal.Open>
              <Modal.Window name="images">
                <ImageSlider images={otherImage ? otherImage : []} />
              </Modal.Window>
            </Modal>
          </div>
          <Link
            to="message"
            smooth={true}
            duration={500}
            className="my-4 rounded-sm flex gap-4 items-center justify-center bg-yellow-200 py-1 px-2 hover:bg-yellow-300 max-w-96"
          >
            <img
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Agent Image"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex space-y-2 flex-col">
              <p className="text-lg">Harrina Zone</p>
              <p className="flex space-x-2 items-center">
                <span>Send Message</span>
                <span>
                  <HiMiniArrowLongRight />
                </span>
              </p>
            </div>
          </Link>
        </div>

        {/* fourth section */}

        <section>
          <div className="flex gap-1 flex-wrap mb-4 md:text-3xl text-xl my-2">
            <p>{address.country},</p>
            <p>{address.province},</p>
            <p>
              {address.municipality}-{address.ward},
            </p>
            <p>{address.area}</p>
          </div>
          <div className="flex flex-wrap md:gap-12 gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-gray-600">PRICE</p>
              <p className="flex items-center space-x-2 text-xl md:text-2xl">
                <span>NPR</span>
                <span>{price}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600">BEDROOM</p>
              <p className="flex items-center space-x-3 md:text-2xl text-xl">
                <span>
                  <FaBed />
                </span>
                <span>{features?.bedRoom}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600">BATHROOM</p>
              <p className="flex items-center space-x-3 md:text-2xl text-xl">
                <span>
                  <FaBath />
                </span>
                <span>{features?.bathRoom}</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600">AREA</p>
              <p className="flex items-center space-x-3 text-xl md:text-2xl">
                <span>
                  <BiArea />
                </span>
                <span>{features?.area}</span>
              </p>
            </div>
          </div>
        </section>
      </section>
      <hr />

      {/* Fifth section */}

      <section className="grid md:grid-cols-3 gap-6 md:my-10 items-center">
        {/* property description */}
        <div className="max-w-[420px]">
          <h1 className="mb-4 text-lg md:text-xl">Property Description</h1>
          <p>{isExpanded ? description : `${description?.slice(0, 200)}...`}</p>
          <button
            onClick={toggleReadMore}
            className="text-yellow-500 underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
        {/* property location on map */}
        <div className="flex flex-col gap-2 my-2">
          <h1 className="text-lg md:text-xl">Property Location</h1>
          <div className="w-full h-96 bg-violet-500 rounded-md">
            <Map center={position} zoom={13} />
          </div>
        </div>
        {/* property info */}
        <div className="flex flex-col gap-2 mb-2">
          <h1 className="text-lg md:text-xl">Property Info</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <h2 className="text-gray-600">PROPERTY TYPE</h2>
              <h1 className="text-xl">{type}</h1>
            </div>
            <div className="flex flex-col">
              <h2 className="text-gray-600">STATUS</h2>
              <h1 className="text-xl">Available</h1>
            </div>
            <div className="flex flex-col">
              <h2 className="text-gray-600">BUILD YEAR</h2>
              <h1 className="text-xl">2010</h1>
            </div>
            <div className="flex flex-col">
              <h2 className="text-gray-600">PROPERTY TAXES</h2>
              <h1 className="text-xl">NPR 10500 Per Year</h1>
            </div>
          </div>
        </div>
      </section>

      {/* sixth section */}
      <section className="flex flex-col md:flex-row  justify-between gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:items-center">
          <img
            src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Agent image"
            className="w-full h-full md:w-48 md:h-72 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center gap-2 ">
            <h1 className="md:text-3xl text-2xl">Harrina Zone</h1>
            <h2 className="text-gray-600">REAL ESTATE PROFESSIONAL</h2>
            <div className="flex flex-col gap-1 my-2">
              <p className="flex space-x-2 items-center">
                <span className="text-yellow-500 hover:text-yellow-700">
                  <IoCall />
                </span>
                <span>+977 9865410868</span>
              </p>
              <p className="flex space-x-2 items-center">
                <span className="text-yellow-500 hover:text-yellow-700">
                  <IoIosMail />
                </span>
                <span>harrina.zone@gmai.com</span>
              </p>
            </div>
            <hr className="w-24 h-[2px] bg-yellow-500" />
            <div className="flex flex-col gap-1 my-2">
              <h2 className="text-gray-600">OFFICE</h2>
              <p className="text-xl md:text-2xl font-thin">
                HomeLand Realestate solution
              </p>
              <p className="md:text-lg">
                Aananda Toll, Hetauda-10, Bagmati, Nepal
              </p>
            </div>
          </div>
        </div>
        <GetInTouch />
      </section>
    </main>
  );
};

export default PropertyDetail;
