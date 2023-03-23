import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./TimeSlotPicker.css"

const dates = [
  { date: '2023-03-24', timeSlots: ['10:00 AM', '11:00 AM', '12:00 PM'] },
  { date: '2023-03-25', timeSlots: ['1:00 PM', '2:00 PM', '3:00 PM'] },
  { date: '2023-03-26', timeSlots: ['4:00 PM', '5:00 PM', '6:00 PM'] },
  { date: '2023-03-27', timeSlots: ['5:00 PM', '6:00 PM', '7:00 PM'] },
  { date: '2023-03-28', timeSlots: ['6:00 PM', '7:00 PM', '8:00 PM'] },
  { date: '2023-03-29', timeSlots: ['7:00 PM', '8:00 PM', '9:00 PM'] },
];

const TimeSlotPicker = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const selectedDate = dates[selectedDateIndex];
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isShow, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDateClick = (index) => {
    setSelectedDateIndex(index);
    setSelectedTimeSlot(null); // reset time slot selection when changing dates
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };
  
  return (
    <>
      <div onClick={handleShow}>Select Appointment Slot</div>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Slots</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="parent-element">
            {/* Carousel of dates */}
            <Carousel 
              activeIndex={selectedDateIndex} 
              onSelect={(index) => handleDateClick(index)}
              interval={null}
              indicators={false}
              style={{ marginBottom: '20px' }}
              classname="carousel"
            >
              {dates.map((date, index) => (
                <Carousel.Item key={date.date}>
                  <button
                    className={`btn ${selectedDateIndex === index ? 'btn-primary' : 'btn-outline-primary'} rounded-pill date-button`}
                    onClick={() => handleDateClick(index)}
                  >
                    {date.date}
                  </button>
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Available time slots for selected date */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {selectedDate.timeSlots.map((timeSlot) => (
                <button
                  key={timeSlot}
                  style={{ margin: '0 10px', backgroundColor: '#fce4de', borderRadius: '50px' }}
                  onClick={() => handleTimeSlotClick(timeSlot)}
                  className={selectedTimeSlot === timeSlot ? 'active' : ''}
                  disabled={selectedTimeSlot !== null && selectedTimeSlot !== timeSlot}
                >
                  {timeSlot}
                </button>
              ))}
            </div>
          </div>
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

export default TimeSlotPicker;
