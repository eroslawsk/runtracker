import React from "react";
import axios from "axios";
import TotalMileage from "./TotalMileage";
import MonthlyMileage from "./MonthlyMileage";
import MonthlyGoal from "./MonthlyGoal";
import CreateRunForm from "./CreateRunForm";

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg">
            <TotalMileage data={this.state.data} />
          </div>
          <div className="col-lg">
            <MonthlyMileage data={this.state.data} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <MonthlyGoal data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
