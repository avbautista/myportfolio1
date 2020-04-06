import React, { Component } from 'react';

import Header from './Header.js';
import HomeContent from './HomeContent.js';

class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <HomeContent />
      </div>
    )
  }
}

export default Home