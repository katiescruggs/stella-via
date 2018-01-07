import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe('App', () => {
  const rendered = renderer.create(<App />).toJSON();
  
  it('renders without crashing', () => {
    expect(rendered).toBeTruthy();
  });
  
  it('matches the snapshot', () => {
    expect(rendered).toMatchSnapshot;
  });
});
