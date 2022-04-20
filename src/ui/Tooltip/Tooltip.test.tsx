import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Tooltip, TooltipProps } from ".";

function MockedComponent({
  children,
  message = "Tooltip message",
  ...rest
}: Partial<TooltipProps>) {
  return (
    <Tooltip message={message} {...rest}>
      {children || <h1>Hover me</h1>}
    </Tooltip>
  );
}

describe("Tooltip", () => {
  it("should be able render correctly", async () => {
    render(<MockedComponent />);

    userEvent.hover(await screen.findByText(/Hover me/i));

    expect(await screen.findByText(/Tooltip message/i)).toBeInTheDocument();
  });
});
