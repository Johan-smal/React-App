import React, { Component } from 'react';
import "./Products.css";
import Product from '../product/Product';

export default class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategory: this.props.filter
    }
    console.log(this.props.filter);
  }

  componentWillReceiveProps(nextProps) {
  this.setState({ selectedCategory: nextProps.filter });  
}

  getSelectedCategory(){
    return this.state.selectedCategory;
  }

  showProduct(productCategory){
    if(this.getSelectedCategory()==="all"){
      return true;
    } else if(this.getSelectedCategory()===productCategory){
      return true;
    } else {
      return false;
    }
  }

  renderProducts(){
    return this.props.products.map(this.renderProduct);
  }

  renderProduct = product => (
        <Product key={product.id} product={product} show={this.showProduct(product.category)}/>
  )

  render(){
    console.log(this.getSelectedCategory());
    return (
      <div className="products-container">
        {this.renderProducts()}
      </div>
    );
  }
}
