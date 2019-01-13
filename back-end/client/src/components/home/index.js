import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { registerUser, loginUser, logoutUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

 class Home extends Component {
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

        componentDidMount() {
            if (this.props.auth.isAuthenticated) {
              this.props.history.push('/dashboard');
            }
          }

        componentDidUpdate() {
            if (this.props.auth.isAuthenticated) {
              this.props.history.push('/dashboard');
            }
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
            // alert('Register was submitted: ' + JSON.stringify(this.state));
            event.preventDefault();
            const newUser = {
                username: this.state.username,
                password: this.state.password1,
                password2: this.state.password2
              };
              this.props.registerUser(newUser, this.props.history);
          }
          
          handleSubmitLogin(event) {
            event.preventDefault();
            const newUser = {
                username: this.state.username,
                password: this.state.password1,
                password2: this.state.password2
              };
              this.props.loginUser(newUser);
          }

          handleLogout(event) {
            event.preventDefault();
            this.props.logoutUser();
          }




  render() {
    const { errors } = this.props;
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



      {/* Register */}
        
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Organize Your Trip Expenses</h1>
                <p className="lead text-center">Register or Login</p>
                <form noValidate>
                    {/* Username */}
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Username" name="name" value={this.state.username} onChange={this.handleChangeUsername} required />
                    { errors.username && <div className="invalid-feedback d-block">{errors.username}</div>}
                    </div>
                    {/* Password */}
                    <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password1} onChange={this.handleChangePassword1}/>
                    { errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                    </div>
                    {/* Password2 */}
                    <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.handleChangePassword2}/>
                    { errors.password2 && <div className="invalid-feedback d-block">{errors.password2}</div>}
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

Home.propTypes = {
    registerUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { registerUser, loginUser, logoutUser })(withRouter(Home));















