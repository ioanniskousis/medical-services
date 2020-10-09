const INIT_DEPARTMENTS = 'INIT_DEPARTMENTS';
const INIT_DOCTORS = 'INIT_DOCTORS';

const departmentsReducer = (state = {
  departments: [],
  doctors: [],
}, action) => {
  switch (action.type) {
    case INIT_DEPARTMENTS:
    {
      return {
        departments: action.departments,
        doctors: state.doctors,
      };
    }
    case INIT_DOCTORS:
    {
      return {
        departments: state.departments,
        doctors: action.doctors,
      };
    }
    default:
      return state;
  }
};

export default departmentsReducer;
