import React, { Component } from 'react'

export default class addTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {tripName: '', tripDesc: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({tripName: event.target.value});
  }
  
  handleChangeDesc(event) {
    this.setState({tripDesc: event.target.value});
  }

  handleSubmit(event) {
    alert('Trip created: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div class="col-sm card mx-3 py-3">
      <h1 class="border-bottom">Create Trip</h1>
      <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                  <label for="tripName">Trip Name (No spaces)</label>
                  <input type="text" class="form-control" id="tripName" placeholder="Brazil_May_2019" onChange={this.handleChangeName} value={this.state.tripName}/>
                  <small class="form-text text-muted">Make sure your name is descriptive</small>
              </div>
              <div class="form-group">
                      <label for="tripDesc">Description</label>
                      <input type="text" class="form-control" id="tripDesc" placeholder="Spring break trip to Sao Paulo with friends." onChange={this.handleChangeDesc} value={this.state.tripDesc}/>
                      <small class="form-text text-muted">Describe Important Information</small>
              </div>
              <button type="submit" class="btn btn-info">Create</button>
      </form>
      </div>
    )
  }
}









// import React from 'react'

// export default function addTrip() {
//   return (
//     <div class="col-sm card mx-3 py-3">
//     <h1 class="border-bottom">Create Trip</h1>
//     <form>
//             <div class="form-group">
//                 <label for="tripName">Trip Name (No spaces)</label>
//                 <input type="text" class="form-control" id="tripName" placeholder="Brazil_May_2019"></input>
//                 <small class="form-text text-muted">Make sure your name is descriptive</small>
//             </div>
//             <div class="form-group">
//                     <label for="tripDesc">Description</label>
//                     <input type="text" class="form-control" id="tripDesc" placeholder="Spring break trip to Sao Paulo with friends."></input>
//                     <small class="form-text text-muted">Describe Important Information</small>
//                 </div>
//             <button type="submit" class="btn btn-info">Create</button>
//     </form>
//     </div>
//   )
// }
