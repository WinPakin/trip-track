import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/home/index';
import Dashboard from './components/dashboard/index';
import Trip from './components/trip/index';
import Footer from './components/common/footer'

class App extends Component {
  render() {
    return (
      <Router>
            <div>              
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/trip" component={Trip} />
              <Footer/>
            </div>

          
      </Router>





    );
  }
}

export default App;
