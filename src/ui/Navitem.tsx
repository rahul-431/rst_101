import { NavLink } from "react-router-dom";
type navItemName = {
  name: string;
};
function Navitem({ name }: navItemName) {
  return (
    <NavLink
      to={"/"}
      className="block py-2 px-3 text-white rounded md:bg-transparent  hover:bg-yellow-500 md:hover:bg-transparent md:hover:text-yellow-500 md:text-lg lg:text-xl"
    >
      {name}
    </NavLink>
  );
}

export default Navitem;
