import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-8 mb-4 flex flex-col w-full px-4 md:px-12">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-yellow-500 text-lg md:text-xl">HomeLand</h1>
          <p className="text-wrap">
            For those who seek an exceptional home and life, there is only Home
            land Enterprise.
          </p>
          <div className="flex gap-2 text-yellow-500 md:text-xl">
            <NavLink to="#" className="hover:text-yellow-700">
              <FaFacebookSquare />
            </NavLink>
            <NavLink to="#" className="hover:text-yellow-700">
              <FaInstagramSquare />
            </NavLink>
            <NavLink to="#" className="hover:text-yellow-700">
              <FaTwitter />
            </NavLink>
          </div>
        </div>
        <div className="flex  flex-col gap-2">
          <h1 className="text-lg md:text-xl">Contact</h1>
          <div className="flex flex-col gap-1">
            <p className="flex gap-2 ">
              <span className="text-yellow-500 hover:text-yellow-700">
                <IoCall />
              </span>
              <span>+977 9865410868</span>
            </p>
            <p className="flex gap-2">
              <span className="text-yellow-500  hover:text-yellow-700">
                <IoIosMail />
              </span>
              <span>homeland@real.com.np</span>
            </p>
            <p className="flex gap-2">
              <span className="text-yellow-500 hover:text-yellow-700">
                <FaLocationDot />
              </span>
              <span>Hetauda-10, TCN Road</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-8 text-sm ">
        <p className="text-center">
          Copyright{" "}
          <span className="bg-black text-white border-none rounded-full px-1">
            c
          </span>{" "}
          2024 Homeland, All rights are reserved
        </p>
        <p className="flex gap-2 items-center">
          <NavLink to="#">Terms and condition</NavLink>
          <NavLink to="#">Privacy policy</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Footer;
