import React, { Component } from 'react';

import Menu from './Menu';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import ScrollArrow from './ScrollArrow';

import '../styles/index.css';
import '../styles/Wave.css';
import '../styles/Header.css';
import '../styles/Footer.css';
import '../styles/Menu.css';
import '../styles/ScrollArrow.css';

export class App extends Component {
  render() {
    return (
     
        <div className="ui">
            <div><Menu/></div>
            <Header/>
            <ScrollArrow/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
        
    )
  }
}

export default App

