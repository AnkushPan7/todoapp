import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* AI Instruction: here in src folder there are app.js file in which you need to change text of <h1> tag from "To Do App" to "To Do App Test" */
