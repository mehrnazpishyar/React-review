import React, { useContext, useReducer, useState } from "react";

const ProductContext = React.createContext(); //state
const ProductContextDispatcher = React.createContext(); //setState()

const ProductsProvider = ({ children }) => {
  const [productItems, setProductItems] = useState([
    { title: "React.js", price: "99 $", id: 1, quantity: 1 },
    { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
    { title: "Javascript", price: "79 $", id: 3, quantity: 3 },
  ]);
  return (
    <ProductContext.Provider value={productItems}>
      <ProductContextDispatcher.Provider value={setProductItems}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);

export const useProductsActions = () => {
  const setProductItems = useContext(ProductContextDispatcher);
  const productItems = useContext(ProductContext);

  const removeHandler = (id) => {
    console.log("clicked", id);
    const filterProduct = productItems.filter((p) => p.id !== id);
    setProductItems(filterProduct);
  };

  const incrementHandler = (id) => {
    const index = productItems.findIndex((item) => item.id === id);
    const product = { ...productItems[index] };
    product.quantity++;
    const UpdatedProducts = [...productItems];
    UpdatedProducts[index] = product;
    setProductItems(UpdatedProducts);
  };

  const decrementHandler = (id) => {
    const index = productItems.findIndex((item) => item.id === id);
    const product = { ...productItems[index] };
    if (product.quantity === 1) {
      const filteredProduct = productItems.filter((p) => p.id !== id);
      setProductItems(filteredProduct);
    } else {
      const UpdatedProducts = [...productItems];
      product.quantity--;
      UpdatedProducts[index] = product;
      setProductItems(UpdatedProducts);
    }
  };

  const changeHandler = (event, id) => {
    const index = productItems.findIndex((item) => item.id === id);
    const product = { ...productItems[index] };
    product.title = event.target.value;
    const UpdatedProducts = [...productItems];
    UpdatedProducts[index] = product;
    setProductItems(UpdatedProducts);
  };

  return { removeHandler, incrementHandler, decrementHandler, changeHandler };
};
