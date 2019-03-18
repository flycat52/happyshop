import React from "react";
import { shallow } from "enzyme";
import Footer from "../components/footer.component";

it("renders without crashing", () => {
  shallow(<Footer />);
});
