import { render, screen } from '@testing-library/react';
import App from './App';

test('Yegads!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yegads!/i);
  expect(linkElement).toBeInTheDocument();
});
