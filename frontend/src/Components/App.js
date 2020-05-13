import React from "react";
import Dashboard from "./Run/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Run Tracker
          </a>
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
              <a className="nav-item nav-link active" href="/">
                Dashboard <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href="/">
                Add Run
              </a>
              <a className="nav-item nav-link" href="/">
                All Runs
              </a>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default App;
