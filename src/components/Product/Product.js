import React from 'react'
import styles from './product.module.css'

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Product