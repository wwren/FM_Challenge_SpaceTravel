import { useMemo } from "react";
import "./Nav.css";
import { Outlet, Link } from "react-router-dom";
import { getNavigation } from "./space-data.js";
import { ReactComponent as Logo } from "./assets/shared/logo.svg";

function Nav() {
  const navLink = useMemo(() => getNavigation(), []);

  return (
    <div>
      <nav>
        <div className="nav__left-panel">
          <div className="nav__logo">
            <Logo />
          </div>
          <div className="nav__horizontal-line"></div>
        </div>
        <ul className="nav__right-panel">
          {navLink.map((navEle) => (
            <li key={navEle.id}>
              <Link to={navEle.link}>
                <span className="nav-item__number">{navEle.id}</span>
                <span className="nav-item__text">{navEle.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
