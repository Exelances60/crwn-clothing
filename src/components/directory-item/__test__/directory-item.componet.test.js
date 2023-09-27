import { fireEvent, render, screen } from "@testing-library/react";
import DirectoryItem from "../directory-item.component";
import { useNavigate } from "react-router-dom";

const mockData = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
];
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("DirectoryItem", () => {
  test("should render DirectoryItem component", () => {
    const mockNavigate = jest.fn();
    useNavigate().mockReturnValue(mockNavigate);
    render(<DirectoryItem category={mockData} key={mockData.id} />);
    const textElement = screen.getByText(/shop now/i);
    expect(textElement).toBeInTheDocument();
  });
  test("should render DirectoryItem component click", async () => {
    const mockNavigate = jest.fn();
    useNavigate().mockReturnValue(mockNavigate);
    render(<DirectoryItem category={mockData[0]} />);
    const containerElement = screen.getByTestId("container");
    await fireEvent.click(containerElement);
    expect(mockNavigate).toHaveBeenCalled();
  });
});
