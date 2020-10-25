import { initBookings, initBooking } from '../actions/actionsIndex';
import { appAlert } from '../utils';
import getCookieValue from '../appCookies';

export async function downloadBookings(store) {
  const loggedin = getCookieValue('loggedin');
  if (!loggedin) {
    return;
  }
  const bookingsURL = '/bookings?user=true';
  fetch(bookingsURL)
    .then(response => response.json())
    .then(data => {
      store.dispatch(initBookings(data));
    })
    .catch(err => appAlert('download Bookings', 'Error :  '.concat(err)));
}

export async function downloadBooking(id, store) {
  const loggedin = getCookieValue('loggedin');
  if (!loggedin) {
    return;
  }
  const bookingURL = `/bookings/${id}`;
  fetch(bookingURL)
    .then(response => response.json())
    .then(data => {
      store.dispatch(initBooking(data));
    })
    .catch(err => appAlert('download Booking', 'Error :  '.concat(err)));
}

export default {
  downloadBookings,
  downloadBooking,
};
