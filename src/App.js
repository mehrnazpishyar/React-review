import React from "react";
import "./App.css";
import Discussion from "./container/Discussion/Discussion";
// import ProductList from "./components/ProductList/ProductList";
// import Navbar from "./components/Navbar/Navbar.js";
// import ProductsProvider from "./components/Providers/ProductsProvider";
// import FilterProducts from "./components/Filter/FilterProducts";



const App = () => {
  return (
    <div>
      {/* <ProductsProvider>
        <Navbar />
        <FilterProducts />
        <ProductList />
      </ProductsProvider> */}
      <Discussion />
    </div>
  );
};

export default App;
