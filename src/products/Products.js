import React, { Component } from 'react';
import "./Products.css";
import Product from '../product/Product';

class Products extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  renderProducts(){
    return this.props.products.map(this.renderProduct);
  }

  renderProduct = product => (
    <Product key={product.id} product={product}/>
  )

  render(){
    return (
      <div className="products-container">
        {this.renderProducts()}
      </div>
    );
  }
}

export default Products;
