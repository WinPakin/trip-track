import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNetPayment } from '../../actions/tripActions';

class netPayment extends Component {
    constructor(props){
        super(props);
        this.handleRefresh = this.handleRefresh.bind(this);

    }
    componentDidMount(){
        const tripItem = {
            tripname: this.props.tripName
        }
        this.props.getNetPayment(tripItem);
    }

    handleRefresh(event){
        event.preventDefault();
        let tripItem = {
            tripname: this.props.tripName
        }
        this.props.getNetPayment(tripItem);
        
        }


  render() {
    // const netLst = [{personName:"Mark", yourExpense:450, yourDebt: 300, netPayment: 150},
    // {personName:"Jim", yourExpense:200, yourDebt: 400, netPayment: -200}];
    const netLst = this.props.netPaymentLst;
    const NetLst = netLst.map( net => 
        <tr key={JSON.stringify(net)}>
            <td>{net.personName}</td>
            <td>{net.yourExpense}</td>
            <td>{net.yourDebt}</td>
            <td>{net.netPayment}</td>
        </tr>);
    let MainComp;
    const Spinner = (<div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>);

    MainComp = (<tbody>{NetLst}</tbody>);

    return (
            <div>
                <div className="d-inline">
                    <h1 className="border-bottom my-4" id="netPayment">Net Payment</h1>
                    <button className="btn btn-info mx-4" onClick={this.handleRefresh} >Refresh</button>
                </div>
                <table className="table table-striped my-2">
                    <thead>
                        <tr>
                        <th scope="col">Person Name</th>
                        <th scope="col">Your Expense</th>
                        <th scope="col">Your Debt</th>
                        <th scope="col">Net Payment</th>
                        </tr>
                    </thead>
                        {!this.props.netPaymentLstLoading && MainComp}
                </table>
                {this.props.netPaymentLstLoading && Spinner}
            </div>
    )
  }
}






netPayment.propTypes = {
    getNetPayment: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    tripName: state.trip.tripName,
    netPaymentLst: state.trip.netPaymentLst,
    tripMembers: state.trip.tripMembers,
    netPaymentLstLoading: state.trip.netPaymentLstLoading
    
  });
  
  export default connect(mapStateToProps, { getNetPayment })(withRouter(netPayment));