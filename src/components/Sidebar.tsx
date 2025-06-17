import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="sidebar border border-gray-500 w-2xs p-3 flex flex-col">
      <NavLink to="product">go to product</NavLink>
      <NavLink to="users">go to users</NavLink>
      <NavLink to="category">go to category</NavLink>
    </div>
  );
}
