import React from "react";
import { shallow } from "enzyme";
import Filter from "../components/filter.component";

it("renders without crashing", () => {
  shallow(<Filter handleFilter={jest.fn()} />);
});

it("renders layout successfully", () => {
  const wrapper = shallow(<Filter handleFilter={jest.fn()} />);
  expect(wrapper.find("h4").text()).toEqual("Filters");
  expect(wrapper.find("select option")).toHaveLength(6);
});

it("should change select value on change", () => {
  const wrapper = shallow(<Filter handleFilter={jest.fn()} />);
  const select = wrapper.find("select");
  expect(select.props().value).toEqual(0);
  select.simulate("change", { target: { value: 1 } });
  expect(wrapper.state("priceRange")).toEqual(1);
});
