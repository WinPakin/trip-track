import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTrip from "./addTrip";
import JoinTrip from "./joinTrip";
import TripList from "./tripList";


export default function index() {
  return (
    <div>
      {/* Nav Bar */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
              <div className="container">
                  <a className="navbar-brand" href="home.html">Trip Track</a>
              
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="about.html">About Us</a>
                  </li>
                  </ul>
              </div>
          </nav>
        {/* Content */}
        <div className="container mx-4">
          <div className="row py-2">
          {/* Create Trip */}
          <AddTrip/>
          {/* Join Trip */}
          <JoinTrip/>
          </div>
          {/* List Trips */}
          <TripList/>
        </div>


    </div>
  )
}
