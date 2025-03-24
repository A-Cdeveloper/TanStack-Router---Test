import { Link } from "@tanstack/react-router";

const NavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <li>
      <Link
        to={to}
        className="uppercase font-bold hover:text-amber-400"
        activeProps={{ className: "text-amber-400" }}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
