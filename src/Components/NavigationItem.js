import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './NavigationItem.css';

class NavigationItem extends Component {
  render() {
    return (
      <NavLink className="NavigationItem" activeClassName='NavigationActive' exact to={this.props.toLink}>
        {this.props.item === 'Home' ? 'Allen Bautista' : this.props.item}
      </NavLink>
    );
  };
}

export default NavigationItem