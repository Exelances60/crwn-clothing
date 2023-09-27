import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import SignUpForm from "../sign-up-form.component";
import * as reactRedux from "react-redux";
import { signUpStart } from "../../../store/user/user.action";

describe("SignUpForm", () => {
  test("should render SignUpForm component", () => {
    renderWithProviders(<SignUpForm />);
    const signUpForm = screen.getByText(/Don't have an account/i);
    expect(signUpForm).toBeInTheDocument();
  });
  test("Inputs must be dispatched and rendered again", async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);

    const { store } = renderWithProviders(<SignUpForm />, {
      preloadedState: {
        user: {
          error: "test",
          isLoading: false,
          currentUser: null,
        },
      },
    });
    const buttonElement = screen.getByRole("button");
    const displayNameInput = screen.getByTestId("displayName");
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    const confirmPasswordInput = screen.getByTestId("confirmPassword");

    expect(buttonElement).toBeInTheDocument();

    await fireEvent.click(buttonElement);
    await fireEvent.change(displayNameInput, {
      target: { value: "Test Display Name" },
    });
    await fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });
    await fireEvent.change(passwordInput, {
      target: { value: "testpassword" },
    });
    await fireEvent.change(confirmPasswordInput, {
      target: { value: "testpassword" },
    });

    await fireEvent.submit(buttonElement);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(
      signUpStart("test@example.com", "testpassword", "Test Display Name")
    );
    mockDispatch.mockClear();
    expect(store.getState().user.error).toBe("test");
  });
});
