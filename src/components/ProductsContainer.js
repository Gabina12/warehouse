import React, { Component } from "react";
import ListItem from "./../Presentation/ListItem";
import ProdSumm from "./../Presentation/ProdSumm";
import Loader from './../Presentation/Loader'

import Popup from 'react-popup'

export class ProductsContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      sum: 0,
      loading: false
    };
  }
  

  componentDidMount() {
    fetch("http://localhost:55801/api/Products")
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
        this.setState({ loading: true });
      });
  }

  render() {
    const { products, sum, loading } = this.state;

    if (!loading) return <Loader />;
    else {
      return (
        <div className="tbc-box tbc-box-homepage two-part animated-item fb-row">
          <ProdSumm
            sum={this.state.sum}
            title={"ბოლოს მიღებული"}
            ccy={"₾"}
            total={"სულ თანხა"}
          />
          <div className="right-part">
            <ul className="homeList">{this.state.products}</ul>
          </div>
        </div>
      );
    }
  }
  
}