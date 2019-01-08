import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnalytics } from '../../actions/tripActions';

class analytics extends Component {
  constructor(props){
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  componentDidMount(){
    const tripItem = {
      tripname: this.props.tripName
    };
    this.props.getAnalytics(tripItem);
  }
  handleRefresh(event){
    event.preventDefault();
    let tripItem = {
        tripname: this.props.tripName
    }
    this.props.getAnalytics(tripItem);
    
    }

  render() {

  let MainComp;
  const Spinner = (<div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>);
  if(this.props.analyticsLstLoading){
      MainComp = Spinner;
  }else{
        let dataByType;
        if(this.props.analyticsLst == null){
          dataByType = [0,0,0,0,0];
        }else{
          dataByType = [ this.props.analyticsLst.transport,
            this.props.analyticsLst.lodging,
            this.props.analyticsLst.food,
            this.props.analyticsLst.tours,
            this.props.analyticsLst.others
          ];
        }



      const data = {
      labels: ["Transport", "Lodging", "Food", "Tours", "Others"],
      datasets: [{
      label: 'Expense Categories',
      data: dataByType,
      backgroundColor: [
      'rgb(255, 99, 132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
      'rgba(255,99,132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
      ],
      borderWidth: 1
      }]
      };
      MainComp = <Pie data={data} />;
  }

    return (
      <div>
        <h1 className="border-bottom my-2" id="analytics">Analytics</h1>
        <p>Your chart will not display unless you have expenses.</p>
        <button className="btn btn-info mx-4" onClick={this.handleRefresh} >Refresh</button>  
            {MainComp}
      </div>
    )
  }
}

analytics.propTypes = {
  getAnalytics: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tripName: state.trip.tripName,
  analyticsLst: state.trip.analyticsLst,
  analyticsLstLoading: state.trip.analyticsLstLoading
  
});

export default connect(mapStateToProps, { getAnalytics })(withRouter(analytics));