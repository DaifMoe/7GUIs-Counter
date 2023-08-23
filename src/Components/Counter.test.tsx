import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import exp from "constants";

// Testing that initially the counter value is 0
test("initial counter value should be 0", () => {
  const { getByDisplayValue } = render(<Counter />);
  expect(getByDisplayValue("0")).toBeInTheDocument();
});
