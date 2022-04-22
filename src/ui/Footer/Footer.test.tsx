import { render, screen } from "@testing-library/react";

import { Footer } from ".";

describe("Footer", () => {
  it("should be able render correctly", async () => {
    render(<Footer />);

    expect(
      await screen.findByRole("link", { name: /github/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: /linkedin/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: /twitter/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: /instagram/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: /discord/i })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("link", { name: /send email/i })
    ).toBeInTheDocument();
  });
});
