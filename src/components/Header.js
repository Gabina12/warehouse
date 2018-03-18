import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../../src/logo.svg";
import { UnitsConteiner } from "./UnitsContainer";
import { Dashboard } from "./Dashboard";

export class Header extends Component {
  render() {
    return (
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
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    მთავარი <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                
                  <Link to="/units" className="nav-link">
                    პროდუქცია
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
      
    );
  }
}
