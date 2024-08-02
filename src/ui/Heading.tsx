import { NavLink } from "react-router-dom";

function Heading() {
  return (
    <NavLink to={"/"} className="text-xl lg:text-2xl md:xl">
      Homeland
    </NavLink>
  );
}

export default Heading;
