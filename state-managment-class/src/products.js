import React from "react";
import products from "./data";



class Product extends React.Component{
  render(){
    return(
      <div>
        <ul>
          {this.props.products.map((product) => (
            <div>
              <li>{product.name}</li>
              <li>{product.inventory}</li>
              <li>{product.unit_price}</li>
            </div>
    ))}
        </ul>
      </div>
    )
  }
}





export default Product;