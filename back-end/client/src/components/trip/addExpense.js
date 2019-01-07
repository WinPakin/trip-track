import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExpenseAction  } from '../../actions/tripActions';

//util functions
const createChargedPersons  = (membersMap) => {
    let keyLst = Object.keys(membersMap);
    let chargedPersons = keyLst.filter( key => membersMap[key]);
    return chargedPersons.join("&");
    
}





class addExpense extends Component {

    constructor(props) {
        super(props);
        // loop add key/people to state.
        // Get names from props
        this.state = {expenseName: '',
                      chargeAmount: '',
                      chargeType: 'perPerson',
                      membersMap: null,
                      category: 'transport',
        };
        this.handleChangeExpenseName = this.handleChangeExpenseName.bind(this);
        this.handleChangeChargeAmount = this.handleChangeChargeAmount.bind(this);
        this.handleChangeChargeType = this.handleChangeChargeType.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleChangeChargedPerson = this.handleChangeChargedPerson.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChangeExpenseName(event) {
    this.setState({expenseName: event.target.value});
    }

handleChangeChargeAmount(event) {
    this.setState({chargeAmount: event.target.value});
    }

handleChangeChargeType(event){
    this.setState({chargeType: event.target.value});
}

handleChangeCategory(event){
    this.setState({category: event.target.value});
}

handleChangeChargedPerson(event){
    var keyName = event.target.value;

    this.setState( (prevState, prop) => {
        let prevMembersMap = prevState.membersMap;
        prevMembersMap[keyName] = !prevMembersMap[keyName];
        return { membersMap:prevMembersMap };
    });
}
//      {
//      tripname: "china:b3y4ufgckd",
//      chargeAmount: 50,
//      chargeType: "perPerson",
//      chargedPersons: emily&joe, # & is the divider
//      category: "food",
//      expenseName: "Ramen"
//      }
handleSubmit(event) {
    const expenseItem = {
        tripname: this.props.tripName,
        chargeAmount: this.state.chargeAmount,
        chargeType: this.state.chargeType,
        chargedPersons: createChargedPersons(this.state.membersMap),
        category: this.state.category,
        expenseName: this.state.expenseName



    };
    this.props.addExpenseAction(expenseItem);
    event.preventDefault();
    }

    componentDidMount(){
        const membersMap = {};
        this.props.tripMembers.map( member => {membersMap[member] = false});
        this.setState({membersMap:membersMap});
    }



  render() {
    const { errors } = this.props;


    const MemberLst = this.props.tripMembers.map( personName => 
        <div className="form-check" key={personName}>
        <input className="form-check-input" type="checkbox" id={personName} value={personName}
        onChange={this.handleChangeChargedPerson}
        />
        <label className="form-check-label" htmlFor={personName}>
        {personName}
        </label>
    </div>
        );

    return (
        <div>
        <h1 className="border-bottom" id="addExpense">Add Expense</h1>
        <form>
                {/* Expense Name */}
                <div className="form-group row my-2">
                    <label htmlFor="expenseName" className="col-sm-2 col-form-label">Expense Name</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="ExpenseName" placeholder="Ticket to Sao Paulo" value={this.state.expenseName} onChange={this.handleChangeExpenseName}/>
                    { errors.expenseName && <div className="invalid-feedback d-block">{errors.expenseName}</div>}
                    </div>

                </div>
        </form>
        <form>
                {/* Expense Amount */}
                <div className="form-group row">
                    <label htmlFor="expenseAmount" className="col-sm-2 col-form-label">Expense Amount</label>
                    <div className="col-sm-10">
                    <input type="number" className="form-control" id="expenseAmount" placeholder="100" value={this.state.chargeAmount} onChange={this.handleChangeChargeAmount}/>
                    { errors.chargeAmount && <div className="invalid-feedback d-block">{errors.chargeAmount}</div>}
                    </div>
                </div>
        </form>
        <form>
                {/* Charge Type */}
                <fieldset className="form-group">
                    <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Charge Type</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="perPerson" value="perPerson" checked={this.state.chargeType === "perPerson"} onChange={this.handleChangeChargeType} />
                        <label className="form-check-label" htmlFor="perPerson">
                            Per Person
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="gridRadios" id="total" value="total" checked={this.state.chargeType === "total"} onChange={this.handleChangeChargeType}/>
                        <label className="form-check-label" htmlFor="total">
                            Total
                        </label>
                        </div>
                    </div>
                    </div>
                </fieldset>
        </form>
        <form>
                {/* People Involved */}
                <div className="form-group row">
                    <div className="col-sm-2">People Involved</div>
                    <div className="col-sm-10">
                        {MemberLst}
                        { errors.chargedPersons && <div className="invalid-feedback d-block">{errors.chargedPersons}</div>}
                    </div>
                   
                </div>
        </form>
        <form>
                {/* Expense Category  */}
                <fieldset className="form-group">
                    <div className="row">
                        <legend className="col-form-label col-sm-2 pt-0">Expense Category</legend>
                        <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="transport" value="transport" checked={this.state.category === "transport"} onChange={this.handleChangeCategory}/>
                            <label className="form-check-label" htmlFor="transport">
                            Transportation
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="lodging" value="lodging" checked={this.state.category === "lodging"} onChange={this.handleChangeCategory} />
                            <label className="form-check-label" htmlFor="lodging">
                            Lodging
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="food" value="food" checked={this.state.category === "food"} onChange={this.handleChangeCategory}/>
                            <label className="form-check-label" htmlFor="food">
                                Food
                            </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="tours" value="tours" checked={this.state.category === "tours"} onChange={this.handleChangeCategory}/>
                                <label className="form-check-label" htmlFor="tours">
                                Tours
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="others" value="others" checked={this.state.category === "others"} onChange={this.handleChangeCategory}/>
                                <label className="form-check-label" htmlFor="others">
                                    Others
                                </label>
                            </div>
                        </div>
                    </div>
                    </fieldset>
                </form>
                    {/* Submit */}
                <div className="form-group row">
                    <div className="col-sm-10">
                    <button className="btn btn-info" onClick={this.handleSubmit}>Create Expense</button>
                    </div>
                </div>
    </div>
    )
  }
}

addExpense.propTypes = {
    addExpenseAction: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    tripName: state.trip.tripName,
    tripMembers: state.trip.tripMembers,
    errors: state.errors
    
  });
  
  export default connect(mapStateToProps, { addExpenseAction })(withRouter(addExpense));
