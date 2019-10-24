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
            <span className="socal_icon"><i className="instagram icon"></i></span>
            <span className="socal_icon"><i className="github icon"></i></span>
            <span className="socal_icon"><i className="linkedin icon"></i></span>
            <span className="socal_icon"><i className="facebook icon"></i></span>
        </div>
        
      </div>
    </section>
  )
}
