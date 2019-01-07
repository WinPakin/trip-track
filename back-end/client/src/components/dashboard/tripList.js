import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { listTripAction } from '../../actions/boardActions';
import DeleteTrip from './deleteTrip';
import ExploreTrip from './explore';

class tripList extends Component {

        componentDidMount() {
                this.props.listTripAction();
              }
        
  render() {
    const TripInfo = this.props.trip_list;
    const infoItems = TripInfo.map(x =>
        <div className="col-sm-4 py-1" key={JSON.stringify(x)}>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">{x}</h5>
                                <ExploreTrip tripID={x} />
                        <div className="d-inline">
                                <DeleteTrip tripID={x}/>
                        </div>  
                        </div>
                </div>
        </div>
    );
    const TripListComponent = (<div className="row py-2">
                                {infoItems}
                                </div>);
    const Spinner = (<div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                     </div>);   
    var Lst;           
    if(this.props.loading){
        Lst = Spinner;
    }else{
        Lst = TripListComponent; 
    }                           

    return (
        <div>
        <h1 className="border-bottom">Your Trips</h1>
                {Lst}
    </div>
    )
  }
}

tripList.propTypes = {
        listTripAction: PropTypes.func.isRequired
      };
      
      const mapStateToProps = state => ({
        trip_list: state.board.trip_list,
        loading: state.board.loading
      });
      
export default connect(mapStateToProps, { listTripAction })(withRouter(tripList));








