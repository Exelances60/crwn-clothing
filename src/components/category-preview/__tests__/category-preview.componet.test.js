import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CategoryPreview from "../category-preview.component";

const mockData = {
  title: "Mens",
  imageUrl: "https://i.ibb.co/c8kCkR6/hats.png",
  items: [
    {
      id: 1,
      name: "Product 1",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25,
    },
  ],
};

describe("CategoryPreview component", () => {
  test("should render CategoryPreview component", () => {
    renderWithProviders(
      <CategoryPreview products={mockData.items} title={mockData.title} />
    );
    const categoryElement = screen.getByText(/product 1/i);
    expect(categoryElement).toBeInTheDocument();
  });
});
