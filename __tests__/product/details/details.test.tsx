import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductDetails from "@/app/product/[id]/page";

jest.mock("next/navigation", () => ({
  useParams: jest.fn().mockReturnValue({ id: "invalid-id" }),
}));

jest.mock("swr", () => ({
  __esModule: true,
  default: () => ({
    data: null,
    error: true,
    isLoading: false,
  }),
}));

describe("ProductDetails Component (Error State)", () => {
  it("renders BackButton and error message when product is not found", () => {
    render(<ProductDetails />);

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(
      screen.getByText("Not found for parameters inserted.")
    ).toBeInTheDocument();
    expect(screen.getByText("Go back to our home page.")).toBeInTheDocument();
  });
});
