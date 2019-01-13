import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { joinTrip as joinTripAction } from '../../actions/boardActions';

class joinTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {tripID: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({tripID: event.target.value});
  }

  handleSubmit(event) {
    const tripItem = {
      tripname: this.state.tripID
    }
    this.props.joinTripAction(tripItem);
    event.preventDefault();
  }


  render() {
    const { errors } = this.props;
    return (
      <div className="col-sm card mx-3 py-3">
      <h1 className="border-bottom">Join Trip</h1>
      <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <label htmlFor="tripId">Trip ID</label>
                  <input type="text" className="form-control" id="tripId" placeholder="Brazil_May_2019:AZ&^65BJ" value={this.state.tripID} onChange={this.handleChange}/>
                  <small className="form-text text-muted">Get it from a friend who already created the trip. </small>
                  { errors.tripID && <div className="invalid-feedback d-block">{errors.tripID}</div>}
              </div>
              <button type="submit" className="btn btn-info">Join</button>
      </form>
    </div>
    )
  }
}

joinTrip.propTypes = {
  joinTripAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { joinTripAction })(withRouter(joinTrip));
