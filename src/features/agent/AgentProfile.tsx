import { Link } from "react-scroll";

const AgentProfile = () => {
  return (
    <main className="px-4 md:px-8 lg:px-14 flex flex-col gap-4">
      <header className="sticky top-0 flex justify-between w-full py-3 items-center">
        <h1 className="md:text-xl hidden md:block">Agent Profile</h1>
        <nav className="flex items-center md:mx-2 mx-auto gap-8 md:text-lg">
          <Link
            to="top"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-500"
          >
            Top
          </Link>
          <Link
            to="top"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-500"
          >
            My Story
          </Link>
          <Link
            to="top"
            smooth={true}
            duration={1000}
            className="hover:text-yellow-500"
          >
            Properties
          </Link>
          <button className="py-1 px-2 border border-yellow-500 rounded-md hover:bg-yellow-500">
            Connect
          </button>
        </nav>
      </header>
    </main>
  );
};

export default AgentProfile;
