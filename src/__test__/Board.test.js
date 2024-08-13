import React from 'react';
import { render } from '@testing-library/react';
import { Board } from '../components/Board';

test('renders the board with 9 squares', () => {
  const squares = Array(9).fill(null);
  const { getAllByRole } = render(<Board squares={squares} onClick={() => {}} />);
  
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(9);
});