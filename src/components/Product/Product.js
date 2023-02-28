import React from "react";
import styles from "./product.module.css";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>product name : {props.product.name}</p>
      <p>product price : {props.product.price}</p>
      <span className={styles.value}>{props.product.quantity}</span>
      <button
        onClick={props.onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        increment
      </button>
      <button onClick={props.onDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Product;
