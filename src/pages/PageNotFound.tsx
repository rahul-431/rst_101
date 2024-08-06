import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <section className="h-screen flex  items-center justify-center  bg-gray-50">
      <div className="border border-gray-100 rounded-md flex flex-col items-center">
        <h1 className="mb-10 md:text-3xl text-wrap text-2xl">
          The page you are looking for could not be found 😢
        </h1>
        <button onClick={moveBack} className="text-xl flex items-center gap-2">
          <span>
            <HiMiniArrowLongLeft />
          </span>
          <span> Go back</span>
        </button>
      </div>
    </section>
  );
}

export default PageNotFound;
