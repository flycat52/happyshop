import React, { Component } from "react";
import _ from "lodash";
import Pagination from "react-js-pagination";
import PriceRange from "../constants/priceRange";
import Sort from "./sort.component";
import Filter from "./filter.component";
import { PropTypes } from "prop-types";

class Product extends Component {
  constructor(props) {
    super(props);

    this.getProductList = this.getProductList.bind(this);

    this.state = {
      activePage: 1,
      sortValue: 0,
      filteredProductList: this.props.productList
    };
  }

  getProductList() {
    return _.map(
      this.state.filteredProductList.slice(
        (this.state.activePage - 1) * this.props.perPage,
        (this.state.activePage - 1) * this.props.perPage + this.props.perPage
      ),
      (p, index) => (
        <div className="col-sm-12 col-md-6 col-lg-4 p-b-50" key={index}>
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative">
              <img src={p.picture} alt="IMG-PRODUCT" />
            </div>
            <div className="block2-txt p-t-20">
              <a
                href={`/product-detail/${p.product_id}`}
                className="block2-name dis-block s-text3 p-b-5"
              >
                {p.title}
              </a>

              <span className="block2-price m-text6 p-r-5">$ {p.price}</span>
            </div>
          </div>
        </div>
      )
    );
  }

  sorting(condition, list) {
    switch (condition) {
      case "1": // price: low to high
        list.sort((p1, p2) => parseInt(p1.price) - parseInt(p2.price));
        break;
      case "2": // price: high to low
        list.sort((p1, p2) => parseInt(p2.price) - parseInt(p1.price));
        break;
      default:
        list.sort(
          (p1, p2) => parseInt(p1.product_id) - parseInt(p2.product_id)
        );
        break;
    }
  }

  render() {
    const handlePageChange = pageNumber => {
      this.setState({ activePage: pageNumber });
    };

    const handleSorting = value => {
      this.setState({ sortValue: value });
      this.sorting(value, this.state.filteredProductList);
      this.forceUpdate();
    };

    const handleFilter = value => {
      const range = _.filter(PriceRange, p => p.value === parseInt(value))[0];
      if (_.isEmpty(range)) {
        this.sorting(this.state.sortValue, this.state.filteredProductList);
        this.setState({ filteredProductList: this.props.productList });
      } else {
        const filteredProducts = _.filter(
          this.props.productList,
          p =>
            parseFloat(p.price) >= range.lower &&
            parseFloat(p.price) <= range.upper
        );
        this.sorting(this.state.sortValue, filteredProducts);
        this.setState({ filteredProductList: filteredProducts });
      }
      this.forceUpdate();
    };

    return (
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="leftbar p-r-20 p-r-0-sm">
            <Sort handleSorting={handleSorting} />
            <Filter handleFilter={handleFilter} />
          </div>
        </div>
        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
          <div className="flex-sb-m flex-w p-b-35">
            <span className="s-text8 p-t-5 p-b-5">
              Showing {this.state.filteredProductList.length} results
            </span>
          </div>
          <div className="row">{this.getProductList()}</div>
          <div className="pagination flex-m flex-w p-t-26">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.props.perPage}
              totalItemsCount={this.state.filteredProductList.length}
              onChange={handlePageChange}
              activeLinkClass="active-pagination"
              linkClass="item-pagination flex-c-m trans-0-4"
              hideFirstLastPages={true}
              hideNavigation={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  productList: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired
};

Product.default = {
  perPage: 6
};

export default Product;
