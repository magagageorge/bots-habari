
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';


describe('theme/navigation/Header test', () => {
  it('theme/navigation/Header should match snapshot', () => {
    const component = renderer.create(<BrowserRouter>
      <Header />
    </BrowserRouter>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
