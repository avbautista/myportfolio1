import React, { Component } from 'react';

import './ExperienceCard.css';

class ExperienceCard extends Component {
  render(props) {
    const taskList = this.props.tasks;
    var taskItems;
    if (taskList) {
      taskItems = taskList.map((task) => <li>{task}</li>);
    }
    else {
      taskItems = 'No tasks defined!';
    }
    
    return (
      <div className='ExperienceCard'>
        <h1>{this.props.company}</h1>
        <h2>{this.props.startingYear} <span class ="nonDate"> to </span> {this.props.endingYear}</h2>
        <div className='titleSeparator'/>
        <p>{this.props.role}</p>
        <ul>{taskItems}</ul>
      </div>
    );
  }
};

export default ExperienceCard;