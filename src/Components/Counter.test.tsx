import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import exp from "constants";

// Testing that initially the counter value is 0
test("initial counter value should be 0", () => {
  const { getByDisplayValue } = render(<Counter />);
  expect(getByDisplayValue("0")).toBeInTheDocument();
});

// Testing if the reset value works
test("reset button should reset the counter value to 0", () => {
  const { getByDisplayValue, getByRole } = render(<Counter />);
  const incrementButton = getByRole("button", { name: "Increment" });
  const resetButton = getByRole("button", { name: "Reset" });
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);
  expect(getByDisplayValue("0")).toBeInTheDocument();
});

// Testing to make sure the increment button works
test("increment button should increase the counter value", () => {
  const { getByDisplayValue, getByRole } = render(<Counter />);
  const incrementButton = getByRole("button", { name: "Increment" });
  fireEvent.click(incrementButton);
  expect(getByDisplayValue("1")).toBeInTheDocument();
  fireEvent.click(incrementButton);
  expect(getByDisplayValue("2")).toBeInTheDocument();
});
