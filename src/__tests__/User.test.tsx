import { render, screen } from "@testing-library/react";
import User from "components/User";
import { MemoryRouter } from "react-router-dom";

describe("Testing User components", () => {
  it("check render of User components successfully", () => {
    const users = {
      avatar_url: "hello.com",
      login: "sammieeblaq",
      location: "nigeria",
      type: "user",
    };
    render(
      <MemoryRouter>
        <User user={users} />
      </MemoryRouter>
    );
    expect(screen.getByText("sammieeblaq")).toBeInTheDocument();
    expect(screen.getByText("nigeria")).toBeInTheDocument();
    expect(screen.getByText("user")).toBeInTheDocument();
    expect(screen.getByText("View Profile")).toBeInTheDocument();
    const image: HTMLImageElement = screen.getByAltText("sammieeblaq");
    expect(image.src).toContain("hello.com");
  });
  it("check render of User components unsuccessfully", () => {
    const users = {
      avatar_url: "",
      login: "",
      location: "",
      type: "",
    };
    render(
      <MemoryRouter>
        <User user={users} />
      </MemoryRouter>
    );
    expect(screen.queryByText("sammieeblaq")).not.toBeInTheDocument();
    expect(screen.queryByText("nigeria")).not.toBeInTheDocument();
    expect(screen.queryByText("user")).not.toBeInTheDocument();
    expect(screen.getByText("View Profile")).toBeInTheDocument();
    const image: HTMLImageElement = screen.getByAltText("");
    expect(image.src).not.toContain("hello.com");
  });
});
