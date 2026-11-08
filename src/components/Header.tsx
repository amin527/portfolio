import { Link, NavLink } from "react-router";

const links = [
  { to: "/", label: "Projects" },
  { to: "/about", label: "About" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo" aria-label={`${name}, home`}>
          <span aria-hidden="true">{getInitials(name)}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="site-header__links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
