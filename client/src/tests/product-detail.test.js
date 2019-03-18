import React from "react";
import { shallow } from "enzyme";
import ProductDetail from "../components/product-detail.component";

const match = {
  params: {
    product_id: 2
  }
};

const details = {
  product_id: 2,
  title: "Stunna Lip Paint Longwear Fluid Lip Color",
  price: "36",
  picture: "image2.png"
};

it("renders without crashing", () => {
  shallow(<ProductDetail match={match} />);
});

it("should render correct product information", () => {
  const wrapper = shallow(<ProductDetail match={match} />);
  wrapper.setState({ details: details });

  expect(wrapper.find("img")).toHaveLength(1);
  expect(wrapper.find("h4").text()).toEqual(details.title);
  expect(wrapper.find("p").value).toEqual(details.description);
  expect(wrapper.find("span").text()).toEqual(`$ ${details.price}`);
});
