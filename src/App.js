import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar.js";
import ProductsProvider from "./components/Providers/ProductsProvider";
import FilterProducts from "./components/Filter/FilterProducts";



const App = () => {
  return (
    <div className="container">
      <ProductsProvider>
        <Navbar />
        <FilterProducts />
        <ProductList />
      </ProductsProvider>
    </div>
  );
};

export default App;
