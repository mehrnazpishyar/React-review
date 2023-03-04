import React from "react";
import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";


const ProductList = () => {
  const productItems = useProducts();
  const {removeHandler, incrementHandler, decrementHandler, changeHandler} = useProductsActions();
  return (
    <div>
      {!productItems.length && <div>There is no product in cart</div>}
      {productItems.map((product, index) => {
        return (
          <Product
            // name={product.title}
            // price={product.price}
            product={product}
            key={index}
            onRemove={() => removeHandler(product.id)}
            onIncrement={() => incrementHandler(product.id)}
            onDecrement={() => decrementHandler(product.id)}
            onChange = {(e) => changeHandler(e,product.id)}
          />
        );
      })}
    </div>
  );
}

export default ProductList

