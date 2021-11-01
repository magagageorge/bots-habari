
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ArticleDetails from '../../ArticleDetails';
import { Switch, Route, BrowserRouter } from "react-router-dom";


describe('pages/ArticleDetails test', () => {
  it('pages/ArticleDetails should match snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
            <Switch>
              <Route path="/articles/:id" render={props => <ArticleDetails {...props} />} />
            </Switch>
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
