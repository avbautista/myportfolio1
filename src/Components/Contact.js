import React from 'react';

import './Contact.css';
import ContactCard from '../Items/ContactCard';

function Contact() {
  return (
    <div className='Contact'>
      <h1>CONTACT ME</h1>
      <h2>You can contact me using these channels.</h2>
      <div className='contactCards'>
        <ContactCard emailAddress='allen_bautista22@yahoo.com'
                     linkedinUrl='https://www.linkedin.com/in/allen-bautista-446a71a4/'
                     instagramUrl='https://www.instagram.com/nexallcooking/' />
      </div>
    </div>
  );
}

export default Contact;
