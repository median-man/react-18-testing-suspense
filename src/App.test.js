import App from "./App";
import { render, screen, act } from "@testing-library/react";

test("should render LazyComponent", async () => {
  render(<App />);
  
  // assert that loader renders
  // Wrap in act to avoid the warning about wrapping in an act call.
  await act(() => screen.findByText(/loading/i))
  
  // assert that lazy component renders
  await screen.findByText(/lazy component/i);
  
  // assert that loader was removed
  expect(screen.queryByText(/loading/i)).toBeNull();
});
