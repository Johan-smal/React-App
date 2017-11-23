import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import products from './products.json';
import categories from './categories.json';
import Filter from './filter/Filter';
import Products from './products/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-content">
          <h3 className="Page-header">
            Our wines
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="App-sidebar">
          <Filter categories={categories.categories}/>
        </div>
        <div className="App-content">
          <Products products={products.products} />
        </div>
      </div>
    );
  }
}

export default App;
