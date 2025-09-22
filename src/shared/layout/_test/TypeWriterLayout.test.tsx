import React from "react";
import { render, screen, act } from "@testing-library/react";
import TypeWriterLayout from "../TypeWriterLayout";

jest.useFakeTimers();

describe("TypeWriterLayout", () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it("renders text character by character with default speed", () => {
    const text = "Hello";
    render(<TypeWriterLayout text={text} />);

    for (let i = 1; i <= text.length; i++) {
      // Wrap the timer advance inside act
      act(() => {
        jest.advanceTimersByTime(50); // default speed
      });
      expect(screen.getByText(text.slice(0, i))).toBeInTheDocument();
    }

    // Finally, full text
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("respects custom speed prop", () => {
    const text = "Hi";
    const speed = 100;
    render(<TypeWriterLayout text={text} speed={speed} />);

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(screen.getByText("H")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(screen.getByText("Hi")).toBeInTheDocument();
  });

  it("clears interval on unmount", () => {
    const text = "Bye";
    const { unmount } = render(<TypeWriterLayout text={text} />);
    const spy = jest.spyOn(global, "clearInterval");

    unmount();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
