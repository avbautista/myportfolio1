import React from 'react';

import './Portfolio.css';
import PortfolioCard from '../Items/PortfolioCard.js';
import PortfolioProjectImage from '../Resources/portfolio-project.JPG';
import AdsManagementImage from '../Resources/ads-management-system.JPG';
import GodotProjectImage from '../Resources/godot-project.JPG';
import SchedulerApplicationImage from '../Resources/scheduler-application.JPG';

function Portfolio() {
  return (
    <div className='Portfolio'>
      <h1>PORTFOLIO</h1>
      <h2>Some of my projects! Click on the icon to see the repository.</h2> 
      <div className='portfolioCards'>
        <PortfolioCard name='Portfolio Project' year='2020' imageSrc={PortfolioProjectImage}
          technologies='ReactJS, GitHub Pages' githubSrc='https://github.com/avbautista/portfolio-project' />
        <PortfolioCard name='Ads Management System' year='2019' imageSrc={AdsManagementImage}
          technologies='Java, Vaadin, Spring, SQL' />
        <PortfolioCard name='Godot Desktop Game' year='2018' imageSrc={GodotProjectImage}
          technologies='Godot Engine, C#' />
        <PortfolioCard name='Scheduling Mobile App' year='2016' imageSrc={SchedulerApplicationImage}
          technologies='Java for Android, Firebase' githubSrc='https://github.com/avbautista/goschedule' />
      </div>
    </div>
  );
}

export default Portfolio;
