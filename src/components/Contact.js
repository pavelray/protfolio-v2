import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="Contact">
      <div className="header_block">
        <h1 className="header_primary">Contact Me</h1>
        <h3 className="header_primary-sub">You can find me here
          <span className="emoji_span" role="img">👇</span>
        </h3>
        <div className=" ui container social-block">
            <div className="social-block-container">
              <i className="instagram icon"></i>
              <i className="github icon"></i>
              <i className="linkedin icon"></i>
              <i className="facebook icon"></i>
            </div>
        </div>
        
      </div>
    </section>
  )
}
