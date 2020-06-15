import React from "react";

//Create array of month names
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class MonthlyGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: 100,
    };
  }
  render() {
    //Get data from database
    const data = this.props.data;
    // Get current month and year
    let d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear().toString();

    //Filter data from database that matches current month
    let monthlyData = data.filter(function (item) {
      let getDate = item.day.split(" ");
      return months[month] === getDate[0] && year === getDate[2];
    });

    //Add total mileage for current month
    let totalMileage = monthlyData.reduce(
      (sum, current) => sum + current.distance,
      0
    );

    //Convert to percentage
    let currentProgress = (totalMileage / this.state.goal) * 100;

    return (
      <div>
        <h2>Monthly Progress</h2>
        <h3>
          {months[month]} {year}
        </h3>
        <h4>{totalMileage.toFixed(2)} miles</h4>
        <h4>Monthly Goal: {this.state.goal} miles</h4>
        <div className="progress" style={{ width: "600px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${currentProgress}%` }}
            aria-valuenow={currentProgress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
}

export default MonthlyGoal;
