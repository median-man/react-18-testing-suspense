import App from "./App";
import { render, screen } from "@testing-library/react";

test("should render LazyComponent", async () => {
  render(<App />);

  // assert that loader renders
  await screen.findByText(/loading/i);

  // assert that lazy component renders
  await screen.findByText(/lazy component/i);

  // assert that loader was removed
  expect(screen.queryByText(/loading/i)).toBeNull();
});
