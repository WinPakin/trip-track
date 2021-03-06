import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './trip.css';
import AddExpense from './addExpense';
import YourExpenses from './yourExpenses';
import YourDebt from './yourDebt';
import NetPayment from './netPayment';
import Analytics from './analytics';
import Delete from './del';

export default function index() {
  return (
    <div>
     {/* Nav Bar */}
     <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
            <div className="container">
                <a className="navbar-brand" href="home.html">Trip Track</a>
                <a className="navbar-brand" href="home.html">ID:Brazil_May_2019:AZ&^65BJ</a>
                <ul className="navbar-nav ml-auto">
                
                <li className="nav-item">
                    <a className="nav-link" href="about.html">Log Out</a>
                </li>
                </ul>
            </div>
      </nav>
     
     {/* Side Nav */}
     <div className="sidenav mt-5">
                <a href="#addExpense">Add Expense</a>
                <a href="#yourPayments">Your Payments</a>
                <a href="#yourDebt">Your Debt</a>
                <a href="#netPayments">Net Payments</a>
                <a href="#analytics">Analytics</a>
                <a href="#delete">Delete</a>
     </div>
     <div className="main">
        <div className="container mx-4">
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
          {/* Delete */}
          <Delete/>
        </div>
     </div>
    </div>
  )
}
