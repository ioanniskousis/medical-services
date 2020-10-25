const INIT_DEPARTMENTS = 'INIT_DEPARTMENTS';
const INIT_DOCTORS = 'INIT_DOCTORS';
const INIT_BOOKINGS = 'INIT_BOOKINGS';
const INIT_BOOKING = 'INIT_BOOKING';
const ADD_BOOKING = 'ADD_BOOKING';

const initDepartments = departments => ({
  type: INIT_DEPARTMENTS,
  departments,
});

const initDoctors = doctors => ({
  type: INIT_DOCTORS,
  doctors,
});

const initBookings = bookings => ({
  type: INIT_BOOKINGS,
  bookings,
});

const initBooking = booking => ({
  type: INIT_BOOKING,
  booking,
});

const addBooking = booking => ({
  type: ADD_BOOKING,
  booking,
});

export {
  initDepartments,
  initDoctors,
  initBookings,
  initBooking,
  addBooking,
};
