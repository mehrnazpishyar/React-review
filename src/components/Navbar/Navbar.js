import React from "react";
import { useProducts } from "../Providers/ProductsProvider";
import styles from "./navbar.module.css";

const Navbar = () => {
  const productItems = useProducts();
  const totalItems = productItems.filter((p) => p.quantity > 0).length;
  return (
    <header className={styles.navbar}>
      <h2>Home</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default Navbar;
