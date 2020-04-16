import React, { Component } from 'react';

import './PortfolioCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGitlab
} from "@fortawesome/free-brands-svg-icons";

class PortfolioCard extends Component {
  render(props) {
    var repositoryButton;
    if (this.props.githubSrc) {
      repositoryButton = <a href={this.props.githubSrc}
                            target="_blank" rel="noopener noreferrer"
                            className="github social" title='Go to Repository!'>
                           <FontAwesomeIcon icon={faGithub} size="2x" />
                         </a>
    } else if (this.props.gitlabSrc) {
      repositoryButton = <a href={this.props.gitlabSrc}
                           target="_blank" rel="noopener noreferrer"
                           className="gitlab social" title='Go to Repository!'>
                           <FontAwesomeIcon icon={faGitlab} size="2x" />
                         </a>
    } else {
      repositoryButton = 'Private Project'
    }

    return (
      <div className='PortfolioCard'>
        <h1>{this.props.name}</h1>
        <h2>{this.props.year}</h2>
        <img className='imageHolder' src={this.props.imageSrc} alt='Project'/>
        <p>Technologies: {this.props.technologies}</p>
        <div className='repository'>
          {repositoryButton}
        </div>
      </div>
    );
  };
};

export default PortfolioCard;
