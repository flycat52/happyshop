import React, { Component } from "react";
import _ from "lodash";
import PriceRange from "../constants/priceRange";
import { PropTypes } from "prop-types";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceRange: 0
    };
  }

  render() {
    const { handleFilter } = this.props;

    const priceFilter = _.map(PriceRange, (p, index) => {
      return (
        <option key={index} value={p.value}>
          {p.description}
        </option>
      );
    });

    const onChange = event => {
      this.setState({ priceRange: event.target.value });
      handleFilter(event.target.value);
    };

    return (
      <div>
        <h4 className="m-text14 p-b-7">Filters</h4>
        <div className="filter-price">
          <div className="rs2-select2 of-hidden w-size12 m-t-5 m-b-15 m-r-10">
            <select
              className="selection-2"
              name="sorting"
              onChange={onChange}
              value={this.state.priceRange}
            >
              <option value="0">Price</option>
              {priceFilter}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired
};

export default Filter;
