import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99 $", id: 1, quantity: 1 },
      { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
      { title: "Javascript", price: "79 $", id: 3, quantity: 3 },
    ],
  };

  removeHandler = (id) => {
    console.log("clicked", id);
    const filterProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filterProduct });
  };

  incrementHandler = (id) => {
    // 1. id => ok
    // 2. find selected item
    // 3. add one to item quantity
    // 4. setState()

    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++;
    //  this.setState({products:products})
    this.setState({ products });
  };

  changeHandler = (event,id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.title=event.target.value
    this.setState({products})
  }

  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          return (
            <Product
              // name={product.title}
              // price={product.price}
              product={product}
              key={index}
              onDelete={() => this.removeHandler(product.id)}
              onIncrement={() => this.incrementHandler(product.id)}
              onChange = {(e) => this.changeHandler(e,product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
