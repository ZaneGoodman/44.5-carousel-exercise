import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

//Smoke test
it("Renders Card component", () => {
  render(<Card />);
});
//Snapshot test
it("Card matches snapshot", () => {
  const { asFragment } = render(
    <Card caption="test1" src="test1Img" currNum={1} totalNum={1} />
  );
  expect(asFragment()).toMatchSnapshot();
});
