import { NavLink } from "react-router-dom";
type navItemName = {
  name: string;
  to?: string;
};
function Navitem({ name, to }: navItemName) {
  return (
    <NavLink
      to={`/${to}`}
      className="block py-2 px-3 rounded md:bg-transparent  hover:bg-yellow-500 md:hover:bg-transparent md:hover:text-yellow-500 md:text-lg "
    >
      {name}
    </NavLink>
  );
}

export default Navitem;
