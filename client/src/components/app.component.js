import React, { Component } from "react";
import Header from "./header.component";
import Footer from "./footer.component";
import Product from "./product.component";
import { Route } from "react-router-dom";
import ProductDetail from "./product-detail.component";
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: []
    };
  }

  getProductList = async () => {
    await fetch("/api/products")
      .then(response => response.json())
      .then(res => {
        this.setState({
          productList: res.data
        });
        localStorage.setItem("productList", JSON.stringify(res.data));
      });
  };

  componentWillMount() {
    const storage = localStorage.getItem("productList");
    storage
      ? this.setState({ productList: JSON.parse(storage) })
      : this.getProductList();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="bgwhite p-b-65">
          <div className="container">
            <Route
              exact
              path="/"
              render={routeProps =>
                !_.isEmpty(this.state.productList) && (
                  <Product
                    {...routeProps}
                    productList={this.state.productList}
                    perPage={6}
                  />
                )
              }
            />
            <Route
              path="/product-detail/:product_id"
              render={routeProps =>
                !_.isEmpty(this.state.productList) && (
                  <ProductDetail
                    {...routeProps}
                    productList={this.state.productList}
                  />
                )
              }
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
