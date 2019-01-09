import React from 'react'
import {Link} from "react-router-dom";

// css style
var imgStyle = {
  maxWidth:350,
  maxHeight:350
}

export default function about() {
  return (
    <div>
          {/* Nav Bar */}
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
            <div className="container">
                <Link className="navbar-brand"  to="/">Trip Track</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link"  to="/dashboard">Dash Board</Link>
                    </li>
                </ul>
            </div>
          </nav>
          <div className="container mx-4">
            <h1 className="border-bottom my-4">About Us</h1>
            <p>Trip Track is an expense managing web application for people traveling in groups. Its core functionality includes:</p>
            <ol>
              <li>Keeping track of how much each person owes you and what he or she owes you for. </li>
              <li>Keeping track of how much you owe each person and what you owe him or her for. </li>
              <li>Calculating the net payments between you and all of your trip mates.</li>
              <li>Breaking down your expenses into five main categories: transport, lodging, food, tours, and others.</li>
            </ol>
            <p>All you have to do is create a new trip or join a trip that your friend had already created and record expenses as you travel. Trip Track will take care of the rest.</p>
            <h1 className="border-bottom my-4">Backend</h1>
            <img style={imgStyle} src="./backEndPic.jpg" alt="Backend Pic"></img>
            <p><strong>Load Balancer:</strong> NGINX reverse proxy is used to balance traffic between two servers running on two different Digital Ocean machines.</p>
            <p><strong>Server and Routing:</strong> Node.js server is used with the Express middleware to handle routes.</p>
            <p><strong>Database:</strong> MongoDB is used with Mongoose as the driver. The database instance is hosted by MLab. </p>
            <p><strong>Authentification:</strong> Uses Jason Web Tokens and Passport.js as the middleware. </p>
            <p><strong>Deployment:</strong> Servers are dockerized and deployed on Digital Ocean Cloud.</p>
            <p><strong>Testing:</strong> API tests were conducted using Postman.</p>
            <h1 className="border-bottom my-4">Frontend</h1>
            <img style={imgStyle} src="./frontEndPic.jpg" alt="Frontend Pic"></img>
            <p><strong>Style and Layout:</strong> Used Bootstrap.</p>
            <p><strong>Framework:</strong> React and React-Redux to manage states.</p>
            <p><strong>Testing:</strong> Redux testing was done by using Redux-DevTools.</p>
          </div>
    </div>
  )
}
