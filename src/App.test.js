import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import TrafficLight from './TrafficLight';


test('Yegads!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yegads!/i);
  expect(linkElement).toBeInTheDocument();
});

test('', async () => {
  render(<TrafficLight />);
  const buttonElement = screen.getByDisplayValue('yellow');

  fireEvent.click(buttonElement, { target: { value: 'yellow' } });

  const colorElement = await screen.findByText(/yellow/i);
  expect(colorElement).toBeInTheDocument();

});
