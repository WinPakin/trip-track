import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTripAction } from '../../actions/boardActions';

class deleteTrip extends Component {
   constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        const deleteItem = {
            tripname: this.props.tripID
        };
        this.props.deleteTripAction(deleteItem);
    }

  render() {
      // creating Modal ID
      var regex = /:/gi;
      const ModalID = this.props.tripID.replace(regex,"Z");
      const ModalIDTag = "#" + ModalID;
    return (
        <div>
        {/* Delete */}
        {/* Delete: Button trigger modal  */}
        <button type="button" className="btn btn-danger" data-toggle="modal" data-target={ModalIDTag}>
            DELETE
        </button>
        {/* Delete: Modal */}
        <div className="modal fade" id={ModalID} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Delete Trip</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                Once you delete this trip, it will be gone forever!
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Back</button>
                <button type="button" className="btn btn-danger" onClick={this.handleDelete} data-dismiss="modal">CONFIRM DELETE</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
  }
}

deleteTrip.propTypes = {
    deleteTripAction: PropTypes.func.isRequired,
    tripID: PropTypes.string.isRequired,
  };
  
  
export default connect(null, { deleteTripAction })(withRouter(deleteTrip));