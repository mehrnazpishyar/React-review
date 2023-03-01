import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {


  render() {

    return (
      <div>
        {!this.props.products.length && <div>There is no product in cart</div>}
        {this.props.products.map((product, index) => {
          return (
            <Product
              // name={product.title}
              // price={product.price}
              product={product}
              key={index}
              onDelete={() => this.props.onRemove(product.id)}
              onIncrement={() => this.props.onIncrement(product.id)}
              onDecrement={() => this.props.onDecrement(product.id)}
              onChange = {(e) => this.props.onChange(e,product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
