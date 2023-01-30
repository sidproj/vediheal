import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
function InstructorAppointmentDetails() {

  const getData = async ()=>{
    const data={
      "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzY1Zjg2YmU2NzM1NjJlNDI5MjczNiIsImlhdCI6MTY3NDUyODcyM30.jG4pUrC2M6iRsAtBb6QpqYXGusf9RnNOjQgBEmH4xzo",
    }
    const url = "http://localhost:5000/apointment/instructor";
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
  }

  useEffect(()=>{
    getData();
  },[]);
  

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
