const INIT_DEPARTMENTS = 'INIT_DEPARTMENTS';
const INIT_DOCTORS = 'INIT_DOCTORS';
const INIT_BOOKINGS = 'INIT_BOOKINGS';

const initDataReducer = (state = {
  departments: [],
  doctors: [],
  bookings: [],
}, action) => {
  switch (action.type) {
    case INIT_DEPARTMENTS:
    { // alert('action.departments : ' + JSON.stringify(action.departments));
      return {
        departments: action.departments,
        doctors: state.doctors,
        bookings: state.bookings,
      };
    }
    case INIT_DOCTORS:
    {
      return {
        departments: state.departments,
        doctors: action.doctors,
        bookings: state.bookings,
      };
    }
    case INIT_BOOKINGS:
    {
      if (action.bookings) {
        // alert('action.bookings : ' + Object.keys(action.bookings[0]));
      }
      return {
        departments: state.departments,
        doctors: state.doctors,
        bookings: action.bookings,
      };
    }
    default:
      return state;
  }
};

export default initDataReducer;
