import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import usr from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../components/Hero";

test("default maximum user to be empty", () => {
    const { getByTestId, debug } = render(<Hero />);
    const input = getByTestId("usrInputThreshold");
    expect(input.value).toBe("");
});
