const INIT_DEPARTMENTS = 'INIT_DEPARTMENTS';
const INIT_DOCTORS = 'INIT_DOCTORS';
const SHOW_PROFILE = 'SHOW_PROFILE';
const SHOW_LIST = 'SHOW_LIST';

const initDepartments = departments => ({
  type: INIT_DEPARTMENTS,
  departments,
});

const initDoctors = doctors => ({
  type: INIT_DOCTORS,
  doctors,
});

const showProfile = event => ({
  type: SHOW_PROFILE,
  event,
});

const showList = () => ({
  type: SHOW_LIST,
});

export {
  initDepartments,
  initDoctors,
  showProfile,
  showList,
};
