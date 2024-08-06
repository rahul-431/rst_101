import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import GetInTouch from "../ui/GetInTouch";

const SellWithUs = () => {
  return (
    <main className="flex flex-col gap-4 px-4 md:px-8 lg:px-12 py-5">
      <h1 className="md:text-2xl lg:3xl text-xl text-center">
        You can list your property for rent or sale
      </h1>
      <hr />

      <section className="flex flex-col md:flex-row justify-around gap-8 py-4">
        <div className="flex flex-col gap-2 my-5">
          <h1 className="md:text-3xl text-2xl">Rajesh Hamal</h1>
          <h2 className="text-gray-600">Associate Property Manager</h2>
          <div className="flex flex-col gap-1 my-2">
            <p className="flex space-x-2 items-center">
              <span className="text-yellow-500 hover:text-yellow-700">
                <IoCall />
              </span>
              <span>+977 9865410868</span>
              <span>+977 057-591868</span>
            </p>
            <p className="flex space-x-2 items-center">
              <span className="text-yellow-500 hover:text-yellow-700">
                <IoIosMail />
              </span>
              <span>hamal.rajesh@real.com</span>
            </p>
          </div>
          <hr className="w-24 h-[2px] bg-yellow-500" />
          <div className="flex flex-col gap-1 my-2">
            <h2 className="text-gray-600">OFFICE</h2>
            <p className=" text-gray-700 flex flex-wrap gap-1">
              <span>Nepal,</span>
              <span>Bagmati,</span>
              <span>Hetauda-10,</span>
              <span>Buspark</span>
            </p>
          </div>
        </div>
        <div>
          <GetInTouch placeholder="I wanna list my property for rent / sale" />
        </div>
      </section>
    </main>
  );
};

export default SellWithUs;
