
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../../Page';


describe('pages/Page test', () => {
  it('pages/Page should match snapshot', () => {
    const component = renderer.create(<Page
       />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
