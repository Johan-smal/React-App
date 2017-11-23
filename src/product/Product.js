import React, { Component } from 'react';
import "./Product.css";

export default class Product extends Component {
  constructor(props){
    super(props);
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
    if(!this.props.show){
      return null;
    }
    return (
      <div className="product" data-category={this.getCategory()}>
        <div className="product-img">
          <img className="" src={this.getImgSrc()}></img>
        </div>
        <h4 className="product-title">{this.getName()}</h4>
        <p className="product-price">R{this.getPrice()}</p>
      </div>
    );
  }
}
