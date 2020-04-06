import React, { Component } from 'react';
import ImageHolderShape from '../Resources/image-holder-shape.svg';

class ImageHolder extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img style={{transform: `rotate(270deg)`,
                     opacity: '0.3'}} src={ImageHolderShape} alt='' width='320px' height='320px' />
      </div>
    );
  }
};

export default ImageHolder;