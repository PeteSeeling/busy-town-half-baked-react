import { render, screen, fireEvent, getByTitle } from '@testing-library/react';
import App from './App';
import TrafficLight from './TrafficLight';


test('Yegads!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yegads!/i);
  expect(linkElement).toBeInTheDocument();
});

test('', async () => {
  render(<TrafficLight />);
  const buttonElement = screen.getAllByText('yellow');

  fireEvent.click(buttonElement, { target: { value: 'yellow' } });

  const yellowElement = await screen.findByText(/yellow/i);
  expect(yellowElement).toBeInTheDocument();
  const greenElement = await screen.findByText(/green/i);
  expect(greenElement).toBeInTheDocument();
  const redElement = await screen.findByText(/red/i);
  expect(redElement).toBeInTheDocument();

});

expect(getByTitle(document.documentElement, 'TrafficLight'),).toBeInTheDocument();