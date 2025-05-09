import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PG Listing Portal header', () => {
  render(<App />);
  const linkElement = screen.getByText(/PG Listing Portal/i);
  expect(linkElement).toBeInTheDocument();
});
