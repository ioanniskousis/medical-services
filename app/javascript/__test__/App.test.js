// import React from 'react';
// import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import App from '../components/App';

// configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   shallow(<App />);
// });

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../components/App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(<App />, container);
  });
  const medical = document.getElementById('medical-label');
  expect(medical.textContent).toBe('medical');
});
