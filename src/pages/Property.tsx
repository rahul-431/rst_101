import { propertyList } from "../data/propertyItemData";
import Filter from "../ui/Filter";
import PropertyItem from "../features/property/PropertyItem";
import Search from "../ui/Search";
import Pagination from "../ui/Pagination";

function Property() {
  return (
    <>
      <header className="px-4 lg:px-12 flex flex-col gap-4 py-4">
        {/* header part  */}
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-center">Our resent projects</h2>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center">
              Best Properties of the years
            </h1>
          </div>
          <div className="flex justify-between align-middle lg:text-lg md:text-lg">
            <h2 className="">Rent an House in Nepal</h2>
            <Filter
              filterField={"type"}
              options={[
                { label: "All", value: "all" },
                { label: "Rent", value: "rent" },
                { label: "Sale", value: "sale" },
              ]}
            />
          </div>
        </div>

        {/* for category of properties */}
        <div className="flex flex-col gap-4 md:flex-row justify-between align-middle lg:text-lg md:text-lg w-full">
          <Filter
            filterField="category"
            options={[
              { label: "All", value: "all" },
              { label: "Rooms", value: "rooms" },
              { label: "House", value: "house" },
              { label: "Land", value: "land" },
              { label: "Apartment", value: "apartment" },
              { label: "Bunglow", value: "bunglow" },
            ]}
          />
          <Search />
        </div>
      </header>
      <main className="px-4 lg:px-12 my-5 flex flex-col gap-5">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {propertyList.map((item) => (
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
        <Pagination count={50} />
      </main>
    </>
  );
}

export default Property;
