/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import axios from 'axios';
import xmark from '../../assets/images/interface/x-mark-64.png';
import pen from '../../assets/images/interface/edit-64.png';
import { gel, appAlert } from '../utils';

class BookingPanel extends React.Component {
  constructor(props) {
    super(props);
    const { booking } = props;
    const timeStamp = booking.timeStamp ? new Date(booking.timeStamp) : null;
    const timeLabel = timeStamp ? format(timeStamp, 'MMMM dd, yyyy hh:mm') : 'date undefined';
    this.state = {
      id: booking.id,
      timeStamp: timeLabel,
      department: booking.department || '',
      doctorsBoard: booking.doctorsBoard || '',
      description: booking.description || '',
    };
    this.deleteBooking = this.deleteBooking.bind(this);
  }

  async deleteBooking(e) {
    const id = e.currentTarget.getAttribute('bookingpanel');

    const bookingURL = `/bookings/${id}`;
    const options = {
      method: 'DELETE',
      url: bookingURL,
      withCredentials: true,
    };
    await axios.delete(bookingURL, options)
      .then(res => {
        if (res.status === 204) {
          const bookingPanel = gel(`bookingPanel-${id}`);
          if (bookingPanel) {
            bookingPanel.remove();
          }
        }
      })
      .catch(err => appAlert('delete Booking', 'Error :  '.concat(err)));
  }

  render() {
    const {
      id,
      timeStamp,
      department,
      doctorsBoard,
      description,
    } = this.state;

    const bookingPanelMid = doctorsBoard.length > 0 ? (
      <div className="bookingPanelMid">
        <div className="bookingDoctorsBoard">
          {doctorsBoard}
        </div>
      </div>
    ) : ('');
    const bookingPanelDetails = description.length > 0 ? (
      <div className="bookingPanelDetails">
        <div className="bookingDescription">
          {description}
        </div>
      </div>
    ) : ('');

    return (
      <div id={`bookingPanel-${id}`} className="bookingPanel" key={id}>
        <div className="bookingPanelTop">

          <div className="bookingTimeStamp">
            {timeStamp}
          </div>

          <div className="bookingDepartment">
            {department}
          </div>
          <Link to={`/editBooking/${id}`} className="editBookingButton">
            <img src={pen} alt="" />
          </Link>
          <div
            className="editBookingButton"
            bookingpanel={id}
            onClick={this.deleteBooking}
          >
            <img src={xmark} alt="" />
          </div>
        </div>

        {bookingPanelMid}
        {bookingPanelDetails}
      </div>
    );
  }
}

BookingPanel.propTypes = {
  booking: PropTypes.objectOf(PropTypes.any),
};

BookingPanel.defaultProps = {
  booking: null,
};

export default withRouter(BookingPanel);
