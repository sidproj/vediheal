import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../UserProfile.css'
function BookAppointment() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  return (
    <>
       <button onClick={initModal} class="btn btn-col" type="button">
        Book Appointment
      </button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Change Your Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div class="form-group">
              
              <input type="password" class="form-control" id="oldPassword" placeholder="Enter Current Password" />
              <br />
              <input type="password" class="form-control" id="newPassword" placeholder="Enter New Password" />
              <br />
              <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm New Password" />
             
            </div>
            
      </form>    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <button type="submit" class="btn btn-danger">Submit</button>
         </Modal.Footer>
      </Modal>
    </>
  )
}
export default BookAppointment;
