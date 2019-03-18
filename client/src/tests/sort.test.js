import React from "react";
import { shallow } from "enzyme";
import Sort from "../components/sort.component";

it("renders without crashing", () => {
  shallow(<Sort handleSorting={jest.fn()} />);
});

it("renders layout successfully", () => {
  const wrapper = shallow(<Sort handleSorting={jest.fn()} />);
  console.log(wrapper.find("h4").debug());
  expect(wrapper.find("h4").text()).toEqual("Sorting");
  expect(wrapper.find("select option")).toHaveLength(3);
});

it("should change select value on change", () => {
  const wrapper = shallow(<Sort handleSorting={jest.fn()} />);
  const select = wrapper.find("select");
  expect(select.props().value).toEqual(0);
  select.simulate("change", { target: { value: 1 } });
  expect(wrapper.state("sortValue")).toEqual(1);
});
