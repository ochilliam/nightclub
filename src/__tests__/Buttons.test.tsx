import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import usr from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../components/Hero";

afterEach(cleanup);

test("buttons should be disabled on threshold of 0", () => {
    const { getByTestId, debug } = render(<Hero />);
    const increment = getByTestId("increment");
    const decrement = getByTestId("decrement");
    expect(increment).toBeDisabled();
    expect(decrement).toBeDisabled();
});

test("buttons have focus on user click", () => {
    const { getByTestId, debug } = render(<Hero />);
    const increment = getByTestId("increment");
    const decrement = getByTestId("decrement");
    expect(increment).toHaveFocus();
});
