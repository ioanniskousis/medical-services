import { initDepartments } from '../actions/actionsIndex';
import { appAlert } from '../utils';

async function downloadDepartments(store) {
  const depatmentsURL = '/departments';
  fetch(depatmentsURL)
    .then(response => response.json())
    .then(data => {
      const sortedDepartments = data.sort((a, b) => ((a.order < b.order) ? -1 : 1));
      store.dispatch(initDepartments(sortedDepartments));
    })
    .catch(err => appAlert('download Departments', 'Error :  '.concat(err)));
}
export default downloadDepartments;
