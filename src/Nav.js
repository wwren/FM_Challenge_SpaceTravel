import { useState, useMemo } from "react";
import "./Nav.css";
import { Outlet, Link } from "react-router-dom";
import { getNavigation } from "./space-data.js";
import { ReactComponent as Logo } from "./assets/shared/logo.svg";

import { ReactComponent as IconOpen } from "./assets/shared/icon-hamburger.svg";
import useWindowDimensions from "./customHooks/getDimensions";
import NavList from "./commonComponents/NavList";
import NavItem from "./commonComponents/NavItem";
import Overlay from "./commonComponents/Overlay";
function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(sidebarOpen);
  const navLink = useMemo(() => getNavigation(), []);

  const { width } = useWindowDimensions();

  console.log(width);

  return (
    <div>
      <nav className={`${sidebarOpen ? "nav--sidebar-open" : ""}`}>
        <div className="nav__left-panel">
          <div className={`nav__logo ${sidebarOpen ? "sidebar-open" : ""}`}>
            <Logo />
          </div>
          <div className="nav__horizontal-line"></div>
        </div>
        {width <= 540 ? (
          sidebarOpen ? (
            <Overlay setSidebarOpen={setSidebarOpen}>
              <NavItem navLink={navLink} />
            </Overlay>
          ) : (
            <div className="sidebar__logo-open" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <IconOpen />
            </div>
          )
        ) : (
          <NavList>
            <NavItem navLink={navLink} />
          </NavList>
        )}
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
