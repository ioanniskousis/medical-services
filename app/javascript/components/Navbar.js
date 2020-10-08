/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
  const { location } = props;
  const { pathname } = location;
  const viewHomeClass = pathname === '/home' ? 'nav-link nav-selected' : 'nav-link';
  const viewHelloClass = pathname === '/hello' ? 'nav-link nav-selected' : 'nav-link';
  const viewBookClass = pathname === '/book' ? 'nav-link nav-selected' : 'nav-link';
  const viewResultsClass = pathname === '/results' ? 'nav-link nav-selected' : 'nav-link';
  const viewContactClass = pathname === '/contact' ? 'nav-link nav-selected' : 'nav-link';
  const viewLoginClass = pathname === '/login' ? 'nav-link nav-selected' : 'nav-link';
  const viewCheckInClass = pathname === '/checkin' ? 'nav-link nav-selected' : 'nav-link';
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <ul className="right">
          <li><Link to="/home" className={viewHomeClass}>departments</Link></li>
          <li><Link to="/hello" className={viewHelloClass}>services</Link></li>
          <li><Link to="/book" className={viewBookClass}>book</Link></li>
          <li><Link to="/checkin" className={viewCheckInClass}>checkin</Link></li>
          <li><Link to="/results" className={viewResultsClass}>results</Link></li>
          <li><Link to="/contact" className={viewContactClass}>contact</Link></li>
          <li><a href="/sessions/new" className={viewLoginClass}>login</a></li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  pathname: PropTypes.string,
  location: PropTypes.string,
};

Navbar.defaultProps = {
  pathname: null,
  location: null,
};

export default withRouter(Navbar);
