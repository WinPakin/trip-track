import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getYourDebt  } from '../../actions/tripActions';

class yourDebt extends Component {
    constructor(props) {
        super(props);
        this.state = {otherEntity:"everyone"};
        this.handleChangeotherEntity = this.handleChangeotherEntity.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
    }

handleChangeotherEntity(event) {
    this.setState({otherEntity: event.target.value}, () => {
        console.log(this.state.otherEntity);
    });
}

componentDidMount(){
    let tripItem = {
        otherEntity: this.state.otherEntity,
        tripname: this.props.tripName
    }
    this.props.getYourDebt(tripItem);
}

handleRefresh(event){
event.preventDefault();
let tripItem = {
    otherEntity: this.state.otherEntity,
    tripname: this.props.tripName
}
this.props.getYourDebt(tripItem);

}

  render() {
    const memberLst = this.props.tripMembers;
    const memberOption = memberLst.map(name => <option value={name} key={name}>{name}</option>);
    const debtLst = this.props.yourDebtLst;
    const DebtLst = debtLst.map( ex =>                     
        <tr key={JSON.stringify(ex)}>
            <td>{ex.personName}</td>
            <td>{ex.amount}</td>
            <td>{ex.expenseName}</td>
        </tr>);

    let MainComp;
    const Spinner = (<div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>);
    const DebtTable = (<table className="table table-striped my-2">
                                <thead>
                                    <tr>
                                    <th scope="col">Person Name</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Expense Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DebtLst}
                                </tbody>
                            </table>);
    if(this.props.yourDebtLstLoading){
        MainComp = Spinner;
    }else{
        if(this.props.yourDebtLst.length == 0){
            MainComp = <p><strong>Your debt list for this entity is empty.</strong></p>
        }else{
            MainComp = DebtTable;
        }
        
    }

    return (
        <div>
        <h1 className="border-bottom my-4" id="yourDebt">Your Debt</h1>
        <form className="form-inline my-2">
                <label className=" mr-2" htmlFor="expenseFor">Your Debt to</label>
                <select className="custom-select" id="expenseFor" value={this.state.otherEntity} onChange={this.handleChangeotherEntity}>
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

yourDebt.propTypes = {
    getYourDebt: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    tripName: state.trip.tripName,
    yourDebtLst: state.trip.yourDebtLst,
    tripMembers: state.trip.tripMembers,
    yourDebtLstLoading: state.trip.yourDebtLstLoading
    
  });
  
  export default connect(mapStateToProps, { getYourDebt })(withRouter(yourDebt));
