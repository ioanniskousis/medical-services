import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCookie from '../appCookies';

import BookingPanel from '../components/bookingPanel';

const BookingView = props => {
  const loggedin = getCookie('loggedin');
  const userfullname = getCookie('userfullname');
  const username = (userfullname || 'unknown').replace('+', ' ');
  const { clinicData } = props;
  const { bookings } = clinicData;
  const { store } = props;

  let bookingsList = '';
  if (loggedin) {
    bookingsList = bookings.map(booking => (
      <BookingPanel
        booking={booking}
        key={booking.id}
        store={store}
      />
    ));
  }

  const newButtonDiv = loggedin ? (
    <div className="newButtonDiv">
      <div>
        <Link to="/newBooking" className="nav-link nav-selected">add new</Link>
      </div>
    </div>
  ) : ('');

  const bookingView = loggedin ? (
    <div className="bookingView">
      <div className="bookingViewHeader">
        <h2>{username}</h2>
        <p>Personal Booking Records</p>
      </div>
      {newButtonDiv}
      <div className="bookingsList">
        {bookingsList}
      </div>
    </div>
  ) : ('');

  const caption = loggedin ? ('') : (
    <div className="bookingsNotLogged">
      <h1>Bookings Desktop View</h1>
      <h2>you are not logged in</h2>
    </div>
  );

  const loginButton = loggedin ? ('') : (
    <Link to="/login" className="nav-link nav-selected">log in</Link>
  );

  return (
    <div className="desktop-right">
      <div className="bookingsDesktop">
        {caption}
        {loginButton}
        {bookingView}
      </div>
    </div>
  );
};

BookingView.propTypes = {
  clinicData: PropTypes.objectOf(PropTypes.any),
  store: PropTypes.objectOf(PropTypes.any),
};

BookingView.defaultProps = {
  clinicData: null,
  store: null,
};

const mapStateToProps = state => ({
  clinicData: state.clinicData,
});

export default connect(mapStateToProps, null)(BookingView);
