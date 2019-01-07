import React, { Component } from 'react';
import './trip.css';
import AddExpense from './addExpense';
import YourExpenses from './yourExpenses';
import YourDebt from './yourDebt';
import NetPayment from './netPayment';
import Analytics from './analytics';
import Info from './info';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { logoutUser } from '../../actions/authActions';
import { clearTripName } from '../../actions/tripActions';


class TripIndex extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleToDashBoard = this.handleToDashBoard.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logoutUser();
  }

  handleToDashBoard(event){
    event.preventDefault();
    this.props.clearTripName();
  }

  render() {
    if(!this.props.tripName){
      return (<Redirect to='/dashboard'/>);
    }

    return (
      <div>
      {/* Nav Bar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
             <div className="container">
                 <a className="navbar-brand" href="home.html">Trip Track</a>
                 <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.handleToDashBoard}>DashBoard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.handleLogout}>Log Out</a>
                    </li>
                 </ul>
             </div>
       </nav>
      
      {/* Side Nav */}
      <div className="sidenav mt-5">
                 <a href="#information">Information</a>
                 <a href="#addExpense">Add Expense</a>
                 <a href="#yourPayments">Your Payments</a>
                 <a href="#yourDebt">Your Debt</a>
                 <a href="#netPayments">Net Payments</a>
                 <a href="#analytics">Analytics</a>
                 <a href="#delete">Delete</a>
      </div>
      <div className="main">
         <div className="container mx-4">
           {/* Information */}
           <Info/>
           {/* Add Expense */}
           <AddExpense/>
           {/* Your Expenses */}
           <YourExpenses/>
           {/* Your Debt */}
           <YourDebt/>
           {/* Net Payments */}
           <NetPayment/>
           {/* Analytics */}
           <Analytics/>
         </div>
      </div>
     </div>
    )
  }
}

TripIndex.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearTripName: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  tripName: state.trip.tripName
});

export default connect(mapStateToProps, { logoutUser, clearTripName })(withRouter(TripIndex));