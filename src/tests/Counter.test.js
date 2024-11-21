import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />)
})

test('renders counter message', () => {
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('2');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('0');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1');
});
