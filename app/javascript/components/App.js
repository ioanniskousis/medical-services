/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import Navbar from './Navbar';
import LogoText from './logoText';
import Login from './Login';
import SignUp from './signup';
import HomeView from './homeView';
import DepartmentsView from './DepartmentsView';
import DoctorsView from './DoctorsView';
import BookingView from './BookingView';
import EditBookingView from './EditBookingView';
import downloadDepartments from '../api/departmentsDB';
import { downloadBookings } from '../api/bookingsDB';

const store = configureStore();

class App extends React.Component {
  componentDidMount() {
    downloadDepartments(store);
    downloadBookings(store);
  }

  render() {
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
              <Route path="/newBooking">
                <EditBookingView store={store} />
              </Route>
              <Route path="/editBooking/:id">
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
