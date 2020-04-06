import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="HeaderName">Allen Bautista</div>
      <div className="HeaderRole">Software Developer</div>
      <button className="HeaderButton" size="lg">
        <a href="./resume_bautistaa_website.pdf" style={{textDecoration: 'none', color: 'white'}} download>
          Download CV
        </a>
      </button>
    </div>
  );
}

export default Header;