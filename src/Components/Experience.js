import React from 'react';

import './Experience.css';
import ExperienceCard from '../Items/ExperienceCard';

function Experience() {
  return (
    <div className='Experience'>
      <h1>WORK EXPERIENCE</h1>
      <h2>NOTE: This is already summarized, kindly check CV for more detailed information. </h2>
      <div className='experienceCards'>
        <ExperienceCard company='GoDigital' startingYear='2017' endingYear='present' 
          role='Software Engineer' 
          tasks={['Develops full stack code in Java EE, Spring Boot and Vaadin',
                  'Created Restful and SOAP APIs',
                  'Knowledge in deployment with Docker, with Jenkins and AWS experience',
                  'Uses Agile Methodology with Git for feature development']}/>
        <ExperienceCard company='Nokia' startingYear='2016' endingYear='2017' 
          role='Software Engineer' 
          tasks={['Codes and Maintains new features in C and C++',
                  'Uses scripting tool like Python, and DevOps tools such as Jenkins. Uses SVN for repository.',
                  'Scrum master for around 3 months and Quality Engineer for a year']}/>
        <ExperienceCard company='Accenture' startingYear='2014' endingYear='2016' 
          role='Associate Software Engineer' 
          tasks={['SAP BI Support for the first year with some SAP ABAP coding experience under a big project',
                  'Codes automation scripts for excel sheets using VBA macros',
                  'Shifted to DevOps project with Mobile Development using Java for Android and Firebase']}/>
      </div>
    </div>
  );
}

export default Experience;