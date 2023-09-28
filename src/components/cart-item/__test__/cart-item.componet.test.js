import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartItem from "../cart-item.component";

const mockData = {
  imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
  name: "Product 1",
  price: 25,
  quantity: 1,
  id: 1,
};

describe("CartItem component", () => {
  test("should render CartItem component", () => {
    renderWithProviders(<CartItem cartItem={mockData} key={mockData.id} />);
    const cartItemElement = screen.getByText(/Product 1/i);
    expect(cartItemElement).toBeInTheDocument();
  });
  test("should render CartItem component with correct price", () => {
    renderWithProviders(<CartItem cartItem={mockData} key={mockData.id} />);
    const cartItemElement = screen.getByText(/25/i);
    expect(cartItemElement).toBeInTheDocument();
  });
  test("should render CartItem component with correct quantity", () => {
    renderWithProviders(<CartItem cartItem={mockData} key={mockData.id} />);
    const cartItemQuantity = screen.getByText(/1 x \$25/i);
    expect(cartItemQuantity).toBeInTheDocument();
  });
});
