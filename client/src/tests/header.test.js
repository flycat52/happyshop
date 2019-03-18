import React from "react";
import { shallow } from "enzyme";
import Header from "../components/header.component";

it("renders without crashing", () => {
  shallow(<Header />);
});

it("should render company name on top of the screen for both web and mobile screen", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find(".logo").text()).toEqual("Happy Shop");
  expect(wrapper.find(".logo-mobile").text()).toEqual("Happy Shop");
});
