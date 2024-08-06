import { useState } from "react";
import Heading from "../ui/Heading";
import Navitem from "../ui/Navitem";
import { HiBars3, HiMiniBackspace } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-gradient-to-r from-yellow-100 to-indigo-100 w-full z-20 text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Heading />
        <div className="flex md:order-2 space-x-3 md:space-x-0 ">
          <NavLink
            to="login"
            className="black  md:text-lg px-2 py-1 border-2 rounded-lg bg-yellow-500 border-b-8"
          >
            Join Us
          </NavLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl  rounded-lg md:hidden hover:border-2 border-yellow-500"
          >
            {isOpen ? <HiMiniBackspace /> : <HiBars3 />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col justify-around p-2 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8  md:flex-row md:mt-0 md:border-0">
            <Navitem to="property" name="Property" />
            <Navitem to="agent" name="Agents" />
            <Navitem to="#" name="About us" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
