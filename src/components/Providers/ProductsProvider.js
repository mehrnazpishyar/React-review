import React, { useContext, useReducer } from "react";
import { productsData } from "../db/products";
import _ from "lodash";

const ProductContext = React.createContext(); //state
const ProductContextDispatcher = React.createContext(); //setState()

// const initialState = [
//   { title: "React.js", price: "99 $", id: 1, quantity: 1 },
//   { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
//   { title: "Javascript", price: "79 $", id: 3, quantity: 3 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const UpdatedProducts = [...state];
      UpdatedProducts[index] = product;
      return UpdatedProducts;
    }

    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProduct = state.filter((p) => p.id !== action.id);
        return filteredProduct;
      } else {
        const UpdatedProducts = [...state];
        product.quantity--;
        UpdatedProducts[index] = product;
        return UpdatedProducts;
      }
    }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const UpdatedProducts = [...state];
      UpdatedProducts[index] = product;
      return UpdatedProducts;
    }

    case "remove":
      const filterProduct = state.filter((p) => p.id !== action.id);
      return filterProduct;

    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return productsData;
      } else {
        console.log(value);
        const updatedProducts = productsData.filter(
          (p) => p.availableSize.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ['price'], ['asc'])
      } else {
        return _.orderBy(products, ['price'], ['desc'])
      }
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [productItems, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductContext.Provider value={productItems}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => {
  return useContext(ProductContextDispatcher);
};
