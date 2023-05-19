import { render, screen } from "@testing-library/react";
import RXCare from "./RXCare";

test("renders learn react link", () => {
    render(<RXCare />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
