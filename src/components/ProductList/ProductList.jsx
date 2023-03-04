import React from "react";
import Product from "../Product/Product";


const ProductList = ({onChange, onDecrement, onIncrement, onRemove, products}) => {
  return (
    <div>
      {!products.length && <div>There is no product in cart</div>}
      {products.map((product, index) => {
        return (
          <Product
            // name={product.title}
            // price={product.price}
            product={product}
            key={index}
            onRemove={() => onRemove(product.id)}
            onIncrement={() => onIncrement(product.id)}
            onDecrement={() => onDecrement(product.id)}
            onChange = {(e) => onChange(e,product.id)}
          />
        );
      })}
    </div>
  );
}

export default ProductList

