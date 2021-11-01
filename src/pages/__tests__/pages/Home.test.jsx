
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../Home';


describe('pages/Home test', () => {
  it('pages/Home should match snapshot', () => {
    const component = renderer.create(<Home
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
