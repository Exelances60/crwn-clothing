import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartDropdown from "../cart-dropdown.component";

describe("CartDropdown component", () => {
  test("should render CartDropdown component", () => {
    renderWithProviders(<CartDropdown />);
    const cartDropdownElement = screen.getByText(/Your cart is empty/i);
    expect(cartDropdownElement).toBeInTheDocument();
  });
  test("should render CartDropdown component with 2 items", () => {
    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: {
          cartItems: [
            {
              imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
              name: "Product 1",
              price: 25,
              quantity: 1,
              id: 1,
            },
            {
              imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
              name: "Product 2",
              price: 25,
              quantity: 1,
              id: 2,
            },
          ],
        },
      },
    });
    const cartDropdownElement = screen.getByText(/Product 1/i);
    const cartDropdownElement2 = screen.getByText(/Product 2/i);
    expect(cartDropdownElement).toBeInTheDocument();
    expect(cartDropdownElement2).toBeInTheDocument();
  });
  test("should be to navigate on click button ", async () => {
    renderWithProviders(<CartDropdown />);
    const ButtonElement = screen.getByText(/Go to checkout/i);
    expect(ButtonElement).toBeInTheDocument();
    await fireEvent.click(ButtonElement);
    expect(window.location.pathname).toBe("/checkout");
  });
});
