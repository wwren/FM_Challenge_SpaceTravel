import React from "react";
import { Link } from "react-router-dom";

function NavItem({ navLink }) {
  return (
    <>
      {navLink.map((navEle) => (
        <li key={navEle.id}>
          <Link to={navEle.link}>
            <span className="nav-item__number">{navEle.id}</span>
            <span className="nav-item__text">{navEle.name}</span>
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavItem;
