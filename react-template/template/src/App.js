import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
            <h1>Hello World?
            </h1>
            <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
      </div>

    );
  }
}

export default App;
