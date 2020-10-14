/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
// import { format } from 'date-fns';
// import isDate from 'date-fns/isDate';
// import isValid from 'date-fns/isValid';
// import toDate from 'date-fns/toDate';

import axios from 'axios';
import appAlert from '../utils';
import downloadBookings from '../api/bookingsDB';

class EditBookingPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      timeStamp: '',
      department_id: 0,
      doctorsBoard: '',
      description: '',
    };
    this.handleTimeStampChange = this.handleTimeStampChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleDoctorsBoardChange = this.handleDoctorsBoardChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleTimeStampChange(e) {
    this.setState({
      timeStamp: e.target.value,
    });
  }

  handleDepartmentChange(e) {
    this.setState({
      department_id: e.target.value,
    });
  }

  handleDoctorsBoardChange(e) {
    this.setState({
      doctorsBoard: e.target.value,
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  clearForm() {
    this.setState = {
      id: 0,
      timeStamp: '',
      department_id: 0,
      doctorsBoard: '',
      description: '',
    };
  }

  async handleSubmit(event) {
    event.preventDefault();

    const bookingURL = '/bookings';
    const options = {
      method: 'POST',
      url: bookingURL,
      withCredentials: true,
      data: this.state,
    };
    await axios.post(bookingURL, options)
      .then(res => {
        if (res.status === 201) {
          const { store } = this.props;
          downloadBookings(store)
            .then(this.clearForm());
        }
      })
      .catch(err => appAlert('Booking create', 'Error :  '.concat(err)));
  }

  validateForm() {
    const { department_id } = this.state;
    const departmentSelected = department_id > 0;
    return departmentSelected;
  }

  render() {
    const {
      id,
      timeStamp,
      department_id,
      doctorsBoard,
      description,
    } = this.state;

    const { store } = this.props;
    const centeralState = store.getState();
    const { clinicData } = centeralState;
    const { departments } = clinicData;
    let index = 0;
    const departmentOptions = [
      (
        <option
          className="bookingSelectDepartmentOption"
          key={index}
          value={0}
        >
          Select Department
        </option>
      ),
    ];

    departments.map(department => (
      departmentOptions.push(
        <option
          className="bookingSelectDepartmentOption"
          key={++index}
          value={department.id}
        >
          {department.name}
        </option>
      )
    ));
    return (
      <form>
        <div className="bookingPanel" key={id}>
          <div className="editBookingPanelTop">
            <input
              className="inputBookingTimeStamp"
              id="timeStamp"
              name="timeStamp"
              type="text"
              value={timeStamp}
              onChange={this.handleTimeStampChange}
              placeholder="time stamp"
            />
            <div className="selectContainer">
              <select className="bookingSelectDepartment" value={department_id} onChange={this.handleDepartmentChange}>
                {departmentOptions}
              </select>
            </div>
          </div>
          <div className="bookingPanelMid">
            <input
              className="inputBookingDoctorsBoard"
              id="timeStamp"
              name="timeStamp"
              type="text"
              value={doctorsBoard}
              onChange={this.handleDoctorsBoardChange}
              placeholder="doctors"
            />
          </div>
          <div className="bookingPanelDetails">
            <textarea
              id="bookingDescription"
              name="bookingDescription"
              className="inputBookingDescription"
              onChange={this.handleDescriptionChange}
              value={description}
              placeholder="description"
            />
          </div>
          <div className="submitBookingContainer">
            <input
              disabled={!this.validateForm()}
              type="button"
              className="nav-link nav-selected"
              value="Add Booking"
              onClick={this.handleSubmit}
            />
          </div>
        </div>

      </form>
    );
  }
}

export default EditBookingPanel;
