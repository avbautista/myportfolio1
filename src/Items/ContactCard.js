import React, { Component } from 'react';

import './ContactCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

class ContactCard extends Component {
  render(props) {
    var linkedInButton;
    var instagramButton;
    if (this.props.linkedinUrl) {
      linkedInButton = <a href={this.props.linkedinUrl}
                          target="_blank" rel="noopener noreferrer"
                          className="linkedin social" title='Go to LinkedIn!'>
                         <FontAwesomeIcon icon={faLinkedin} size="2x" />
                       </a>
    } else {
      linkedInButton = ''
    }
    if (this.props.instagramUrl) {
      instagramButton = <a href={this.props.instagramUrl}
                           target="_blank" rel="noopener noreferrer"
                           className="instagram social" title='Go to Instagram!'>
                          <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
    } else {
      instagramButton = ''
    }
    return(
      <div className='ContactCard'>
        <h1>You can send an email to:</h1>
        <p>{this.props.emailAddress}</p>
        <div />
        <h1>You can also add me! Let's chat.</h1>
        <div className='socials'>
          {linkedInButton}
          {instagramButton}
        </div>
      </div>
    );
  };
};

export default ContactCard;
