import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTripDesc } from '../../actions/tripActions';

class Info extends Component {

  componentDidMount() {
    const tripName = { tripname: this.props.tripName};
    this.props.getTripDesc(tripName);
  }


  render() {
    var Content;

    if(this.props.tripDescLoading){
      Content = (<div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                </div>);
    }else{
      Content = <p>{this.props.tripDesc}</p>
    }

    return (
      <div>
            <h1 className="border-bottom my-2" id="description">Description:</h1>
            {Content} 
      </div>
    )
  }
}

Info.propTypes = {
  getTripDesc: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tripName: state.trip.tripName,
  tripDesc: state.trip.tripDesc,
  tripDescLoading: state.trip.tripDescLoading
});

export default connect(mapStateToProps, { getTripDesc})(withRouter(Info));