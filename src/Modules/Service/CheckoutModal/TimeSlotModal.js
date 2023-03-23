import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '400px',
  },
};

function TimeSlot({ timeSlot, isSelected, onSelect }) {
  const className = isSelected ? 'time-slot selected' : 'time-slot';
  return (
    <div className={className} onClick={() => onSelect(timeSlot)}>
      <p>{timeSlot}</p>
    </div>
  );
}

function TimeSlotModal() {
  const [isShow, invokeModal] = React.useState(false); 
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  // mock data
  const availableDates = [
    '2022-01-01',
    '2022-01-02',
    '2022-01-03',
    '2022-01-04',
    '2022-01-05',
  ];

  const mockTimeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
  ];

  function handleDateChange(date) {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  }

  function handleTimeSlotSelect(timeSlot) {
    setSelectedTimeSlot(timeSlot);
  }

  function initModal() {
    return invokeModal(!isShow);
  }

  return (
    <>
      <div onClick={initModal}>
      Time slot
      </div>
      <Modal show={isShow} style={customStyles}>
      <Modal.Header closeButton onClick={initModal} className="formCol"> 
          <Modal.Title><h2>Select a time slot</h2></Modal.Title> 
        </Modal.Header>
         <Modal.Body className="formCol">
        <div>
          <p>Select a date:</p>
          <div className="date-slider">
            {availableDates.map((date) => (
              <button
                key={date}
                className={selectedDate === date ? 'selected' : ''}
                onClick={() => handleDateChange(date)}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
        {selectedDate && (
          <div>
            <p>Selected Date: {selectedDate}</p>
            <div className="time-slots">
              {mockTimeSlots.map((timeSlot) => (
                <TimeSlot
                  key={timeSlot}
                  timeSlot={timeSlot}
                  isSelected={timeSlot === selectedTimeSlot}
                  onSelect={handleTimeSlotSelect}
                />
              ))}
            </div>
          </div>
        )}
        </Modal.Body>
        <Modal.Footer className="formCol"> 
          <Button variant="danger" onClick={initModal}> 
            Close 
          </Button> 
         </Modal.Footer> 
      </Modal> 
    </>
  );
}

export default TimeSlotModal;