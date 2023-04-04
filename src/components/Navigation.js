import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/", exact: true },
  { name: "About-us", to: "/about-us" },
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
                activeClassName="activeLink"
                exact={item.exact || false}
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
