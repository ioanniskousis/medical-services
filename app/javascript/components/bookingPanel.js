/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import axios from 'axios';
import xmark from '../../assets/images/interface/x-mark-64.png';
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
      department: booking.department_name || '',
      doctorsBoard: booking.doctorsBoard || '',
      description: booking.description || '',
    };
    this.deleteBooking = this.deleteBooking.bind(this);
  }

  async deleteBooking(e) {
    const id = e.target.getAttribute('bookingpanel');

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
          <div className="deleteBooking">
            <img
              bookingpanel={id}
              src={xmark}
              alt=""
              onClick={this.deleteBooking}
            />
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

export default BookingPanel;
