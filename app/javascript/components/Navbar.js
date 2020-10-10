/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

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
  const viewResultsClass = pathname === '/results' ? 'nav-link nav-selected' : 'nav-link';
  const viewContactClass = pathname === '/contact' ? 'nav-link nav-selected' : 'nav-link';
  const viewLoginClass = pathname === '/login' ? 'nav-link nav-selected' : 'nav-link';
  const viewCheckInClass = pathname === '/checkin' ? 'nav-link nav-selected' : 'nav-link';
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="nav-wrapper-ul">
          <li><Link to="/" className={viewHomeClass}>home</Link></li>
          <li><Link to="/services" className={viewServicesClass}>services</Link></li>
          <li><Link to="/doctors" className={viewDoctorsClass}>doctors</Link></li>
          <li><Link to="/booking" className={viewBookClass}>booking</Link></li>
          <li><Link to="/checkin" className={viewCheckInClass}>check in</Link></li>
          <li><Link to="/results" className={viewResultsClass}>results</Link></li>
          <li><Link to="/contact" className={viewContactClass}>contact</Link></li>
          <li><a href="/sessions/new" className={viewLoginClass}>log in</a></li>
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
