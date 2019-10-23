import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div className="footer">
     <div className="ui container footer_content">
        <h2>John Doe</h2>
        <h2>Copyright @ {new Date().getFullYear()}</h2>
     </div>
    </div>
  )
}
