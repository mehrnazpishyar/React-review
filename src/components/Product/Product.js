import React from "react";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({ product, onChange, onDecrement, onIncrement, onRemove }) => {
  return (
    <div className={styles.product}>
      <p>product name : {product.title}</p>
      <p>product price : {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      />
      <button
        onClick={onDecrement}
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button onClick={onRemove} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Product;
