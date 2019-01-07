import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTripName } from '../../actions/tripActions';

class explore extends Component {
    constructor(props) {
        super(props);
        this.handleExplore = this.handleExplore.bind(this);
    }

    handleExplore(){
        this.props.setTripName(this.props.tripID);
    }

    render() {
        return (
            <div className="d-inline">
                <button className="btn btn-info" onClick={this.handleExplore}>Explore </button>
            </div>
        )
    }
}

explore.propTypes = {
    tripID: PropTypes.string.isRequired,
    setTripName: PropTypes.func.isRequired
}

export default connect(null, { setTripName })(withRouter(explore));

