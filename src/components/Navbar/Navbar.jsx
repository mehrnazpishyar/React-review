import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({totalItems}) => {
  return (
    <header className={styles.navbar}>
      <h2>Home</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default Navbar;
