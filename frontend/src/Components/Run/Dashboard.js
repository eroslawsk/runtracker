import React from "react";
import axios from "axios";
import TotalMileage from "./TotalMileage";
import MonthlyMileage from "./MonthlyMileage";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost:5000/run";

    axios
      .get(url)
      .then((Response) => {
        this.setState({
          data: Response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm">
          <TotalMileage data={this.state.data} />
        </div>
        <div className="col-sm">
          <MonthlyMileage data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
