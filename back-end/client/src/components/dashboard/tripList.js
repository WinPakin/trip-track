import React, { Component } from 'react'

export default class tripList extends Component {
        constructor(props) {
                super(props);
                this.state = {tripList: [
                        {name:"Brazil_May_2019:AZ&^65BJ", desc:"Spring break trip to Sao Paulo with friends."},
                        {name:"China_May_2019:AZ&^65BJ", desc:"Fall break trip to Sao Paulo with friends."},
                        {name:"Argen_May_2019:AZ&^65BJ", desc:"Winter break trip to Sao Paulo with friends."}
        ]};
        }

  render() {
    const TripInfo = this.state.tripList;
    const infoItems = TripInfo.map(x =>
        <div className="col-sm-4 py-1" key={JSON.stringify(x)}>
                <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">{x.name}</h5>
                        <p className="card-text">{x.desc}</p>
                        <a href="#" className="btn btn-info">Explore</a>
                        </div>
                </div>
        </div>
    );

    return (
        <div>
        <h1 className="border-bottom">Your Trips</h1>
        <div className="row py-2">
            {infoItems}
        </div>
    </div>
    )
  }
}









