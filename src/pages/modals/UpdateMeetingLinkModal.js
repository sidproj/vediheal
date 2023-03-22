import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function UpdateMeetingLinkModal(props) {
  const data = props.data;
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleSave = async () => {
    const link = document.getElementById("meeting").value;
    if( link == null || link == undefined || link.length == 0)return;
    const data = {
      // "jwt":props.instructorJWT,
      "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzY1Zjg2YmU2NzM1NjJlNDI5MjczNiIsImlhdCI6MTY3OTQxNjI5M30.-K_r_KCB_fdC_zmcDfYm50m8Lt3qBDiC6DTKz_d6MjA",
      "appointment_id":props.data._id,
      "meeting_link":link
    }
    let url="https://vediheal-backend.vercel.app/appointment/changeLink";

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
      }
    }
    const res = await fetch(url,options);
    const body = await res.json();
    console.log(body);
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
          <input type="text" id="meeting" className="form-control" />
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
