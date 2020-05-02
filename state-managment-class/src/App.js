import React from "react";
import "./App.css";
import Product from "./products";
import products from "./data"

class Cities extends React.Component {
  render() {
    return <li>{this.props.anyname}</li>;
  }
}

class Country extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.anyname}</h1>
        <h2>{this.props.frined}</h2>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    const names = ["abid", "ali", "imran"];

    return (
      <div className="App">
        <Cities anyname={names} />
        <Country anyname={names} frined="true" />
        <Product products={products} />
      </div>
    );
  }
}

export default App;
