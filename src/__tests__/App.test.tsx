import React from "react";
import { render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

import App from "../App";

test("renders", () => {
  const { getByText } = render(<App />);
  expect(getByText("phtn-01"));
});
