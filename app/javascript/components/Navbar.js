/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import getCookieValue from '../appCookies';

const Navbar = props => {
  const { location } = props;
  if (!location) {
    return (<div />);
  }
  const { pathname } = location;
  if (pathname === '/') {
    return (<div />);
  }
  const viewHomeClass = (pathname === '/') ? 'nav-link nav-selected' : 'nav-link';
  const viewServicesClass = pathname === '/services' ? 'nav-link nav-selected' : 'nav-link';
  const viewDoctorsClass = pathname === '/doctors' ? 'nav-link nav-selected' : 'nav-link';
  const viewBookClass = pathname === '/booking' ? 'nav-link nav-selected' : 'nav-link';
  const viewEditBookClass = pathname === '/editBooking' ? 'nav-link nav-selected' : 'nav-link';
  const viewResultsClass = pathname === '/results' ? 'nav-link nav-selected' : 'nav-link';
  const viewContactClass = pathname === '/contact' ? 'nav-link nav-selected' : 'nav-link';
  const viewLoginClass = 'nav-link colorGreen';
  const viewLogoutClass = 'nav-link colorRed';
  const viewCheckInClass = pathname === '/checkin' ? 'nav-link nav-selected' : 'nav-link';

  const loggedin = getCookieValue('loggedin');
  const loginButton = !loggedin ? (
    <li><Link to="/login" className={viewLoginClass}>log in</Link></li>
  ) : '';
  const logoutButton = loggedin ? (
    <li><a href="/sessions/0" className={viewLogoutClass}>log out</a></li>
  ) : '';
  const newBookingButton = loggedin ? (
    <li><Link to="/editBooking" className={viewEditBookClass}>new</Link></li>
  ) : '';

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="nav-wrapper-ul">
          <li><Link to="/" className={viewHomeClass}>home</Link></li>
          <li><Link to="/services" className={viewServicesClass}>services</Link></li>
          <li><Link to="/doctors" className={viewDoctorsClass}>doctors</Link></li>
          <li><Link to="/booking" id="nav-link-booking" className={viewBookClass}>booking</Link></li>
          {newBookingButton}
          <li><Link to="/checkin" className={viewCheckInClass}>check in</Link></li>
          <li><Link to="/results" className={viewResultsClass}>results</Link></li>
          <li><Link to="/contact" className={viewContactClass}>contact</Link></li>
          {loginButton}
          {logoutButton}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  pathname: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.any),
};

Navbar.defaultProps = {
  pathname: null,
  location: null,
};

export default withRouter(Navbar);
