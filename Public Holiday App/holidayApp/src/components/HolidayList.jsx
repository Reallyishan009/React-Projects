import React from 'react';

const HolidayList = ({ holidays }) => {
  if (!holidays || holidays.length === 0) {
    return <p className="no-holidays">No holidays found for this country.</p>;
  }

  return (
    <div className="holiday-container">
      <h2>Holidays for 2025</h2>
      <ul className="holiday-list">
        {holidays.map((holiday) => {
          // Format the date to be more readable
          const date = new Date(holiday.date);
          const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          return (
            <li key={holiday.id} className="holiday-item">
              <span className="holiday-name">{holiday.name}</span>
              <span className="holiday-date">{formattedDate}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HolidayList;