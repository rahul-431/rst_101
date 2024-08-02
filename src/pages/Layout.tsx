import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

function Layout() {
  return (
    <>
      <header className="text-black bg-[#FFFCFC]">
        <Navbar />
      </header>
      <main className=" bg-[#FFFCFC]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
