import { HiMiniArrowLongRight } from "react-icons/hi2";
import { Element } from "react-scroll";
const GetInTouch = () => {
  return (
    <Element className="flex flex-col gap-4" name="message">
      <h1 className="text-xl">Let's get in touch</h1>
      <form className="grid lg:grid-cols-2 gap-6 ">
        <input
          id="message"
          type="text"
          placeholder="First Name"
          className="px-4 py-2 bg-transparent border-b-2 border-yellow-500 md:max-w-56  outline-none md:text-lg rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="px-4 py-2 bg-transparent border-b-2 border-yellow-500 md:max-w-56 outline-none md:text-lg rounded"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="px-4 py-2 bg-transparent border-b-2 border-yellow-500 md:max-w-56 outline-none md:text-lg rounded"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="px-4 py-2 bg-transparent border-b-2 border-yellow-500 md:max-w-56 outline-none md:text-lg rounded"
        />

        <label htmlFor="message" className="-mb-4 px-4">
          Message(optional)
        </label>
        <textarea
          className="lg:col-span-2 px-4 py-2 bg-transparent border-2 border-yellow-500 md:max-w-96 outline-none md:text-lg rounded"
          name="message"
          id="message"
          rows={4}
          placeholder="I am intereseted in this property"
        ></textarea>
        <button
          type="submit"
          className="flex space-x-2 items-center bg-yellow-300 hover:bg-yellow-400 w-36 py-1 px-2 justify-center rounded-md"
        >
          <span>Send Message</span>
          <span>
            <HiMiniArrowLongRight />
          </span>
        </button>
      </form>
    </Element>
  );
};

export default GetInTouch;
