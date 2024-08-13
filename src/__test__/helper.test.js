import { calculateWinner } from '../helper/helper';

test('calculates winner correctly', () => {
  const board = ['X', 'X', 'X', null, null, null, null, null, null];
  expect(calculateWinner(board)).toBe('X');
});

test('returns null when there is no winner', () => {
  const board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
  expect(calculateWinner(board)).toBe(null);
});