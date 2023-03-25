import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DatePickerModal = () => {
  const [isShow, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([
    { start: '10:00 AM' },
    { start: '11:00 AM' },
    { start: '12:00 PM' },
    { start: '02:00 PM' },
    { start: '03:00 PM' },
    { start: '04:00 PM' },
    { start: '05:00 PM' },
  ]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDateChange = date => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotClick = timeSlot => {
    setSelectedTimeSlot(timeSlot);
  };

  const filteredTimeSlots = timeSlots.filter(timeSlot => {
    const selectedDateString = selectedDate.toDateString();
    const timeSlotDateString = new Date(
      `${selectedDateString} ${timeSlot.start}`
    ).toDateString();
    return timeSlotDateString === selectedDateString;
  });

  return (
    <>
      <div onClick={handleShow}>Select Appointment Slot</div>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Slots</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div>
              <Carousel emulateTouch infiniteLoop showStatus={false}>
                {Array.from({ length: 7 }).map((_, index) => (
                  <div key={index}>
                    <Calendar
                      onChange={handleDateChange}
                      value={selectedDate}
                    />
                    <div>
                      Available time slots:
                      {filteredTimeSlots.map(timeSlot => (
                        <div
                          key={timeSlot.start}
                          className={`timeSlot ${
                            timeSlot === selectedTimeSlot ? 'selected' : ''
                          }`}
                          onClick={() => handleTimeSlotClick(timeSlot)}
                        >
                          {timeSlot.start}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div>Selected date: {selectedDate.toLocaleDateString()}</div>
            {selectedTimeSlot && (
              <div>
                Selected time: {selectedTimeSlot.start}
              </div>
            )}
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DatePickerModal;
