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
import EditBookingView from './EditBookingView';

import LogoText from './logoText';
import downloadDepartments from '../api/departmentsDB';
import downloadBookings from '../api/bookingsDB';
import Login from './Login';
import SignUp from './signup';

const store = configureStore();

class App extends React.Component {
  componentDidMount() {
    downloadDepartments(store);
    downloadBookings(store);
  }

  render() {
    // alert('store : ' + JSON.stringify(store));
    // alert(JSON.stringify(this.props));
    return (
      <Provider store={store}>
        <BrowserRouter className="App">
          <div className="desktop">
            <LogoText />
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomeView />
              </Route>
              <Route path="/services">
                <DepartmentsView />
              </Route>
              <Route path="/doctors">
                <DoctorsView />
              </Route>
              <Route path="/booking">
                <BookingView store={store} />
              </Route>
              <Route path="/editBooking">
                <EditBookingView store={store} />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
