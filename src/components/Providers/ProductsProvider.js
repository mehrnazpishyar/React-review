import React, { useContext, useReducer } from "react";

const ProductContext = React.createContext(); //state
const ProductContextDispatcher = React.createContext(); //setState()

const initialState = [
  { title: "React.js", price: "99 $", id: 1, quantity: 1 },
  { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
  { title: "Javascript", price: "79 $", id: 3, quantity: 3 },
];

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

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [productItems, dispatch] = useReducer(reducer, initialState);
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
