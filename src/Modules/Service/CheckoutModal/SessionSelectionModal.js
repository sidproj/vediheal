import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import moment from 'moment';

function SessionSelectionModal() {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSelect = (selectedIndex, e) => {
    // handle carousel item selection
  };

  const formattedDate = moment(date).format('MMMM Do YYYY');

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Select Session
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Session for {formattedDate}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel onSelect={handleSelect}>
            <Carousel.Item>
              <h3>Session 1</h3>
              <p>Session 1 description</p>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Session 2</h3>
              <p>Session 2 description</p>
            </Carousel.Item>
            <Carousel.Item>
              <h3>Session 3</h3>
              <p>Session 3 description</p>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <DatePicker onChange={handleDateChange} value={date} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SessionSelectionModal;