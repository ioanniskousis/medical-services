/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCookie from '../appCookies';

import BookingForm from './BookingForm';

class EditBookingView extends Component {
  render() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const userfullname = getCookie('userfullname');
    const username = (userfullname || 'unknown').replace('+', ' ');
    const paragraph = id ? 'Editing Booking Details' : 'Add New Booking';
    const { store } = this.props;

    return (
      <div className="desktop-right">
        <div className="bookingsDesktop">
          <div className="bookingView">
            <div className="bookingViewHeader">
              <h2>{username}</h2>
              <p>{paragraph}</p>
            </div>
            <BookingForm
              store={store}
            />
          </div>
        </div>
      </div>
    );
  }
}

EditBookingView.propTypes = {
  store: PropTypes.objectOf(PropTypes.any),
  params: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
};

EditBookingView.defaultProps = {
  store: null,
  params: null,
  match: null,
  id: null,
};

// const mapStateToProps = state => ({
//   clinicData: state.clinicData,
// });

// export default connect(mapStateToProps, null)(withRouter(EditBookingView));

export default withRouter(EditBookingView);
