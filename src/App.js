import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
// import Navbar from "./components/Navbar/Navbar.jsx";
import ProductsProvider from "./components/Providers/ProductsProvider";

const App = () => {
  return (
    <div className="container">
      <ProductsProvider>
        <p>welcome to context</p>
        {/* <Navbar /> */}
        <ProductList />
      </ProductsProvider>
    </div>
  );
};

export default App;
