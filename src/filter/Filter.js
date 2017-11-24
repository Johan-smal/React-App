import React, { Component } from 'react';
import RadioButton from '../radiobutton/RadioButton';
import "./Filter.css";
class Filter extends Component {
  renderRadioButtons(){
    return (
      <ul className="category-list">
        <RadioButton key="all" value="All" onFilter={this.props.onFilter} checked={true}/>
        {this.props.categories.map(this.renderRadioButton)}
      </ul>
    );
  }

  renderRadioButton = label => (
    <RadioButton key={label} value={label} onFilter={this.props.onFilter}/>
  )

  render(){
    return (
      <form>
      <label><strong>Filter Products</strong></label>
      {this.renderRadioButtons()}
      </form>
    );
  }
}

export default Filter;
