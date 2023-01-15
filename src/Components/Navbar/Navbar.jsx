import React from 'react'
import "./Navbar.css"
import Toggle from '../Toggle/Toggle'
import { Link } from "react-scroll"

function Navbar() {
    return (
      <div className="nav-wrapper">
        <div className="nav-left">
          <div className="nav-name">Seun</div>
          <Toggle />
        </div>
        <div className="nav-right">
          <div className="nav-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Serivces
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="testimonial" spy={true} smooth={true}>
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>

          <button className="button nav-button">Contact</button>
        </div>
      </div>
    );
}

export default Navbar