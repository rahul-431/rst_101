import { HiMiniArrowLongRight } from "react-icons/hi2";
import { slideData } from "../data/slidedata";
import Slider from "../ui/Slider";
import Slides from "../ui/Slides";

function Home() {
  return (
    <>
      {/* first section  */}
      <Slider slideData={slideData} autoSlide={true}>
        {slideData.map((slide) => (
          <Slides
            key={slide._id}
            city={slide.city}
            country={slide.country}
            image={slide.image}
            price={slide.price}
            category={slide.category}
            type={slide.type}
          />
        ))}
      </Slider>

      {/* second section */}
      <div className="bg-gradient-to-r from-yellow-100 to-indigo-100 py-6 md:py-8 lg:py-12 flex flex-col md:flex-row lg:justify-between px-4 lg:px-12 items-center ">
        <div className="w-full">
          <img
            src="bgimage.png"
            alt="bgImage"
            className="w-full h-full lg:w-[360px] lg:h-[360px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="lg:text-xl text-lg">Wecome to HomeLand</h2>
          <h1 className="lg:text-4xl md:text-3xl text-xl">
            Manage your Property With Us
          </h1>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            modi, atque voluptatibus ducimus laboriosam praesentium?
          </p>
          <button className="flex gap-2 border-none bg-yellow-500 py-1 px-2 rounded-lg w-32 items-center">
            <span>Let's Begin</span>{" "}
            <span>
              <HiMiniArrowLongRight />
            </span>
          </button>
        </div>
      </div>

      {/* third section */}
      <div className="flex flex-col gap-12 py-12 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row-reverse md:justify-between gap-4 items-center">
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Property Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-wrap text-xl md:text-2xl">
              For those who seek an exceptional home and life, there is only
              Home land Enterprise.
            </h1>
            <p className="text-wrap text-sm md:text-lg">
              Built on centuries of tradition and dedicated to innovating the
              luxury real estate industry, Homeland Enterprise offers
              transformative experiences through a global network of exceptional
              agents.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row md:flex-row md:gap-24 md:items-center">
          <div className="w-full md:w-[50%]">
            <img
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="People with computer"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-8 ">
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl">12</h1>
              <p className="md:text-lg">Office Worldwide</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl">104</h1>
              <p className="md:text-lg">Agents</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl">2016</h1>
              <p className="md:text-lg">Active Sites</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl">NPR 500 Million</h1>
              <p className="md:text-lg">Annual Revenue</p>
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}
      <div className="bg-gradient-to-r from-indigo-100 to-yellow-100 flex flex-col gap-8 px-4 md:px-8 lg:px-12 py-10">
        <h1 className="text-center text-2xl">Meet our awesome team</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2 rounded-md shadow-md shadow-gray-700 items-center py-4 hover:-translate-y-1">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-36 h-36 object-cover rounded-full"
            />
            <h1 className="text-xl">Harry Porter JR.</h1>
            <p>Founder and CEO</p>
          </div>
          <div className="flex flex-col gap-2 rounded-md shadow-md shadow-gray-700 items-center py-4 hover:-translate-y-1">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-36 h-36 object-cover rounded-full"
            />
            <h1 className="text-xl">Mark Zukerberg JR.</h1>
            <p>Co-Founder and CTO</p>
          </div>
          <div className="flex flex-col gap-2 rounded-md shadow-md shadow-gray-700 items-center py-4 hover:-translate-y-1">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-36 h-36 object-cover rounded-full"
            />
            <h1 className="text-xl">Thanos End</h1>
            <p>Frontend Developer</p>
          </div>
          <div className="flex flex-col gap-2 rounded-md shadow-md shadow-gray-700 items-center py-4 hover:-translate-y-1">
            <img
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-36 h-36 object-cover rounded-full"
            />
            <h1 className="text-xl">Iron Man</h1>
            <p>UI/UX Designer</p>
          </div>
          <div className="flex flex-col gap-2 rounded-md shadow-md shadow-gray-700 items-center py-4 hover:-translate-y-1">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-36 h-36 object-cover rounded-full"
            />
            <h1 className="text-xl">Iron Man</h1>
            <p>Backend Developer</p>
          </div>
          <div className="flex flex-col gap-2 rounded-md shadow-md shadow-gray-700 items-center py-4 hover:-translate-y-1">
            <img
              src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-36 h-36 object-cover rounded-full"
            />
            <h1 className="text-xl">Thox Xmen</h1>
            <p>Manager</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
