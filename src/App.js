import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Component } from "react";
import CounterProvider from "./components/Context/CounterProvider";
import ReducerComplex from "./components/Reducer/ReducerComplex";



class App extends Component {
  state = {
    products: [
      { title: "React.js", price: "99 $", id: 1, quantity: 1 },
      { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
      { title: "Javascript", price: "79 $", id: 3, quantity: 3 },
    ],
    isShow: false,
  };

  removeHandler = (id) => {
    console.log("clicked", id);
    const filterProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filterProduct });
  };

  incrementHandler = (id) => {
    // 1. id => ok
    // 2. find index
    // 3. clone the selected index and update the qty
    // 4. setState()

    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.quantity++;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const filteredProduct = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProduct });
    } else {
      const products = [...this.state.products];
      product.quantity--;
      //  this.setState({products:products})
      products[index] = product;
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = [...this.state.products[index]];
    product.title = event.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  render() {
    return (
      <div className="container">
        <CounterProvider>
          <p>welcome to context</p>
    <ReducerComplex />
        </CounterProvider>
        {/* <Navbar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
          onChange={this.changeHandler}
        /> */}
      </div>
    );
  }
}

export default App;
