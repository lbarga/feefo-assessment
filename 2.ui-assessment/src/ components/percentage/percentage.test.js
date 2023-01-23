import { render, screen } from "@testing-library/react";
import Percentage from "./percentage";

test("Percentage render correctly", () => {
  render(<Percentage total={100} value={50} label="My percentage label" />);

  const percentage = screen.getByText(/50%/i);
  const percentageLabel = screen.getByText(/My percentage label/i);

  expect(percentage).toBeInTheDocument();
  expect(percentageLabel).toBeInTheDocument();
});
