import React from "react";
import { calculateWinner } from "../helper/helper";
import { botMove } from "../bot/Bot";
import { Board } from "./Board";

const style = {
  width: "200px",
  margin: "20px auto",
  textAlign: "center",
};

export default function Game() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [IsXNext, setIsXNext] = React.useState(true);
  const [isBotTurn, setIsBotTurn] = React.useState(false);
  const [draw, setDraw] = React.useState(false);

  const winner = calculateWinner(board);

  const onClick = (i) => {
    const newBoard = [...board];

    if (isBotTurn || winner || board[i]) return;

    newBoard[i] = IsXNext ? "X" : null;
    setBoard(newBoard);
    setIsXNext(!IsXNext);
  };

  React.useEffect(() => {
    if (board.every((cell) => cell !== null)) {
      setDraw(true);
    }

    if (!IsXNext && !winner) {
      setIsBotTurn(true);
      setTimeout(() => {
        const botIndex = botMove(board);
        if (botIndex !== null) {
          const newBoard = [...board];
          newBoard[botIndex] = "O";
          setBoard(newBoard);
          setIsXNext(true);
        }
        setIsBotTurn(false);
      }, 1000);
    }
  }, [IsXNext, board, winner]);

  const newGame = () => (
    <button
      id="start-btn"
      onClick={() => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setDraw(false);
      }}
    >
      Start Game
    </button>
  );

  return (
    <>
      <Board squares={board} onClick={onClick} />
      <div style={style}>
        <p>
          {winner
            ? `Winner is ${winner}`
            : draw
            ? "It's a draw!"
            : IsXNext
            ? 'Next Move is "X"'
            : "Wait..."}
        </p>
        {newGame()}
      </div>
    </>
  );
}
