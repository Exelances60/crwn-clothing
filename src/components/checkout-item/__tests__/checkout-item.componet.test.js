import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CheckoutItem from "../checkout-item.component";
import * as reactRedux from "react-redux";
import { removeItemFromCart } from "../../../store/cart/cart.action";

const mockItem = {
  id: 4,
  name: "Brown Cowboy",
  imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
  price: 35,
  quantity: 1,
};

describe("CheckoutItem component", () => {
  test("should render CheckoutItem component", () => {
    renderWithProviders(<CheckoutItem cartItem={mockItem} key={mockItem.id} />);
    expect(screen.getByTestId("remove")).toBeInTheDocument();
  });
  test("should render cartItem and checkout rendered component", () => {
    renderWithProviders(<CheckoutItem cartItem={mockItem} key={mockItem.id} />);
    const cartItemElement = screen.getByText(mockItem.name);
    expect(cartItemElement).toBeInTheDocument();
  });
  test("should be click dispatch remove action", async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);
    const { store } = renderWithProviders(
      <CheckoutItem cartItem={mockItem} key={mockItem.id} />,
      {
        preloadedState: {
          cart: {
            cartItems: [mockItem],
          },
        },
      }
    );
    const removeButton = screen.getByTestId("remove");
    await fireEvent.click(removeButton);
    expect(mockDispatch).toHaveBeenCalled();
    const removeItemFromCarts = removeItemFromCart(
      store.getState().cart.cartItems,
      mockItem
    );
    expect(mockDispatch).toHaveBeenCalledWith(removeItemFromCarts);
  });
});
