import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ navLink }) {
  return (
    <>
      {navLink.map((navEle) => (
        <li key={navEle.id}>
          <NavLink to={navEle.link} className={({ isActive }) => (isActive ? "active" : "")}>
            <span className="nav-item__number">{navEle.id}</span>
            <span className="nav-item__text">{navEle.name}</span>
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavItem;
