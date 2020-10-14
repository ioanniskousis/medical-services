/* eslint-disable no-plusplus */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCookie from '../appCookies';

import BookingPanel from './bookingPanel';
import EditBookingPanel from './editBookingPanel';

const EditBookingView = props => {
  const loggedin = getCookie('loggedin');
  const userfullname = getCookie('userfullname');
  const username = (userfullname || 'unknown').replace('+', ' ');
  const { clinicData } = props;
  const { bookings } = clinicData;
  const { store } = props;

  const bookingEdit = loggedin ? (
    <EditBookingPanel
      booking={null}
      store={store}
    />
  ) : ('');

  let index = 0;
  let bookingsList = ('');
  if (loggedin) {
    bookingsList = bookings.map(booking => (
      <BookingPanel
        booking={booking}
        key={++index}
        store={store}
      />
    ));
  }

  const bookingView = loggedin ? (
    <div className="bookingView">
      <div className="bookingViewHeader">
        <h2>{username}</h2>
        <p>Personal Booking Records</p>
      </div>
      {bookingEdit}
      <div className="bookingsList">
        {/* {bookingsList} */}
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

EditBookingView.propTypes = {
  clinicData: PropTypes.objectOf(PropTypes.any),
  store: PropTypes.objectOf(PropTypes.any),
};

EditBookingView.defaultProps = {
  clinicData: null,
  store: null,
};

const mapStateToProps = state => ({
  clinicData: state.clinicData,
});

export default connect(mapStateToProps, null)(EditBookingView);
