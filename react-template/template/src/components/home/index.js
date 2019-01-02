import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '',
                      password1: '',
                      password2: ''
        };
        

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword1 = this.handleChangePassword1.bind(this);
        this.handleChangePassword2 = this.handleChangePassword2.bind(this);
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        }

        handleChangeUsername(event) {
            this.setState({username: event.target.value});
          }

        handleChangePassword1(event) {
            this.setState({password1: event.target.value});
          }

        handleChangePassword2(event) {
            this.setState({password2: event.target.value});
          }

        
          handleSubmitRegister(event) {
            alert('Register was submitted: ' + JSON.stringify(this.state));
            event.preventDefault();
          }
          
          handleSubmitLogin(event) {
            alert('Login was submitted: ' + JSON.stringify(this.state));
            event.preventDefault();
          }


  render() {
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

      {/* Register */}
        
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                <h1 class="display-4 text-center">Organize Your Trip Expenses</h1>
                <p class="lead text-center">Register or Login</p>
                <form>
                    <div class="form-group">
                    <input type="text" class="form-control form-control-lg" placeholder="Username" name="name" value={this.state.username} onChange={this.handleChangeUsername} required />
                    </div>
                    <div class="form-group">
                    <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password1} onChange={this.handleChangePassword1}/>
                    </div>
                    <div class="form-group">
                    <input type="password" class="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.handleChangePassword2}/>
                    </div>
                    <button class="btn btn-info btn-block mt-4" onClick={this.handleSubmitLogin} >Log In</button>
                    <button class="btn btn-info btn-block mt-4" onClick={this.handleSubmitRegister} >Register</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}















