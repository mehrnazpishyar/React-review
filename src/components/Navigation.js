import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "About-us", to: "/about-us" },
  { name: "Blog", to: "/blogs" },
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className ="activeLink"
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
