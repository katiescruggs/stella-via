import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  
  expect(rendered).toBeTruthy();
});

it('matches the snapshot', () => {
  const rendered = renderer.create(<App />).toJSON();

  expect(rendered).toMatchSnapshot();
});

