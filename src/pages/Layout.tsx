import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

function Layout() {
  return (
    <>
      <header className="text-white">
        <Navbar />
      </header>
      <main className=" bg-[#FFFCFC]">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
