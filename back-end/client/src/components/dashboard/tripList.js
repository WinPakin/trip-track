import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { listTripAction } from '../../actions/boardActions';
import DeleteTrip from './deleteTrip';

class tripList extends Component {
        constructor(props) {
                super(props);
                this.state = {tripList: [],
                              loading: false
                };
        }

        componentWillReceiveProps(nextProps) {        
                this.setState({ tripList: nextProps.trip_list,
                                loading: nextProps.loading                          
                });
        }

        componentDidMount() {
                this.props.listTripAction();
              }

  render() {
    const TripInfo = this.state.tripList;
    const infoItems = TripInfo.map(x =>
        <div className="col-sm-4 py-1" key={JSON.stringify(x)}>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">{x}</h5>
                        <div className="d-inline">
                                <a href="#" className="btn btn-info">Explore</a>
                        </div>
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
    const Spinner = (<div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                     </div>);   
    var Lst;           
    if(this.state.loading){
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








