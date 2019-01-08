import React from 'react';
import {Link} from "react-router-dom";

// css style
var imgStyle = {
  maxWidth:500,
  maxHeight:500
}

export default function not_found() {
  return (
    <div>
          {/* Nav Bar */}
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
            <div className="container">
                <Link className="navbar-brand"  to="/">Trip Track</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link"  to="/about">About Us</Link>
                    </li>
                </ul>
            </div>
          </nav>
          <div className="container mx-4">
            <img style={imgStyle} src="./grass.jpg" alt="Responsive image"></img>
            <img style={imgStyle} src="./beach.jpg" alt="Responsive image"></img>
            <h1 className="my-3">Link Not Found !</h1>
          </div>
          
    </div>
  )
}
