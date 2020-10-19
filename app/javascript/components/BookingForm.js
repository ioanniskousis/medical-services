/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

import { gel, appAlert } from '../utils';
import { downloadBookings } from '../api/bookingsDB';

class BookingForm extends React.Component {
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
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    if (id > 0) {
      axios.get(`/bookings/${id}`)
        .then(res => {
          const timeStampDate = res.data.timeStamp ? new Date(res.data.timeStamp) : null;
          const timeLabel = timeStampDate ? format(timeStampDate, 'MMMM dd, yyyy hh:mm') : 'date undefined';

          const booking = {
            id: res.data.id,
            timeStamp: timeLabel,
            department_id: res.data.department_id,
            doctorsBoard: res.data.doctorsBoard,
            description: res.data.description,
          };
          this.setState(booking);
        });
    }
  }

  clearform = () => {
    gel('timeStamp').value = '';
    gel('doctorsBoard').value = '';
    gel('bookingSelectDepartment').value = 0;
    gel('bookingDescription').value = '';
  }

  handleTimeStampChange(e) {
    e.preventDefault();
    this.setState({
      timeStamp: e.target.value,
    });
  }

  handleDepartmentChange(e) {
    e.preventDefault();
    this.setState({
      department_id: e.target.value,
    });
  }

  handleDoctorsBoardChange(e) {
    e.preventDefault();
    this.setState({
      doctorsBoard: e.target.value,
    });
  }

  handleDescriptionChange(e) {
    e.preventDefault();
    this.setState({
      description: e.target.value,
    });
  }

  async add() {
    const bookingURL = '/bookings';
    const options = {
      method: 'POST',
      url: bookingURL,
      withCredentials: true,
      data: this.state,
    };
    const { history } = this.props;
    await axios.post(bookingURL, options)
      .then(res => {
        if (res.status === 201) {
          this.setState({
            id: res.data.id,
          });
          const { store } = this.props;
          downloadBookings(store)
            .then(
              history.push('/booking'),
            );
        }
      })
      .catch(err => appAlert('Booking create', 'Error :  '.concat(err)));
  }

  async update(id) {
    const bookingURL = `/bookings/${id}`;
    const options = {
      method: 'PATCH',
      url: bookingURL,
      withCredentials: true,
      data: this.state,
    };
    const { history } = this.props;
    await axios.patch(bookingURL, options)
      .then(res => {
        if (res.status === 200) {
          const { store } = this.props;
          downloadBookings(store)
            .then(
              history.push('/booking'),
            );
        }
      })
      .catch(err => appAlert('Booking update', 'Error :  '.concat(err)));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id } = this.state;
    if (id === 0) {
      this.add();
    } else {
      this.update(id);
    }
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

    const submitCaption = id === 0 ? 'Add Booking' : 'Update';
    const departmentOptions = [
      (
        <option
          className="bookingSelectDepartmentOption"
          key={0}
          value={0}
        >
          Select Department
        </option>
      ),
    ];

    departments.map(department => (
      departmentOptions.push(
        (
          <option
            className="bookingSelectDepartmentOption"
            key={department.id}
            value={department.id}
          >
            {department.name}
          </option>
        ),
      )
    ));

    return (
      <form>
        <div className="bookingPanel" key={id}>
          <input type="hidden" id="id" name="id" value={id} />
          <div className="editBookingPanelTop">
            <input
              className="inputBookingTimeStamp"
              id="timeStamp"
              name="timeStamp"
              type="datetime-local"
              value={timeStamp}
              onChange={this.handleTimeStampChange}
              placeholder="time stamp"
            />
            <div className="selectContainer">
              <select id="bookingSelectDepartment" className="bookingSelectDepartment" value={department_id} onChange={this.handleDepartmentChange}>
                {departmentOptions}
              </select>
            </div>
          </div>
          <div className="bookingPanelMid">
            <input
              className="inputBookingDoctorsBoard"
              id="doctorsBoard"
              name="doctorsBoard"
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
            <Link to="/booking" className="nav-link nav-selected">cancel</Link>
            <input
              disabled={!this.validateForm()}
              type="button"
              className="nav-link nav-selected"
              value={submitCaption}
              onClick={this.handleSubmit}
            />
          </div>
        </div>

      </form>
    );
  }
}

export default withRouter(BookingForm);
