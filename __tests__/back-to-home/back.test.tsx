import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackButton from "@/components/navigation/back-to-home";

describe("BackButton Component", () => {
  it("renders the link with correct href", () => {
    render(<BackButton />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it("has correct classes for styling and hover effect", () => {
    render(<BackButton />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveClass(
      "mt-4 inline-block bg-blue-800 hover:bg-blue-400 transition-colors text-white py-2 px-4 rounded group"
    );
  });
});
