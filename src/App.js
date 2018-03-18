import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { UnitsConteiner } from "./components/UnitsContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      active: "მთავარი"
    };
  }

  _handleClick(menuItem) {
    this.setState({ active: menuItem });
  }

  render() {
    const activeStyle = { color: "#ffffff" };
    return (
      <div>
        <Router>
          <div>
            <div className="container">
              <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-purple">
                <div className="container">
                  <a className="navbar-brand" href="#">
                    საწყობის მართვის მოდული
                  </a>
                  <button
                    className="navbar-toggler p-0 border-0"
                    type="button"
                    data-toggle="offcanvas"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>

                  <div
                    className="navbar-collapse offcanvas-collapse"
                    id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link
                          to="/dashboard"
                          className="nav-link"
                          onClick={this._handleClick.bind(this, "მთავარი")}
                          style={
                            this.state.active === "მთავარი" ? activeStyle : {}
                          }>
                          მთავარი
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          გაყიდვები
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          პარამეტრები
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
