import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop();
};

export default function Menu() {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item" onClick={scrollToTop}>
               App Name
            </Link>
            <div className="right menu">
                <Link to="section1" className="item" spy={true} smooth={true} offset={-70} duration={500}>
                    Link 1
                </Link>
                <Link to="section2" className="item" spy={true} smooth={true} offset={-70} duration={500}>
                    Link 2
                </Link>
            </div>
        </div>
    )
}
