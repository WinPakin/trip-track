import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/home/index';
import Dashboard from './components/dashboard/index';
import Trip from './components/trip/index';
import NotFound from './components/not_found/not_found';
import About from './components/about/about';
import Footer from './components/common/footer';
import PrivateRoute from './components/common/privateRoutes';
import store from './store';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';



// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/';
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <div>     
            <Switch>         
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/trip" component={Trip} />
                <Route component={NotFound} />
              </Switch>
              <Footer/>
            </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
