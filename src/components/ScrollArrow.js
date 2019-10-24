import React from 'react';
import { Link} from "react-scroll";


export default function ScrollArrow() {
  return (
    <div className="arrow_content">
        <span>
            <Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
                <i class="angle double down icon"></i>
            </Link>
        </span>
    </div>
  )
}
