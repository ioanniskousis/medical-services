import React from 'react';

const BookingPanel = (booking, index) => {
  return (
    <div className="bookingPanel" key={index + 1}>
      {JSON.stringify(booking)}
    </div>
  );
};

export default BookingPanel;
