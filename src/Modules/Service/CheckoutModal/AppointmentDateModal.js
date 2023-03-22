import React, { useState } from 'react';

const availableTimes = {
  '2023-03-22': ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM'],
  '2023-03-23': ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'],
  '2023-03-24': ['10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'],
};

const AppointmentDateModal = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimesForSelectedDate, setAvailableTimesForSelectedDate] = useState([]);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    setAvailableTimesForSelectedDate(availableTimes[newDate] || []);
    setSelectedTime('');
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="pill-selector">
      <div className="date-selector">
        <label htmlFor="date-picker">Select a date:</label>
        <input type="date" id="date-picker" onChange={handleDateChange} value={selectedDate} />
      </div>
      {availableTimesForSelectedDate.length > 0 && (
        <div className="time-selector">
          <label htmlFor="time-picker">Select a time:</label>
          <select id="time-picker" onChange={handleTimeChange} value={selectedTime}>
            <option value="">Select a time</option>
            {availableTimesForSelectedDate.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default AppointmentDateModal;
