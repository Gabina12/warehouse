import React, { Component } from "react";
import UnitItem from "./../Presentation/UnitItem";
import ProdSumm from "./../Presentation/ProdSumm";

export class UnitsConteiner extends Component {
  constructor(props) {
    super();
    this.state = {
      units: [],
      cnt: 0
    };
  }

  componentDidMount() {
    fetch("http://localhost:55801/api/Units")
      .then(result => {
        return result.json();
      })
      .then(data => {
        let units = data.map(unit => {
          return <UnitItem unit={unit} key={unit.id} />;
        });
        this.setState({ units: units });
        this.setState({ sum: units.length });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="tbc-box tbc-box-homepage two-part animated-item fb-row">
          <ProdSumm
            sum={this.state.units.length}
            title={"ერთეულები"}
            ccy={""}
            total={"სულ რაოდენობა"}
          />
          <div className="right-part">
            <ul className="homeList">{this.state.units}</ul>
          </div>
        </div>

        <div className="fab">
          <span className="fab-action-button">
          <a href="#"><i className="fab-action-button__icon fas fa-plus"></i></a>
          </span>
        </div>
      </div>
    );
  }
}
