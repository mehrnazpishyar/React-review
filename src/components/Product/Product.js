import React from 'react'
import styles from './product.module.css'

const Product = () => {
  return (
    <div className={styles.container}>
          <p>product name : react.js</p>
          <p>product price : 99$</p>
    </div>
  )
}

export default Product