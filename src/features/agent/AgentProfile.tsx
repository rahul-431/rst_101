import { useState } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { Element, Link } from "react-scroll";
import PropertyItem from "../property/PropertyItem";
import { propertyList } from "../../data/propertyItemData";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import GetInTouch from "../../ui/GetInTouch";
import { NavLink } from "react-router-dom";

const AgentProfile = () => {
  const agent = {
    _id: "agent101",
    name: "Tom Cruise Jr.",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    role: "founder and ceo",
    address: {
      country: "Nepal",
      province: "Bagmati",
      city: "kathmandu",
      municipality: "Kathmandu",
      ward: 10,
      area: "Main road",
    },
    contact: "+977 9865410868",
    language: ["English", "Nepali"],
    story:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam, atque eum voluptate dolorem nesciunt doloribus natus maxime nihil earum quam sapiente ipsa necessitatibus dignissimos! Error doloremque recusandae provident quae aperiam, maiores repudiandae omnis quia tempore ducimus sed quod voluptatum. Cum dignissimos necessitatibus laborum repudiandae, reiciendis ipsa assumenda aliquid adipisci odio, unde, omnis iusto sapiente quas saepe labore maiores? Aliquid eos corporis, saepe, nam, nostrum perspiciatis veritatis sit at officia obcaecati dolore nemo magni? Accusantium dignissimos saepe delectus eveniet, praesentium, repellat veritatis ut suscipit reprehenderit sequi nisi ipsam ullam sapiente asperiores minima cupiditate officiis nam a itaque totam unde rem?",
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <main className="flex flex-col gap-8">
      <header className="px-4 md:px-8 lg:px-12 sticky top-0 flex justify-end w-full py-2 items-center bg-yellow-100">
        <nav className="flex items-center md:mx-2 mx-auto gap-8 md:text-lg ">
          <Link
            to="top"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-500"
          >
            Top
          </Link>
          <Link
            to="my-story"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-500"
          >
            My Story
          </Link>
          <Link
            to="properties"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-500"
          >
            Properties
          </Link>
          <Link to="get-in-touch" smooth={true} duration={1000}>
            <button className="py-1 px-2 border border-yellow-500 rounded-md hover:bg-yellow-500">
              Connect
            </button>
          </Link>
        </nav>
      </header>
      <Element
        name="top"
        className="px-4 md:px-8 lg:px-14  flex  md:flex-row flex-col md:justify-between gap-4 w-full my-5"
      >
        <div className="flex flex-col md:gap-6 gap-2">
          <h2 className="text-gray-800 uppercase">
            {agent.address.city}, {agent.address.country}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="md:text-3xl text-2xl">{agent.name}</h1>
            <h2 className="uppercase">{agent.role}</h2>
          </div>
          <Link to="get-in-touch" smooth={true} duration={1000}>
            <button className="flex space-x-2 items-center justify-center  py-2 px-4 bg-yellow-300 hover:bg-yellow-400 rounded-sm">
              <span>Send Message</span>
              <span>
                <HiMiniArrowLongRight />
              </span>
            </button>
          </Link>
        </div>
        <div className="md:w-96 w-full">
          <img
            src={agent.image}
            alt="Agent Image"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
      </Element>
      <Element
        name="my-story"
        className="px-4 md:px-8 lg:px-14  flex flex-col md:flex-row md:justify-between gap-6 "
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-800">LANGUAGES</h2>
            {agent.language.map((item) => (
              <h1>{item}</h1>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-800">ASSOCIATION</h2>
            <h1 className=" text-2xl">Homeland Enterprise Solution</h1>
          </div>
        </div>
        <div className="max-w-[420px]">
          <h1 className="mb-2 text-lg md:text-xl">Agent's Story</h1>
          <p>{isExpanded ? agent.story : `${agent.story?.slice(0, 200)}...`}</p>
          <button
            onClick={toggleReadMore}
            className="text-yellow-500 underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </Element>
      <Element
        name="properties"
        className="flex flex-col gap-4 px-4 md:px-8 lg:px-14 "
      >
        <h1 className="md:text-2xl text-xl">Exclusive Properties</h1>
        <div className="flex flex-col gap-2">
          <h1 className="md:text-lg">
            For Sale/Rent ({propertyList.slice(1, 5).length})
          </h1>
          <div className="flex gap-4 overflow-auto  flex-nowrap w-full">
            {propertyList.slice(1, 5).map((property) => (
              <PropertyItem
                key={property._id}
                _id={property._id}
                category={property.category}
                address={property.address}
                price={property.price}
                mainImage={property.mainImage}
                rating={property.rating}
                type={property.type}
              />
            ))}
          </div>
          <NavLink
            to={`/property?agentId=${agent._id}`}
            className="mt-2 flex space-x-2 items-center bg-yellow-300 hover:bg-yellow-400 w-full md:w-60 py-1 px-2 justify-center rounded-md"
          >
            <span>View All Properties</span>
            <span>
              <HiMiniArrowLongRight />
            </span>
          </NavLink>
        </div>
      </Element>
      <section className="flex flex-col md:flex-row  justify-between gap-8 px-4 md:px-8 lg:px-12 mb-4">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="md:text-3xl text-2xl">{agent.name}</h1>
          <h2 className="text-gray-600">{agent.role}</h2>
          <div className="flex flex-col gap-1 my-2">
            <p className="flex space-x-2 items-center">
              <span className="text-yellow-500 hover:text-yellow-700">
                <IoCall />
              </span>
              <span>{agent.contact}</span>
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
            <h2 className="text-gray-600">ADDRESS</h2>
            <p className=" text-gray-700 flex flex-wrap gap-1">
              <span>{agent.address.country},</span>
              <span>{agent.address.province},</span>
              <span>{agent.address.city},</span>
              <span>{agent.address.municipality},</span>
              <span>
                {agent.address.area}-{agent.address.ward}
              </span>
            </p>
          </div>
        </div>
        <Element name="get-in-touch">
          <GetInTouch />
        </Element>
      </section>
    </main>
  );
};

export default AgentProfile;
