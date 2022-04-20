import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("Header", () => {
  it("should be able render correctly", async () => {
    render(<Header />);

    expect(await screen.findByText(/Home/i)).toBeInTheDocument();
    expect(await screen.findByText(/Career/i)).toBeInTheDocument();
  });
});
