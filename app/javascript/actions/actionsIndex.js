const INIT_DEPARTMENTS = 'INIT_DEPARTMENTS';
const INIT_DOCTORS = 'INIT_DOCTORS';
const INIT_BOOKINGS = 'INIT_BOOKINGS';

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

export {
  initDepartments,
  initDoctors,
  initBookings,
};
