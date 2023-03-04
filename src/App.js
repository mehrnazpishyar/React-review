<<<<<<< HEAD
import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar.js";
import ProductsProvider from "./components/Providers/ProductsProvider";

const App = () => {
  return (
    <div className="container">
      <ProductsProvider>
        <p>welcome to context</p>
        <Navbar />
        <ProductList />
      </ProductsProvider>
=======
import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar.jsx";
import CounterProvider from "./components/Context/CounterProvider";
import CounterOne from "./components/Context/CounterOne";


const App = () => {
  const [productItems, setProductItems] = useState([
    { title: "React.js", price: "99 $", id: 1, quantity: 1 },
    { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
    { title: "Javascript", price: "79 $", id: 3, quantity: 3 },
  ]);

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
    const product = {...productItems[index]};
    product.title = event.target.value;
    const UpdatedProducts = [...productItems];
    UpdatedProducts[index] = product;
    setProductItems(UpdatedProducts);
  };

  return (
    <div className="container">
      <CounterProvider>
        <p>welcome to context</p>
        <CounterOne />
      </CounterProvider>
      <Navbar totalItems={productItems.filter((p) => p.quantity > 0).length} />
      <ProductList
        products={productItems}
        onRemove={removeHandler}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
        onChange={changeHandler}
      />
>>>>>>> a97d54a61aa644cf1e917c2e9ec3aa042932a9b6
    </div>
  );
};

export default App;
