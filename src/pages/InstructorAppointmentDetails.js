import React from 'react'
import Card from 'react-bootstrap/Card';
import { Modal, Button } from 'react-bootstrap'
function InstructorAppointmentDetails() {
  return (
    <div className='mx-6 mt-8'>

      <Card>
          <Card.Title style={{ textAlign : 'center', marginTop : '15' }}>Your Appointments</Card.Title>
        <Card.Body>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Start Time</th>
      <th scope="col">End Time</th>
      <th scope="col">Client Name</th>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </Card.Body>
        
      </Card>
    </div>
  )
}
export default InstructorAppointmentDetails;
