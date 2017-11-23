import React, { Component } from 'react';
import RadioButton from '../radiobutton/RadioButton';
import "./Filter.css";
class Filter extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  renderRadioButtons(){
    return (
      <ul>
        {this.props.categories.map(this.renderRadioButton)}
      </ul>
    );
  }

  renderRadioButton = label => (
    <RadioButton key={label} value={label} />
  )

  render(){
    return (
      <form>
      <label>Filter Products</label>
      {this.renderRadioButtons()}
      </form>
    );
  }
}

export default Filter;