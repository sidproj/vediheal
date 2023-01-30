import React from 'react'
import Card from 'react-bootstrap/Card';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Modal, Button } from 'react-bootstrap'
function InstructorPastAppointmentDetails() {
  return (
    <div className='mx-6 mt-8' >

      <Card>
          <Card.Title style={{ textAlign : 'center', marginTop : '15' }} >Previous Appointments</Card.Title>
        <Card.Body>

     <MDBTable responsive={true}>
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
        </Card.Body>
        
      </Card>
    </div>
  )
}
export default InstructorPastAppointmentDetails;
