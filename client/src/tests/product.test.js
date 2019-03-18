import React from "react";
import { shallow, mount } from "enzyme";
import Product from "../components/product.component";

const productList = [
  {
    product_id: 1,
    title: "Dior Addict Lip Tattoo",
    price: "50"
  },
  {
    product_id: 2,
    title: "Stunna Lip Paint Longwear Fluid Lip Color",
    price: "36"
  },
  { product_id: 3, title: "Retractable↵Face Brush", price: "24" }
];

it("renders without crashing", () => {
  shallow(<Product productList={productList} perPage={6} />);
});

describe("should render layout correctly", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Product productList={productList} perPage={6} />);
  });

  it("should render total number of results", () => {
    expect(
      wrapper
        .find("span")
        .at(0)
        .text()
    ).toEqual("Showing 3 results");
  });

  it("should show 3 products", () => {
    expect(wrapper.find(".row .col-sm-12")).toHaveLength(3);
  });

  it("should show 3 products in two pages", () => {
    wrapper = mount(<Product productList={productList} perPage={2} />);
    expect(wrapper.find(".active-pagination").text()).toEqual("1");
    expect(wrapper.find("ul li a")).toHaveLength(2);
  });
});
