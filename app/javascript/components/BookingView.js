/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCookie from '../appCookies';

import BookingPanel from './bookingPanel';

const BookingView = props => {
  const loggedin = getCookie('loggedin');
  const userfullname = getCookie('userfullname');
  const username = (userfullname || 'unknown').replace('+', ' ');
  const { clinicData } = props;
  const { bookings } = clinicData;

  const bookingsList = loggedin ? (bookings.map((booking, index) => (
    <BookingPanel
      booking={booking}
      key={index + 1}
    />
  ))) : ('');

  const bookingView = loggedin ? (
    <div className="bookingView">
      <div className="bookingViewHeader">
        <h2>{username}</h2>
        <p>Personal Booking Records</p>
      </div>
      <div className="bookingsList">
        {bookingsList}
      </div>
    </div>
  ) : ('');

  const caption = loggedin ? ('') : (
    <div>
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
};

BookingView.defaultProps = {
  clinicData: null,
};

const mapStateToProps = state => ({
  clinicData: state.clinicData,
});

export default connect(mapStateToProps, null)(BookingView);
