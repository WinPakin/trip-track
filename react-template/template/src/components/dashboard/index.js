import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddTrip from "./addTrip";
import JoinTrip from "./joinTrip";
import TripList from "./tripList";


export default function index() {
  return (
    <div>
      {/* Nav Bar */}
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
              <div class="container">
                  <a class="navbar-brand" href="home.html">Trip Track</a>
              
                  <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="about.html">About Us</a>
                  </li>
                  </ul>
              </div>
          </nav>
        {/* Content */}
        <div class="container mx-4">
          <div class="row py-2">
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
