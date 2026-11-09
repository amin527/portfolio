import { Link, NavLink } from "react-router";
import { GamepadIcon } from "./Icons";

const links = [
  { to: "/", label: "Projects" },
  { to: "/about", label: "About" },
];

interface HeaderProps {
  name: string;
}

export function Header({ name }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo" aria-label={`${name}, home`}>
          <GamepadIcon className="site-header__icon" />
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
