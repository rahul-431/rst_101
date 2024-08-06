import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { agentList } from "../data/agentList";
import AgentListItem from "../features/agent/AgentListItem";
import Pagination from "../ui/Pagination";
import SortBy from "../ui/SortBy";

const Agent = () => {
  return (
    <main className="flex flex-col gap-8">
      <section className="relative flex items-end justify-center">
        <img
          src="https://img-v2.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fapi.sothebysrealty.com%2Fresources%2Fsiteresources%2Fmy%20folder%2Fhugeimages%2Fsir-adp-hero-resized.png&option=N&permitphotoenlargement=false&w=1600"
          alt=""
          className="w-full h-72 object-cover"
        />
        <div className=" absolute -bottom-5 flex flex-col items-center justify-center text-white gap-10 md:gap-10 lg:gap-12 w-full">
          <h1 className="text-2xl md:text-5xl lg:text-5xl w-full text-wrap max-w-[720px] text-center">
            Our professionals will guide on your journey
          </h1>
          <div className="box-border shadow-md shadow-black bg-white text-black px-4 md:w-[520px]  h-16 flex justify-around items-center rounded-lg">
            <div className="text-2xl">
              <HiMiniMagnifyingGlass />
            </div>
            <input
              type="text"
              className="w-full p-2 mx-6 outline-none border-b-2 border-yellow-500"
              placeholder="By name or location"
            />
          </div>
        </div>
      </section>

      {/* agent list */}
      <section className="flex flex-col gap-5 my-8 md:ms-[18%] lg:ms-[20%] px-4 md:px-8 lg:px-12">
        <SortBy
          options={[
            {
              label: "Ascending (A-Z)",
              value: "asc",
            },
            {
              label: "Descending (Z-A)",
              value: "dsc",
            },
          ]}
        />
        <hr />
        <div className="flex flex-col gap-8">
          {agentList.map((agent) => (
            <AgentListItem
              name={agent.name}
              image={agent.image}
              role={agent.role}
              contact={agent.contact}
              address={agent.address}
            />
          ))}
        </div>
        <Pagination count={50} />
      </section>
    </main>
  );
};

export default Agent;
