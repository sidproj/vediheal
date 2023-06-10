import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';

const DateModal = ({ setSelectedDate, setSelectedTime, setSelectedEndTime }) => {
  const [isShow, setIsShow] = useState(false);
  const [selectedDate, setSelectedDateInternal] = useState(null);
  const [selectedTime, setSelectedTimeInternal] = useState(null);

  const toggleModal = () => {
    setIsShow(!isShow);
  };

  const handleDate = (event) => {
    const date = event.target.value;
    setSelectedDateInternal(date);
  };

  const handleTime = (event) => {
    const time = event.target.value;
    setSelectedTimeInternal(time);
  };

  const handleConfirm = () => {
    setSelectedDate(selectedDate);
    setSelectedTime(selectedTime);
    setSelectedEndTime(getEndTime(selectedTime));
    toggleModal();
  };

  const getEndTime = (startTime) => {
    const startDateTime = new Date(selectedDate + ' ' + startTime);
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60000); // Adding 30 minutes (30 * 60 * 1000 milliseconds)
    return endDateTime.toLocaleTimeString();
  };

  return (
    <>
      <div onClick={toggleModal}>Appointment Date</div>
      <Modal show={isShow} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment Date and Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>Select Date</div>
            <div className="time">
              <MDBInput
                className="mx-auto inputColor"
                wrapperClass="w-100"
                id="startDate"
                type="date"
                onChange={handleDate}
                responsive
                fluid
              />
            </div>
          </div>
          <div>
            <div>Select Time</div>
            <div className="time">
              <MDBInput
                className="mx-auto inputColor"
                wrapperClass="w-100"
                id="startTime"
                type="time"
                onChange={handleTime}
                responsive
                fluid
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={toggleModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DateModal;
