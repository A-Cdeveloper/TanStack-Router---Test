import NavLink from "./NavLink";

const Navigation = () => {
  return (
    <nav className="p-1 border-b border-gray-600">
      <ul className="flex gap-x-2">
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/news" label="News" />
      </ul>
    </nav>
  );
};

export default Navigation;
