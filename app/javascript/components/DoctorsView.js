import React from 'react';
import PropTypes from 'prop-types';

const DoctorsView = props => {
  const { doctors } = props;
  return (
    <div className="doctorsView">
      <h1>Doctors View</h1>
      {JSON.stringify(doctors)}
    </div>
  );
};

DoctorsView.propTypes = {
  doctors: PropTypes.objectOf(PropTypes.any),
};

DoctorsView.defaultProps = {
  doctors: null,
};

export default DoctorsView;
