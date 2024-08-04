import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { propertyList } from "../../data/propertyItemData";
import PropertyItem from "./PropertyItem";

const SimilarProperty = () => {
  const prevSlide = () => {};
  const nextSlide = () => {};
  return (
    <section className="flex flex-col gap-2 my-2">
      <h1 className="text-lg md:text-xl">Similar Properties</h1>
      <div className="flex flex-col gap-0">
        <div className="px-4 lg:px-12 mt-4 grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {propertyList.slice(0, 4).map((item) => (
            <PropertyItem
              key={item._id}
              _id={item._id}
              category={item.category}
              address={item.address}
              price={item.price}
              mainImage={item.mainImage}
              rating={item.rating}
              type={item.type}
            />
          ))}
        </div>
        <button className="underline md:hidden">Show More</button>
        <div className="hidden md:flex justify-end items-center gap-2 md:px-12">
          <button
            onClick={prevSlide}
            className="md:px-4 md:py-2 px-2 py-1 text-sm bg-black bg-opacity-50 text-yellow-500 rounded-lg hover:bg-opacity-75"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="md:px-4 md:py-2 px-2 py-1 text-sm bg-black bg-opacity-50 text-yellow-500 rounded-lg hover:bg-opacity-75"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimilarProperty;
