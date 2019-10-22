import React from 'react';
import '../styles/Wave.css';
import '../styles/Header.css';

export default function Header() {
  return (
   <section>
      <div className="ui container">
        <div className="header-block">
          <h1 className="header-text__main">
              Hi, I'm John Doe <i className="icon smile outline"></i>
          </h1>
          <h2 className="header-text__sub">
              Sample Text
          </h2>
        </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      </div>
   </section>
  )
}
