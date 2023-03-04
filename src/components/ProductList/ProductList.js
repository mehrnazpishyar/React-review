import React from "react";
import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";


const ProductList = () => {
  const productItems = useProducts();
  const dispatch = useProductsActions();
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
            onRemove={() => dispatch({type:"remove", id:product.id}) }
            onIncrement={() => dispatch({type:"increment", id:product.id})}
            onDecrement={() => dispatch({type:"decrement", id:product.id})}
            onChange = {(e) => dispatch({type:"edit", id:product.id, event:e})}
          />
        );
      })}
    </div>
  );
}

export default ProductList

