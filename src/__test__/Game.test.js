import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Game from "../components/Game";
import { Square } from "../components/Square";

test("Player X can make a move", () => {
  render(<Game />);
  const squares = screen.getAllByRole("button");

  fireEvent.click(squares[0]);
  expect(squares[0]).toHaveTextContent("X");
});

test("The bot makes a move after player X", async () => {
  render(<Game />);
  const squares = screen.getAllByRole("button");

  fireEvent.click(squares[0]);
  await waitFor(() => expect(squares[0]).toHaveTextContent("X"));

  await waitFor(
    () => {
      const botMove = squares.find((square) => square.textContent === "O");
      expect(botMove).not.toBeUndefined();
    },
    { timeout: 3000 }
  );
});

test("The game can be reset", () => {
  render(<Game />);
  const squares = screen.getAllByRole("button");

  fireEvent.click(squares[0]);

  fireEvent.click(screen.getByText("Start Game"));
  squares.forEach((square) => {
    expect(squares[0]).toHaveTextContent("");
  });
});
