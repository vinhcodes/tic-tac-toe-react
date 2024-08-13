import { calculateWinner } from "../helper/helper";

export const botMove = (board) => {
  const bestMove = findBestMove(board);
  return bestMove;
};

const findBestMove = (board) => {
  let bestVal = -Infinity;
  let bestMove = null;

  // Loop through all cells, evaluate minimax function for all empty cells.
  // And return the cell with optimal value.
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      // Make the move
      board[i] = "O";

      // Compute evaluation function for this move.
      let moveVal = minimax(board, 0, false);

      // Undo the move
      board[i] = null;

      // If the value of the current move is more than the best value, update best
      if (moveVal > bestVal) {
        bestMove = i;
        bestVal = moveVal;
      }
    }
  }

  return bestMove;
};

// Minimax algorithm
const minimax = (board, depth, isMaximizing) => {
  const winner = calculateWinner(board);

  // If O has won the game return its evaluation
  if (winner === "O") return 10 - depth;

  // If X has won the game return its evaluation
  if (winner === "X") return depth - 10;

  // If it's a tie
  if (!board.includes(null)) return 0;

  if (isMaximizing) {
    let best = -Infinity;

    // Traverse all cells
    for (let i = 0; i < board.length; i++) {
      // Check if cell is empty
      if (board[i] === null) {
        // Make the move
        board[i] = "O";

        // Call minimax recursively and choose the maximum value
        best = Math.max(best, minimax(board, depth + 1, false));

        // Undo the move
        board[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;

    // Traverse all cells
    for (let i = 0; i < board.length; i++) {
      // Check if cell is empty
      if (board[i] === null) {
        // Make the move
        board[i] = "X";

        // Call minimax recursively and choose the minimum value
        best = Math.min(best, minimax(board, depth + 1, true));

        // Undo the move
        board[i] = null;
      }
    }
    return best;
  }
};
