import React, { Component } from 'react'

export default class yourDebt extends Component {
    constructor(props) {
        super(props);
        this.state = {otherEntity:"everyone"};
        this.handleChangeotherEntity = this.handleChangeotherEntity.bind(this);

    }

handleChangeotherEntity(event) {
    this.setState({otherEntity: event.target.value}, () => {
        console.log(this.state.otherEntity);
    });
}
  render() {
    const memberLst = ["Doe", "Emily", "Lee"];
    const memberOption = memberLst.map(name => <option value={name} key={name}>{name}</option>);
    const expenseLst = [{personName:"Mark", amount:70, expenseName:"NYC Bus"}, {personName:"Joe", amount:10, expenseName:"Ramen"}];
    const ExpenseLst = expenseLst.map( ex =>                     
        <tr key={JSON.stringify(ex)}>
            <td>{ex.personName}</td>
            <td>{ex.amount}</td>
            <td>{ex.expenseName}</td>
        </tr>);

    return (
        <div>
        <h1 className="border-bottom my-4" id="yourDebt">Your Debt</h1>
        <form className="form-inline my-2">
                <label className=" mr-2" htmlFor="expenseFor">Your Debt to</label>
                <select className="custom-select" id="expenseFor" value={this.state.otherEntity} onChange={this.handleChangeotherEntity}>
                    <option value="everyone"> everyone</option>
                    {memberOption}
                </select>
            </form>

            <table className="table table-striped my-2">
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
            </table>
    </div>
    )
  }
}


