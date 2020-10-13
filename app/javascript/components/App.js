/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

// import HelloWorld from './HelloWorld';
import DepartmentsView from './DepartmentsView';

import configureStore from '../configureStore';

import Navbar from './Navbar';
import HomeView from './homeView';
import DoctorsView from './DoctorsView';
import BookingView from './BookingView';

import LogoText from './logoText';
import downloadDepartments from '../api/departmentsDB';
import downloadBookings from '../api/bookingsDB';
import Login from './Login';

const store = configureStore();

class App extends React.Component {
  componentDidMount() {
    downloadDepartments(store);
    downloadBookings(store);
  }

  render() {
    // alert(JSON.stringify(this.props));
    return (
      <Provider store={store}>
        <BrowserRouter className="App">
          <div className="desktop">
            <LogoText />
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/services" component={DepartmentsView} />
              <Route path="/doctors" component={DoctorsView} />
              <Route path="/booking" component={BookingView} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
