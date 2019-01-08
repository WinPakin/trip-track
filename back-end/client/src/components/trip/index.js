import React, { Component } from 'react';
import './trip.css';
import AddExpense from './addExpense';
import YourExpenses from './yourExpenses';
import YourDebt from './yourDebt';
import NetPayment from './netPayment';
import Analytics from './analytics';
import Description from './description';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { logoutUser } from '../../actions/authActions';
import { clearTripName, getMembers } from '../../actions/tripActions';

// css style
var imgStyle = {
  maxWidth:500,
  maxHeight:500
}

class TripIndex extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleToDashBoard = this.handleToDashBoard.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.clearTripName();
    this.props.logoutUser();
  }

  handleToDashBoard(event){
    event.preventDefault();
    this.props.clearTripName();
  }

  componentDidMount(){
    const tripNameItem = {
      tripname: this.props.tripName
    }
    this.props.getMembers(tripNameItem);
  }



  render() {
    if(!this.props.tripName){
      return (<Redirect to='/dashboard'/>);
    }

    var MainComponent;
    const Spinner = (<div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
    </div>);
    const Info = (
      <div>
          <img style={imgStyle} src="./grass.jpg" alt="Responsive image"></img>
          <img style={imgStyle} src="./beach.jpg" alt="Responsive image"></img>
           {/* Description */}
           <Description/>
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
      </div>);
    
    if(this.props.tripMembersLoading){
      MainComponent = Spinner;
    }else{
      MainComponent = Info;
    }


    return (
      <div>
      {/* Nav Bar */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
             <div className="container">
                 <a className="navbar-brand" href="/trip">{this.props.tripName}</a>
                 <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.handleToDashBoard}>Dash Board</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.handleLogout}>Log Out</a>
                    </li>
                 </ul>
             </div>
       </nav>
      
      {/* Side Nav */}
      <div className="sidenav mt-5">
                 <a href="#description">Description</a>
                 <a href="#addExpense">Add Expense</a>
                 <a href="#yourPayments">Your Payments</a>
                 <a href="#yourDebt">Your Debt</a>
                 <a href="#netPayments">Net Payments</a>
                 <a href="#analytics">Analytics</a>
      </div>
      <div className="main">
         <div className="container mx-4">
            {MainComponent}
         </div>
      </div>
     </div>
    )
  }
}

TripIndex.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearTripName: PropTypes.func.isRequired,
  getMembers: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  tripName: state.trip.tripName,
  tripMembersLoading: state.trip.tripMembersLoading
});

export default connect(mapStateToProps, { logoutUser, clearTripName, getMembers })(withRouter(TripIndex));