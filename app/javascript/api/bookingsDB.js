import { initBookings } from '../actions/actionsIndex';
import { appAlert } from '../utils';
import getCookieValue from '../appCookies';

async function downloadBookings(store) {
  const loggedin = getCookieValue('loggedin');
  if (!loggedin) {
    return;
  }
  const depatmentsURL = '/bookings?user=true';
  fetch(depatmentsURL)
    .then(response => response.json())
    .then(data => {
      alert('downloadBookings : ' + JSON.stringify(data));
      store.dispatch(initBookings(data));
    })
    .catch(err => appAlert('download Bookings', 'Error :  '.concat(err)));
}
export default downloadBookings;
