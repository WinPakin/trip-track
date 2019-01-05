import React from 'react'
import {Link} from "react-router-dom";

export default function about() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
              <div className="container">
                  <Link className="navbar-brand"  to="/">Trip Track Home</Link>
              </div>
          </nav>
        <h1>About Us</h1>
    </div>
  )
}
