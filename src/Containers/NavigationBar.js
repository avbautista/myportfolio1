import React, { Component } from 'react';

import './NavigationBar.css';
import NavigationItem from '../Components/NavigationItem.js';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      'NavItemActive':''
    }
  }
    
  render() {
    return (
      <div className="NavigationBar">
        <NavigationItem item="Home" toLink="/" />
        <NavigationItem item="Experience" toLink="/experience" />
        <NavigationItem item="Portfolio" toLink="/portfolio" />
        <NavigationItem item="Contacts" toLink="/contacts" />
      </div>
    );
  };
}

export default NavigationBar;