/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import HelloWorld from './HelloWorld';

import configureStore from '../configureStore';

import Navbar from './Navbar';
import HomeView from './homeView';

import LogoText from './logoText';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter className="App">
          <div className="desktop">
            <LogoText />
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/hello" component={HelloWorld} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
