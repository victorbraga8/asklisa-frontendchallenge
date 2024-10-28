import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductContent from "@/components/product/product-content";

const mockProduct = {
  id: 1,
  title: "Mock Product",
  description: "This is a mock product for testing.",
  price: 10,
  category: "Mock Category",
  rating: { rate: 4.5, count: 10 },
  image: "/path/to/image.jpg",
};

describe("ProductContent Component", () => {
  it("renders product details correctly", () => {
    render(<ProductContent product={mockProduct} />);

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByText("Detalhes do Produto")).toBeInTheDocument();
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.price.toString())).toBeInTheDocument();
    expect(
      screen.getByText(mockProduct.rating.rate.toString())
    ).toBeInTheDocument();
  });
});
