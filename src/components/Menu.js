import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import '../styles/Menu.css';

const scrollToTop = () => {
    scroll.scrollToTop();
};

export default function Menu() {
    return (
        <div className="ui fixed secondary pointing menu navbar">
            <Link to="/" className="item" onClick={scrollToTop}>
            John Doe | Profession
            </Link>
            <div className="right menu">
                <Link to="About" className="item" spy={true} smooth={true} offset={-70} duration={500}>
                    About Me
                </Link>
                <Link to="Portfolio" className="item" spy={true} smooth={true} offset={-70} duration={500}>
                    Portfolio
                </Link>
                <Link to="Contact" className="item" spy={true} smooth={true} offset={-70} duration={500}>
                    Contact
                </Link>
            </div>
        </div>
    )
}
