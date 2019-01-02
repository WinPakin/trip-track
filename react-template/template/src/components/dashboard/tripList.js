import React, { Component } from 'react'

export default class tripList extends Component {
        constructor(props) {
                super(props);
                this.state = {tripList: [
                        {name:"Brazil_May_2019:AZ&^65BJ", desc:"Spring break trip to Sao Paulo with friends."},
                        {name:"Brazil_May_2019:AZ&^65BJ", desc:"Spring break trip to Sao Paulo with friends."},
                        {name:"Brazil_May_2019:AZ&^65BJ", desc:"Spring break trip to Sao Paulo with friends."}
        ]};
        }

  render() {
    const TripInfo = this.state.tripList;
    const infoItems = TripInfo.map(x =>
        <div class="col-sm-4 py-1">
                <div class="card">
                        <div class="card-body">
                        <h5 class="card-title">{x.name}</h5>
                        <p class="card-text">{x.desc}</p>
                        <a href="#" class="btn btn-info">Explore</a>
                        </div>
                </div>
        </div>
    );

    return (
        <div>
        <h1 class="border-bottom">Your Trips</h1>
        <div class="row py-2">
            {infoItems}
        </div>
    </div>
    )
  }
}









