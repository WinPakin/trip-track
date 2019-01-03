import axios from 'axios';
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
            // alert('Login was submitted: ' + JSON.stringify(this.state));
            axios.get('http://localhost:5000/api/users/test',this.state).then( res => {
                console.log(res);
            }).catch(err => {console.log(err)});
            
            
            event.preventDefault();


          }


  render() {
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

      {/* Register */}
        
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Organize Your Trip Expenses</h1>
                <p className="lead text-center">Register or Login</p>
                <form>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Username" name="name" value={this.state.username} onChange={this.handleChangeUsername} required />
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password1} onChange={this.handleChangePassword1}/>
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.handleChangePassword2}/>
                    </div>
                    <button className="btn btn-info btn-block mt-4" onClick={this.handleSubmitLogin} >Log In</button>
                    <button className="btn btn-info btn-block mt-4" onClick={this.handleSubmitRegister} >Register</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}















