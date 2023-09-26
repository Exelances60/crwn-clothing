import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("Button tests", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: black");
  });
  test("should render google button when google is passed", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color:  #4285f4;");
  });
  test("should render inverted button when inverted is passed", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color:  white;");
  });
  test("should be isLoading when isLoading  is passed", () => {
    render(<Button isLoading={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
