// import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <>
      {/* <div className="flex align-middle"> */}
      <input
        type="text"
        placeholder="Search here"
        className="focus:outline-yellow-500 bg-transparent focus:outline-0 text-base px-3 py-1 border-2 border-yellow-500 rounded-2xl sm:w-[120px] lg:w-[230px]"
      />
      {/* <div className="cursor-pointer hover:bg-yellow-500 hover:text-white relative sm:w-6 w-12 rounded-r-2xl border-2 border-yellow-500 mx-auto text-xl">
          <span className="absolute top-1 left-2 font-bold">
            <HiOutlineMagnifyingGlass />
          </span>
        </div>
      </div> */}
    </>
  );
}

export default SearchBar;
