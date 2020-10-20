import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/components/App';

test('renders medical text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/medical/i);
  expect(textElement).toBeInTheDocument();
});

test('renders services text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/services/i);
  expect(textElement).toBeInTheDocument();
});

test('renders home link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/HOME/i);
  expect(linkElement).toBeInTheDocument();
});
