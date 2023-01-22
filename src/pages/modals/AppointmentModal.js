import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../UserProfile.css'
function AppointmentModal() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  return (
    <>
      <button onClick={initModal} class="btn btn-col" type="button">
        Appointment
      </button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Your Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>Start Time</th>
          <th scope='col'>End Time</th>
          <th scope='col'>Client Name</th>
          <th scope='col'>Servise</th>
          <th scope='col'>Price</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
         </Modal.Footer>
      </Modal>
    </>
  )
}
export default AppointmentModal;
