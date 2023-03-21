import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function UpdateMeetingLinkModal(props) {
  const data = props.data;
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    setIsShow(false);
  };

  const handleShow = () => {
    setIsShow(true);
  };

  console.log(props);

  return (
    <>
      <Button variant="primary" className="bookingButton" onClick={handleShow}>
        Update Meeting Link
      </Button>

      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Meeting Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Current Meeting Link: {/* data.meeting_link */}</p>
          <p>
            <strong>Enter new meeting link:</strong>
          </p>
          <input type="text" className="form-control" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateMeetingLinkModal;
