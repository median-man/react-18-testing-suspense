import App from "./App";
import { render, screen } from "@testing-library/react";

test("should render LazyComponent", async () => {
  render(<App />);

  // assert that fallback renders
  await screen.findByText(/loading/i);
});
