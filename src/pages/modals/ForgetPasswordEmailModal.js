import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../UserProfile.css'
function ForgetPasswordEmailModal() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  return (
    <>
      <a className="text-primary" onClick={initModal}>
                            Forgot password?
                          </a>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Forgot Your Password?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div class="form-group">
              <label for="exampleInputEmail1">New password will be sent at this email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
             
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
export default ForgetPasswordEmailModal;
