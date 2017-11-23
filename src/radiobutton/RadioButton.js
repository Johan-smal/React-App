import React, { Component } from 'react';
import "./RadioButton.css";
class RadioButton extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li>
        <label><input type="radio" name="category"></input>{this.props.value}</label>
      </li>
    );
  }
}

export default RadioButton;
