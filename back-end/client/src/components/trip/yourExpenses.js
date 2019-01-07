import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getYourExpenses  } from '../../actions/tripActions';

class yourExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {otherEntity:"everyone"};
        this.handleChangeOtherEntity = this.handleChangeOtherEntity.bind(this);
    }

handleChangeOtherEntity(event) {
    this.setState({otherEntity: event.target.value}, () => {
        console.log(this.state.otherEntity);
    });
    }

    componentDidMount(){
        let tripItem = {
            otherEntity: this.state.otherEntity,
            tripname: this.props.tripName
        }
        this.props.getYourExpenses(tripItem);
    }

handleRefresh(){
    let tripItem = {
        otherEntity: this.state.otherEntity,
        tripname: this.props.tripName
    }
    this.props.getYourExpenses(tripItem);
}

  render() {
    // const memberLst = ["Doe", "Emily", "Lee"];
    const memberLst = this.props.tripMembers;
    const memberOption = memberLst.map(name => <option value={name} key={name}>{name}</option>);
    // const expenseLst = [{personName:"Mark", amount:70, expenseName:"NYC Bus"}, {personName:"Joe", amount:10, expenseName:"Ramen"}];
    const expenseLst = this.props.yourExpenseLst;
    const ExpenseLst = expenseLst.map( ex =>                     
        <tr key={JSON.stringify(ex)}>
            <td>{ex.personName}</td>
            <td>{ex.amount}</td>
            <td>{ex.expenseName}</td>
        </tr>);
    let MainComp;
    const Spinner = (<div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>);
    const ExpenseTable = (<table className="table table-striped my-2">
                                <thead>
                                    <tr>
                                    <th scope="col">Person Name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Expense Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ExpenseLst}
                                </tbody>
                            </table>);
    if(this.props.yourExpenseLstLoading){
        MainComp = Spinner;
    }else{
        MainComp = ExpenseTable;
    }




    return (
        <div>
        <h1 className="border-bottom my-4" id="yourPayments">Your Payments</h1>
        <form className="form-inline my-2">
            <label className="my-1 mr-2" htmlFor="expenseFor">Your Expense for</label>
            <select className="custom-select" id="expenseFor" value={this.state.otherEntity} onChange={this.handleChangeOtherEntity}>
                <option value="everyone"> everyone</option>
                {memberOption}
            </select>
            <button className="btn btn-info mx-4" onClick={this.handleRefresh} >Refresh</button>
        </form>
        {MainComp}
    </div>
    )
  }
}

yourExpenses.propTypes = {
    getYourExpenses: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    tripName: state.trip.tripName,
    yourExpenseLst: state.trip.yourExpenseLst,
    tripMembers: state.trip.tripMembers,
    yourExpenseLstLoading: state.trip.yourExpenseLstLoading
    
  });
  
  export default connect(mapStateToProps, { getYourExpenses })(withRouter(yourExpenses));
