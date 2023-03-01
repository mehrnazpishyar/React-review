import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Component } from "react";


class App extends Component {
  state = {
    products : [
      { title: "React.js", price: "99 $", id: 1, quantity: 1 },
      { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
      { title: "Javascript", price: "79 $", id: 3, quantity: 3 },
    ]
  }

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

  decrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filterProduct = products.filter((p) => p.id !== id);
      this.setState({ products: filterProduct });

    }else {
      selectedItem.quantity--;
      //  this.setState({products:products})
      this.setState({ products });
    }
  }

  changeHandler = (event,id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.title=event.target.value
    this.setState({products})
  }

  render() {
    return (
      <div className="container" id="title">
      <Navbar totalItems={this.state.products.filter((p) => p.quantity > 0).length}/>
      <ProductList products={this.state.products} onRemove={this.removeHandler}  onIncrement={this.incrementHandler} onDecrement={this.decrementHandler}  onChange={this.changeHandler} />
    </div>
    )
  }
}


export default App;
