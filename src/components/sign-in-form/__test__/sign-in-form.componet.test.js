import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import SignInForm from "../sign-in-form.component";

describe("SignInForm", () => {
  test("should render SignInForm component", () => {
    renderWithProviders(<SignInForm />);
    const signInFormElement = screen.getByText(/Already have an account/i);
    expect(signInFormElement).toBeInTheDocument();
  });
  test("FireEvent sign in", async () => {
    const { store } = renderWithProviders(<SignInForm />, {
      preloadedState: {
        user: {
          currentUser: null,
          error: "test",
        },
      },
    });
    const signInButton = screen.getByTestId("signİn");
    expect(signInButton).toBeInTheDocument();
    await fireEvent.click(signInButton);
    expect(store.getState().user.error).toBe("test");
  });
});
