import React, { Component } from 'react'
import AddTrip from "./addTrip";
import JoinTrip from "./joinTrip";
import TripList from "./tripList";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import {Link, Redirect} from "react-router-dom";



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

    handleLogout(event) {
      event.preventDefault();
      this.props.logoutUser();
    }

  render() {
    if(this.props.tripName){
      return (<Redirect to='/trip'/>);
    }


    return (
  <div>
      {/* Nav Bar */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
              <div className="container">
                <Link className="navbar-brand"  to="/">Trip Track</Link>
              
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <a className="nav-link" onClick={this.handleLogout}>Log Out</a>
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
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tripName: state.trip.tripName
});


export default connect(mapStateToProps, { logoutUser })(withRouter(Dashboard));
