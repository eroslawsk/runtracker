import React from "react";

class MonthlyMileage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "January",
      year: "2020",
    };

    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
  }

  handleChangeMonth(event) {
    this.setState({ month: event.target.value });
  }

  handleChangeYear(event) {
    this.setState({ year: event.target.value });
  }

  render() {
    const data = this.props.data;

    let monthValue = this.state.month;

    let yearValue = this.state.year;

    let monthlyData = data.filter(function (item) {
      let currentDate = item.day.split(" ");
      return currentDate[0] === monthValue && currentDate[2] === yearValue;
    });

    let totalMileage = monthlyData.reduce(
      (sum, current) => sum + current.distance,
      0
    );
    return (
      <div>
        <h1>Monthly Mileage</h1>
        <div className="form-group">
          <label htmlFor="monthSelect">Select Month:</label>
          <select
            className="form-control"
            id="monthSelect"
            value={this.state.month}
            onChange={this.handleChangeMonth}
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="yearSelect">Select Month:</label>
          <select
            className="form-control"
            id="yearSelect"
            value={this.state.year}
            onChange={this.handleChangeYear}
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <p className="text-center">{totalMileage.toFixed(2)} miles</p>
      </div>
    );
  }
}

export default MonthlyMileage;
