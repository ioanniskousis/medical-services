import React from 'react';
import PropTypes from 'prop-types';
import LogoText from './logoText';
import Navbar from './Navbar';

const Desktop = props => {
  const { location } = props;
  const { pathname } = location;
  alert('pathname : ' + pathname);
  return (
    <div className="desktop" props={props}>
      <LogoText />
      <Navbar />
    </div>
  );
};

Desktop.propTypes = {
  pathname: PropTypes.string,
  location: PropTypes.string,
};

Desktop.defaultProps = {
  pathname: null,
  location: null,
};

export default Desktop;
