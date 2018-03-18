import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";

import { UnitsConteiner } from "./UnitsContainer";
import { ProductsContainer } from "./ProductsContainer";
import ListItem from "./../Presentation/ListItem";
import ProdSumm from "./../Presentation/ProdSumm";

export class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      sum: 0,
      active: 0
    };
  }

  _handleClick(menuItem) { 
    this.setState({ active: menuItem });
  }

  componentDidMount() {
    fetch("http://localhost:55800/api/Products")
      .then(result => {
        return result.json();
      })
      .then(data => {
        let products = data.map(prod => {
          return <ListItem prod={prod} key={prod.id} />;
        });
        this.setState({ products: products });
        var total = 0;
        for (var i = 0; i < products.length; i++) {
          total +=
            products[i].props.prod.priceGrow * products[i].props.prod.count;
        }
        this.setState({ sum: total });
      });
  }

  render() {
    const active = "nav-link active"
    return (
      <div>
        <Router>
          <div>
            <div className="nav-scroller bg-white box-shadow">
              <div className="container">
                <nav className="nav nav-underline">
                  <Link to="/dashboard/products" className={this.state.active == 0? active: 'nav-link'}
                  onClick={this._handleClick.bind(this, 0)}>
                    ბოლოს მიღებული
                    <span className="badge badge-pill bg-light align-text-bottom">
                      27
                    </span>
                  </Link>
                  <Link to="/dashboard/units" className={this.state.active == 1 ? active: 'nav-link'}
                  onClick={this._handleClick.bind(this, 1)}>
                    ერთეულები
                  </Link>
                  <a className="nav-link" href="#">
                    ერთეულები
                  </a>
                  <a className="nav-link" href="#">
                    კლიენტები
                  </a>
                  <a className="nav-link" href="#">
                    მომწოდებლები
                  </a>
                  <a className="nav-link" href="#">
                    საწობები
                  </a>
                  <a className="nav-link" href="#">
                    მძღოლები
                  </a>
                </nav>
              </div>
            </div>
            <div className="container">
              <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
                <img
                  className="mr-3"
                  src="https://cdn0.iconfinder.com/data/icons/containers/128/Shipping1.png"
                  alt=""
                  width="48"
                  height="48"
                />
                <div className="lh-100">
                  <h6 className="mb-0 text-white lh-100">
                    საწყობის მართვის მოდული (ძირითათი მახასიათებლები)
                  </h6>
                  <small>ჩვენ ვმუშაობთ 2018 წლიდან</small>
                </div>
              </div>
              <Switch>
              <Route path="/dashboard/products" component={ProductsContainer} />
              <Route path="/dashboard/units" component={UnitsConteiner} />
              <Route component={ProductsContainer}/>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
