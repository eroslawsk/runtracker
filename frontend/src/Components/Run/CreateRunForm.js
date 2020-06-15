import React from "react";
import axios from "axios";

class CreateRunForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "",
      distance: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.onChangeHours = this.onChangeHours.bind(this);
    this.onChangeMinutes = this.onChangeMinutes.bind(this);
    this.onChangeSeconds = this.onChangeSeconds.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeDay(e) {
    this.setState({
      day: e.target.value,
    });
  }

  onChangeDistance(e) {
    this.setState({
      distance: e.target.value,
    });
  }
  onChangeHours(e) {
    this.setState({
      hours: e.target.value,
    });
  }

  onChangeMinutes(e) {
    this.setState({
      minutes: e.target.value,
    });
  }
  onChangeSeconds(e) {
    this.setState({
      seconds: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newRun = {
      day: this.state.day,
      distance: this.state.distance,
      hours: this.state.hours,
      minutes: this.state.minutes,
      seconds: this.state.seconds,
    };

    axios
      .post("http://localhost:5000/run", newRun)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="day">Date of Run:</label>
            <input
              type="text"
              className="form-control"
              id="day"
              aria-describedby="day"
              value={this.state.day}
              onChange={this.onChangeDay}
            />
          </div>
          <div className="form-group">
            <label htmlFor="distance">Distance:</label>
            <input
              type="text"
              className="form-control"
              id="distance"
              value={this.state.distance}
              onChange={this.onChangeDistance}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hours">Hours:</label>
            <input
              type="text"
              className="form-control"
              id="hours"
              value={this.state.hours}
              onChange={this.onChangeHours}
            />
          </div>
          <div className="form-group">
            <label htmlFor="minutes">Minutes:</label>
            <input
              type="text"
              className="form-control"
              id="minutes"
              value={this.state.minutes}
              onChange={this.onChangeMinutes}
            />
          </div>
          <div className="form-group">
            <label htmlFor="seconds">Seconds:</label>
            <input
              type="text"
              className="form-control"
              id="seconds"
              value={this.state.seconds}
              onChange={this.onChangeSeconds}
            />
          </div>
          <button type="submit" value="Create Run" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateRunForm;
