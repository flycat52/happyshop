import React, { Component } from "react";
import _ from "lodash";
import { Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {}
    };
  }

  componentWillMount() {
    const productId = this.props.match.params.product_id;

    const product = _.filter(
      this.props.productList,
      p => p.product_id === parseInt(productId)
    )[0];

    if (!_.isEmpty(product)) {
      this.setState({
        details: product
      });
    }
  }

  render() {
    const { picture, price, title, description } = this.state.details;
    return !_.isEmpty(this.state.details) ? (
      <div className="container bgwhite">
        <div className="flex-w flex-sb">
          <div className="w-size13 p-t-30 respon5">
            <div className="wrap-slick3 flex-sb flex-w">
              <div className="slick3">
                <div className="item-slick3">
                  <div className="wrap-pic-w">
                    <img src={picture} alt="IMG-PRODUCT" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-size14 p-t-30 respon5">
            <h4 className="product-detail-name m-text16 p-b-13">{title}</h4>
            <span className="m-text17">$ {price}</span>
            <p className="s-text8 p-t-10">{description}</p>
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      product_id: PropTypes.number.isRequired
    })
  })
};
export default ProductDetail;
