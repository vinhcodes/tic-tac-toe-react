import { botMove } from '../bot/Bot';

test('bot makes a valid move', () => {
  const board = ['X', null, 'X', null, 'O', null, null, null, null];
  const move = botMove(board);
  expect(move).toBeGreaterThanOrEqual(0);
  expect(move).toBeLessThan(9);
  expect(board[move]).toBe(null);
});