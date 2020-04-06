import React from 'react';

import './Experience.css';
import ExperienceCard from '../Items/ExperienceCard';

function Experience() {
  return (
    <div className='Experience'>
      <h1>WORK EXPERIENCE</h1>
      <div className='experienceCards'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Experience;