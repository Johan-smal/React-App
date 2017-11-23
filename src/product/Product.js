import React, { Component } from 'react';
import "./Product.css";
class Product extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  getID(){
    return this.props.product.id;
  }

  getName(){
    return this.props.product.name;
  }

  getPrice(){
    return this.props.product.price;
  }

  getImgSrc(){
    return this.props.product.img;
  }

  getCategory(){
    return this.props.product.category;
  }

  render(){
    return (
      <div className="product" data-category={this.getCategory()}>
        <h4>{this.getName()}</h4>
      </div>
    );
  }
}

export default Product;
