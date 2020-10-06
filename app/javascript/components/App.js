/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import HelloWorld from './HelloWorld';

import configureStore from '../configureStore';

import HomeView from './homeView';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/hello" render={() => <HelloWorld greeting="Friend" />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
