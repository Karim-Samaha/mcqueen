import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import { Themes } from "../types/Theme";

// A test component that consumes the theme context
function TestComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

describe("ThemeProvider & useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("provides LIGHT theme by default", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme").textContent).toBe(Themes.LIGHT);
    expect(localStorage.getItem("theme")).toBe(Themes.LIGHT);
    expect(document.documentElement.classList.contains(Themes.DARK)).toBe(false);
  });

  it("reads initial theme from localStorage", () => {
    localStorage.setItem("theme", Themes.DARK);

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme").textContent).toBe(Themes.DARK);
    expect(document.documentElement.classList.contains(Themes.DARK)).toBe(true);
  });

  it("toggles from LIGHT to DARK and updates localStorage + DOM", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText("Toggle");

    // Initially LIGHT
    expect(screen.getByTestId("theme").textContent).toBe(Themes.LIGHT);
    expect(document.documentElement.classList.contains(Themes.DARK)).toBe(false);

    // Click toggle -> DARK
    fireEvent.click(button);
    expect(screen.getByTestId("theme").textContent).toBe(Themes.DARK);
    expect(localStorage.getItem("theme")).toBe(Themes.DARK);
    expect(document.documentElement.classList.contains(Themes.DARK)).toBe(true);

    // Click toggle -> back to LIGHT
    fireEvent.click(button);
    expect(screen.getByTestId("theme").textContent).toBe(Themes.LIGHT);
    expect(localStorage.getItem("theme")).toBe(Themes.LIGHT);
    expect(document.documentElement.classList.contains(Themes.DARK)).toBe(false);
  });

  it("throws error when useTheme is called outside ThemeProvider", () => {
  // Define a component that will trigger the error
  const BrokenComponent = () => {
    const { theme } = useTheme(); // should throw
    return <span>{theme}</span>;
  };

  // Rendering should throw
  expect(() => render(<BrokenComponent />)).toThrow(
    "useTheme must be used inside ThemeProvider"
  );
});
});
