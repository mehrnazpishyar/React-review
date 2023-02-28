import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99$", id: 1 },
      { title: "Node.js", price: "89$", id: 2 },
      { title: "Javascript", price: "79$", id: 3 },
    ],
  };

  removeHandler = (id) => {
    console.log("clicked", id);
    const filterProduct = this.state.products.filter((p) => p.id !== id);
    this.setState({ products : filterProduct})
  };

  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={index}
              onDelete={() => this.removeHandler(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
