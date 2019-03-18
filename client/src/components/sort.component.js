import React, { Component } from "react";
import SortCondition from "../constants/sortCondition";
import _ from "lodash";
import { PropTypes } from "prop-types";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: 0
    };
  }

  render() {
    const { handleSorting } = this.props;

    const sort = _.map(SortCondition, (s, index) => {
      return (
        <option key={index} value={s.value}>
          {s.description}
        </option>
      );
    });

    const onChange = event => {
      this.setState({ sortValue: event.target.value });
      handleSorting(event.target.value);
    };

    return (
      <div>
        <h4 className="m-text14 p-b-7">Sorting</h4>
        <div className="rs2-select2 of-hidden w-size12 m-t-5 m-b-15 m-r-10">
          <select
            className="selection-2"
            name="sorting"
            onChange={onChange}
            value={this.state.sortValue}
          >
            {sort}
          </select>
        </div>
      </div>
    );
  }
}

Sort.propTypes = {
  handleSorting: PropTypes.func.isRequired
};

export default Sort;
