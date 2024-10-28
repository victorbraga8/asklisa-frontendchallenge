import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Nav from "@/components/navigation/nav";

describe("Nav Component", () => {
  it("renders the nav element", () => {
    render(<Nav />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  it("renders the logo link with correct href", () => {
    render(<Nav />);
    const linkElement = screen.getByRole("link", { name: /logo/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it("renders the header with correct class", () => {
    render(<Nav />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass("py-2 px-4 bg-slate-300 w-full");
  });

  it("renders the ul element with correct class", () => {
    render(<Nav />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
    expect(ulElement).toHaveClass(
      "flex justify-between items-center md:justify-center gap-5 text-white flex-wrap"
    );
  });

  it("renders the li element", () => {
    render(<Nav />);
    const liElement = screen.getByRole("listitem");
    expect(liElement).toBeInTheDocument();
    expect(liElement).toHaveClass("flex justify-center w-full md:w-auto");
  });
});
