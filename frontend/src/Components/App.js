import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./Run/Dashboard";
import CreateRunForm from "./Run/CreateRunForm";
import ShowAllRuns from "./Run/ShowAllRuns";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Run Tracker
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link active">
                  Dashboard <span className="sr-only">(current)</span>
                </Link>
                <Link to="/AddRun" className="nav-item nav-link">
                  Add Run
                </Link>
                <Link to="/AllRuns" className="nav-item nav-link">
                  All Runs
                </Link>
              </div>
            </div>
          </nav>
          <Route path="/" exact component={Dashboard} />
          <Route path="/AddRun" exact component={CreateRunForm} />
          <Route path="/AllRuns" exact component={ShowAllRuns} />
        </Router>
      </div>
    );
  }
}

export default App;
