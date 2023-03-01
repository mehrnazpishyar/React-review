import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <header className={styles.navbar}>
      <h2>mehrnaz</h2>
      <span>{props.totalItems}</span>
    </header>
  );
};

export default Navbar;
