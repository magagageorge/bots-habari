
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ErrorPage from '../../ErrorPage';


describe('pages/ErrorPage test', () => {
  it('pages/ErrorPage should match snapshot', () => {
    const component = renderer.create(<ErrorPage
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
