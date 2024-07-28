import { NavLink } from "react-router-dom";

function Heading() {
  return (
    <NavLink to={"/"} className="text-xl lg:text-3xl md:2xl">
      Homeland
    </NavLink>
  );
}

export default Heading;
